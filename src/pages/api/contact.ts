import type { APIRoute } from 'astro';
import { z } from 'zod';
import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage } from 'mimetext';

// No pre-renderizar - ejecutar en el servidor
export const prerender = false;

// Schema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es muy corto'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, 'El mensaje es muy corto'),
  honeypot: z.string().max(0, 'Spam detectado').optional(),
});

type ContactData = z.infer<typeof contactSchema>;

export const POST: APIRoute = async ({ request, locals }) => {
  const headers = { 'Content-Type': 'application/json' };

  try {
    // 1. Parsear body
    const body = await request.json();

    // 2. Validar con Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: 'Validación fallida',
          details: result.error.flatten(),
        }),
        { status: 400, headers }
      );
    }

    // 3. Check honeypot (anti-bot) - Fingir éxito para no alertar al bot
    if (result.data.honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    }

    const { name, email, phone, company, product, message } = result.data;

    // 4. En desarrollo local, solo loguear
    const isDev = import.meta.env.DEV;

    if (isDev) {
      console.log('📧 [DEV] Email que se enviaría:');
      console.log('  To: administracion@emesoft.com');
      console.log('  From: contacto@perezperez.dev');
      console.log('  Reply-To:', email);
      console.log('  Subject: Nuevo contacto web -', name);
      console.log('  Datos:', { name, email, phone, company, product, message });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    }

    // 5. Producción: enviar via Cloudflare Email Workers
    const runtime = (locals as any).runtime;

    // Debug: log available bindings
    console.log('[EMAIL] Runtime check:', {
      hasRuntime: !!runtime,
      hasEnv: !!runtime?.env,
      envKeys: runtime?.env ? Object.keys(runtime.env) : [],
      hasEMAIL: !!runtime?.env?.EMAIL,
    });

    if (!runtime?.env?.EMAIL) {
      const availableBindings = runtime?.env ? Object.keys(runtime.env) : [];
      console.error('[EMAIL] EMAIL binding not available. Available:', availableBindings);
      return new Response(
        JSON.stringify({
          error: 'Servicio de email no configurado',
          debug: { availableBindings },
        }),
        { status: 503, headers }
      );
    }

    // Crear mensaje MIME
    const msg = createMimeMessage();
    msg.setSender({ name: 'EMESOFT Web', addr: 'contacto@perezperez.dev' });
    msg.setRecipient('administracion@emesoft.com');
    msg.setSubject(`Nuevo contacto web - ${name}`);
    msg.addMessage({
      contentType: 'text/html',
      data: generateEmailHTML({ name, email, phone, company, product, message }),
    });

    console.log('[EMAIL] Creating EmailMessage...');
    const emailMessage = new EmailMessage(
      'contacto@perezperez.dev',
      'administracion@emesoft.com',
      msg.asRaw()
    );

    console.log('[EMAIL] Sending via binding...');
    await runtime.env.EMAIL.send(emailMessage);
    console.log('[EMAIL] Sent successfully!');

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[EMAIL] Error en /api/contact:', errorMessage);
    console.error('[EMAIL] Stack:', error instanceof Error ? error.stack : 'no stack');

    return new Response(
      JSON.stringify({
        error: 'Error al enviar el mensaje. Inténtalo de nuevo.',
        debug: { message: errorMessage },
      }),
      { status: 500, headers }
    );
  }
};

function generateEmailHTML(data: Omit<ContactData, 'honeypot'>): string {
  const { name, email, phone, company, product, message } = data;
  const fecha = new Date().toLocaleString('es-ES', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo contacto web</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, 'Helvetica Neue', sans-serif; background-color: #f4f7fa; color: #333;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f7fa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(30,58,95,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1E3A5F 0%, #3D5A80 100%); padding: 30px 40px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                Nuevo mensaje de contacto
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">
                Recibido desde emesoft.com
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <!-- Nombre -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                  Nombre
                </p>
                <p style="margin: 0; font-size: 16px; color: #1E3A5F; font-weight: 500;">
                  ${escapeHtml(name)}
                </p>
              </div>

              <!-- Email -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                  Email
                </p>
                <p style="margin: 0; font-size: 16px;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #5B8DEE; text-decoration: none;">
                    ${escapeHtml(email)}
                  </a>
                </p>
              </div>

              ${
                phone
                  ? `
              <!-- Teléfono -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                  Teléfono
                </p>
                <p style="margin: 0; font-size: 16px;">
                  <a href="tel:${escapeHtml(phone)}" style="color: #5B8DEE; text-decoration: none;">
                    ${escapeHtml(phone)}
                  </a>
                </p>
              </div>
              `
                  : ''
              }

              ${
                company
                  ? `
              <!-- Empresa -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                  Empresa
                </p>
                <p style="margin: 0; font-size: 16px; color: #1E3A5F;">
                  ${escapeHtml(company)}
                </p>
              </div>
              `
                  : ''
              }

              ${
                product
                  ? `
              <!-- Producto de interés -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                  Producto de interés
                </p>
                <p style="margin: 0; font-size: 16px; color: #1E3A5F;">
                  <span style="display: inline-block; background-color: #E8F4FD; color: #1E3A5F; padding: 4px 12px; border-radius: 4px; font-weight: 500;">
                    ${escapeHtml(product)}
                  </span>
                </p>
              </div>
              `
                  : ''
              }

              <!-- Mensaje -->
              <div style="margin-bottom: 0;">
                <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                  Mensaje
                </p>
                <div style="background-color: #f8fafc; border-left: 3px solid #5B8DEE; padding: 16px 20px; border-radius: 0 6px 6px 0;">
                  <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">
${escapeHtml(message)}
                  </p>
                </div>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 40px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #64748B;">
                Enviado el ${fecha}
              </p>
            </td>
          </tr>
        </table>

        <!-- Email footer -->
        <p style="margin: 20px 0 0; font-size: 11px; color: #94a3b8;">
          Este email fue generado automáticamente desde el formulario de contacto de emesoft.com
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}

// Helper para escapar HTML y prevenir XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
