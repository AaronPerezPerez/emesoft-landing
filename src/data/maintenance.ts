export interface MaintenanceFeature {
  name: string;
  description?: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  description: string;
  recommended?: boolean;
  features: {
    feature: MaintenanceFeature;
    included: boolean;
    note?: string;
  }[];
}

// Features comunes a todas las modalidades
export const maintenanceFeatures: MaintenanceFeature[] = [
  { name: "Consulta telefónica 24h", description: "Asesoramiento telefónico permanente" },
  { name: "Asistencia in situ preferente", description: "Consulta y reparación en sus instalaciones sin cargo" },
  { name: "50% dto. actualizaciones", description: "Descuento en nuevas versiones del software" },
  { name: "Mantenimiento remoto", description: "Reparación y actualización inmediata vía internet" },
  { name: "Visitas periódicas", description: "Seguimiento preventivo programado" },
  { name: "Actualizaciones gratis", description: "Todas las actualizaciones incluidas sin coste adicional" },
  { name: "Zona privada web", description: "Acceso a área exclusiva de clientes" },
  { name: "Informes a medida", description: "Diseño de informes y etiquetas personalizados" },
  { name: "Desarrollos especiales", description: "Funciones especiales a medida sin cargo" },
  { name: "Formación permanente", description: "Capacitación continua del personal en aulas EMESOFT" },
  { name: "Mantenimiento equipos", description: "Mantenimiento preventivo de todo el sistema informático" },
  { name: "Asesoramiento general", description: "Asesoramiento informático-comercial integral" },
];

export const maintenancePlans: MaintenancePlan[] = [
  {
    id: "basico",
    name: "Básico",
    description: "Soporte esencial para mantener su sistema operativo",
    features: [
      { feature: maintenanceFeatures[0], included: true },
      { feature: maintenanceFeatures[1], included: true },
      { feature: maintenanceFeatures[2], included: true },
      { feature: maintenanceFeatures[3], included: false },
      { feature: maintenanceFeatures[4], included: false },
      { feature: maintenanceFeatures[5], included: false },
      { feature: maintenanceFeatures[6], included: false },
      { feature: maintenanceFeatures[7], included: false },
      { feature: maintenanceFeatures[8], included: false },
      { feature: maintenanceFeatures[9], included: false },
      { feature: maintenanceFeatures[10], included: false },
      { feature: maintenanceFeatures[11], included: false },
    ],
  },
  {
    id: "profesional",
    name: "Profesional",
    description: "La opción más popular para empresas en crecimiento",
    recommended: true,
    features: [
      { feature: maintenanceFeatures[0], included: true },
      { feature: maintenanceFeatures[1], included: true },
      { feature: maintenanceFeatures[2], included: false, note: "Gratis" },
      { feature: maintenanceFeatures[3], included: true },
      { feature: maintenanceFeatures[4], included: true },
      { feature: maintenanceFeatures[5], included: true },
      { feature: maintenanceFeatures[6], included: true },
      { feature: maintenanceFeatures[7], included: false },
      { feature: maintenanceFeatures[8], included: false },
      { feature: maintenanceFeatures[9], included: false },
      { feature: maintenanceFeatures[10], included: false },
      { feature: maintenanceFeatures[11], included: false },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    description: "Servicio premium con personalización completa",
    features: [
      { feature: maintenanceFeatures[0], included: true },
      { feature: maintenanceFeatures[1], included: true },
      { feature: maintenanceFeatures[2], included: false, note: "Gratis" },
      { feature: maintenanceFeatures[3], included: true },
      { feature: maintenanceFeatures[4], included: true },
      { feature: maintenanceFeatures[5], included: true },
      { feature: maintenanceFeatures[6], included: true },
      { feature: maintenanceFeatures[7], included: true },
      { feature: maintenanceFeatures[8], included: true },
      { feature: maintenanceFeatures[9], included: true },
      { feature: maintenanceFeatures[10], included: false },
      { feature: maintenanceFeatures[11], included: false },
    ],
  },
  {
    id: "asesor",
    name: "Asesor",
    description: "Servicio integral con asesoramiento completo",
    features: [
      { feature: maintenanceFeatures[0], included: true },
      { feature: maintenanceFeatures[1], included: true },
      { feature: maintenanceFeatures[2], included: false, note: "Gratis" },
      { feature: maintenanceFeatures[3], included: true },
      { feature: maintenanceFeatures[4], included: true },
      { feature: maintenanceFeatures[5], included: true },
      { feature: maintenanceFeatures[6], included: true },
      { feature: maintenanceFeatures[7], included: true },
      { feature: maintenanceFeatures[8], included: true },
      { feature: maintenanceFeatures[9], included: true },
      { feature: maintenanceFeatures[10], included: true },
      { feature: maintenanceFeatures[11], included: true },
    ],
  },
];
