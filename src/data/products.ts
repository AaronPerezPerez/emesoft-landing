import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "emesport",
    name: "EMESPORT",
    tagline: "Calzado, Textil y Deporte",
    description:
      "Paquete de software altamente especializado en la gestión de empresas dedicadas a calzado, textil y deporte. 33 años de evolución constante.",
    color: "#1E3A5F",
    featured: true,
    target: ["Mayoristas", "Detallistas"],
    features: [
      // Gestión de tallas y colores
      "Gestión de tallas, colores y temporadas",
      "Infinitos sistemas de tallajes configurables",
      "Estadísticas de tallas más vendidas",
      // Gestor de imagen
      "Múltiples imágenes por artículo",
      "Generación automática de catálogos comerciales",
      // Control de compras
      "Pedidos de servicio futuro",
      "Control de fechas de servicio y retrasos",
      "Asesoramiento automático de compras",
      // Multialmacén
      "Control multialmacén ilimitado",
      "Traspasos masivos por lotes",
      "Entradas de mercancía automatizadas",
      // Terminal punto de venta
      "Terminal punto de venta especializado",
      "Recomendaciones automáticas de productos",
      "Regalos automáticos por importe de compra",
      // Marketing y fidelización
      "Tarjetas de clientes y fidelización",
      "Envíos masivos (email/SMS/correo)",
      "Gestión de cumpleaños y recompensas",
      "Cheques regalo automatizados",
      "Emisión y control de vales",
      // Reservas
      "Sistema de reservas con entregas a cuenta",
      "Histórico de entregas y pendientes",
      // Gestión comercial
      "Asignación de vendedores por nivel",
      "Cálculo de comisiones",
      "Automatización de rebajas",
      // Cajas
      "Múltiples cajas por almacén",
      "Arqueo de caja automático",
      "Gráficos de ventas por horas",
      // Financiero
      "Control de pagos y cobros",
      "Cartera de clientes y proveedores",
    ],
    image: "/images/caja_emesport.png",
  },
  {
    id: "emeservice",
    name: "EMESERVICE",
    tagline: "Servicio, Talleres y Distribución",
    description:
      "Aplicación diseñada para empresas de servicios, talleres de mecánica, servicio técnico y distribución.",
    color: "#1E3A5F",
    featured: false,
    target: ["Talleres mecánicos", "Servicio técnico", "Distribuidores"],
    features: [
      // Números de serie y garantía
      "Gestión de números de serie y garantía",
      "Seguimiento desde almacén hasta reparaciones",
      "Control de períodos de garantía",
      "Consultas rápidas de estado del producto",
      // Partes de asistencia técnica
      "Partes de asistencia técnica",
      "Control de fechas recogida y entrega",
      "Documentos para cliente y taller",
      "Integración con facturación",
      // Agenda de intervenciones
      "Agenda de intervenciones y visitas",
      "Organización de rutas de técnicos",
      "Control de kilometrajes",
      "Tiempos de intervención",
      // Presupuestos
      "Presupuestos integrados a facturación",
      "Facturas pro forma",
      "Catálogo con imágenes de productos",
      "Cálculo de beneficio",
      // Contratos
      "Contratos de mantenimiento",
      "Facturación automatizada de contratos",
      "Listados de recibos bancarios",
      // Gestión comercial
      "Centro de atención de llamadas",
      "Control de tiempos de trabajo",
      "Sistema de seguimiento de productos",
      "Cartera de clientes y proveedores",
      "Diseñador de documentos integrado",
    ],
    image: "/images/caja_emeservice.png",
  },
  {
    id: "emefood",
    name: "EMEFOOD",
    tagline: "Alimentación e Industria Alimentaria",
    description:
      "Software para gestión comercial de empresas dedicadas a la importación, exportación, producción y comercialización de productos alimenticios.",
    color: "#1E3A5F",
    featured: false,
    target: ["Importadores", "Exportadores", "Productores", "Distribuidores alimentarios"],
    features: [
      // Trazabilidad y lotes
      "Gestión completa de lotes y caducidades",
      "Trazabilidad de origen a destino",
      "Alertas de productos próximos a caducar",
      "Control FIFO/FEFO automático",
      // Importación/Exportación
      "Gestión de importación y exportación",
      "Control de documentación aduanera",
      "Gestión de certificaciones sanitarias (AESAN)",
      "Documentos de acompañamiento comercial",
      // Producción
      "Control de materias primas",
      "Gestión de recetas y fórmulas",
      "Costes de producción",
      "Mermas y desperdicios",
      // Almacén especializado
      "Multialmacén con zonas de temperatura",
      "Control de stock por lote y ubicación",
      "Entradas con control de calidad",
      // Ventas y facturación
      "Facturación con retenciones especiales",
      "Gestión de precios por temporada",
      "Tarifas por cliente y volumen",
      // Integración
      "Integración con báscula",
      "Etiquetado normativo automático",
      "Exportación a ERPs",
    ],
    image: "/images/caja_emefood.png",
  },
  {
    id: "emeclinic",
    name: "EMECLINIC",
    tagline: "Clínicas y Consultas Médicas",
    description:
      "Software desarrollado para gestionar cualquier tipo de consulta médica o clínica, independientemente de su especialidad.",
    color: "#1E3A5F",
    featured: false,
    target: ["Clínicas", "Consultas médicas", "Centros de salud"],
    features: [
      // Agenda de citas
      "Agenda de citas de pacientes",
      "Gestión desde ventana única",
      "Prescripciones desde agenda",
      "Creación de fichas de nuevos pacientes",
      // Historial médico
      "Historial médico completo",
      "Configurable por especialidad",
      "Acceso directo desde agenda de citas",
      // Imágenes médicas
      "Gestión de imágenes médicas",
      "Almacenamiento en historial del paciente",
      "Inclusión en informes impresos",
      // Análisis clínicos
      "Análisis clínicos completos",
      "Comparativas de evolución del paciente",
      "Asociación con registros de consulta",
      // Centro de control
      "Centro de control de paciente",
      "Potentes buscadores integrados",
      // Revisiones
      "Control de períodos de revisión",
      "Cálculo automático de próxima revisión",
      "Notificación de revisiones vencidas",
      // Facturación
      "Facturación médica automatizada",
      "Gestión de pendientes de cobro",
      "Control de movimientos de caja",
      // Caja y bancos
      "Asistente de arqueo de caja",
      "Cierres y históricos diarios",
      // Almacén
      "Control de stock de materiales",
      "Gestión de consumibles",
    ],
    image: "/images/caja_emeclinic.png",
  },
  {
    id: "otros",
    name: "Otras Soluciones",
    tagline: "Software a Medida",
    description:
      "Desarrollos personalizados para sectores específicos. Soluciones exclusivas cuando su actividad requiere funcionalidades muy específicas.",
    color: "#1E3A5F",
    featured: false,
    target: [],
    features: [],
    children: [
      {
        id: "emefinca",
        name: "EMEFINCA",
        sector: "Gestión Inmobiliaria",
        description: "Control de documentos y gestión integral de propiedades",
      },
      {
        id: "emebuilder",
        name: "EMEBUILDER",
        sector: "Carpintería de Aluminio",
        description:
          "Desarrollado en colaboración con HERRAJES GUAMASA, líder del sector",
      },
      {
        id: "emezip",
        name: "EMEZIP",
        sector: "Utilidades",
        description: "Sistema de copias de seguridad automatizadas",
      },
      {
        id: "emeweb",
        name: "EMEWEB",
        sector: "Servicios Web",
        description:
          "Diseño, desarrollo y mantenimiento de sitios web corporativos",
      },
    ],
    image: "/images/caja_emefood.png",
  },
];
