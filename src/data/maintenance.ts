export interface MaintenanceFeature {
  name: string;
  description?: string;
}

export interface MaintenanceSchedule {
  label: string;
  hours: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  description: string;
  recommended?: boolean;
  schedule: MaintenanceSchedule;
  features: {
    feature: MaintenanceFeature;
    included: boolean;
  }[];
}

// Features comunes organizados por nivel
export const maintenanceFeatures: MaintenanceFeature[] = [
  // Base - Todos los planes
  { name: "Software de gestión", description: "Licencia completa de la aplicación contratada" },
  { name: "Soporte telefónico", description: "Consultas y asesoramiento preferente" },
  { name: "Asistencia remota", description: "Mantenimiento y reparación inmediata vía internet" },
  // Profesional+
  { name: "Actualizaciones incluidas", description: "Nuevas versiones del software sin coste" },
  { name: "Zona privada web", description: "Acceso exclusivo a recursos y descargas" },
  // Elite
  { name: "Desarrollos a medida", description: "Funciones personalizadas sin cargo adicional" },
  { name: "Formación presencial", description: "Capacitación en las aulas de EMESOFT" },
];

export const maintenancePlans: MaintenancePlan[] = [
  {
    id: "basico",
    name: "Básico",
    description: "Soporte esencial para consultas puntuales",
    schedule: { label: "5×4", hours: "L-V 09:00-13:00" },
    features: [
      { feature: maintenanceFeatures[0], included: true },
      { feature: maintenanceFeatures[1], included: true },
      { feature: maintenanceFeatures[2], included: true },
      { feature: maintenanceFeatures[3], included: false },
      { feature: maintenanceFeatures[4], included: false },
      { feature: maintenanceFeatures[5], included: false },
      { feature: maintenanceFeatures[6], included: false },
    ],
  },
  {
    id: "profesional",
    name: "Profesional",
    description: "Todo incluido para empresas en crecimiento",
    recommended: true,
    schedule: { label: "5×8", hours: "L-V 09:00-17:00" },
    features: [
      { feature: maintenanceFeatures[0], included: true },
      { feature: maintenanceFeatures[1], included: true },
      { feature: maintenanceFeatures[2], included: true },
      { feature: maintenanceFeatures[3], included: true },
      { feature: maintenanceFeatures[4], included: true },
      { feature: maintenanceFeatures[5], included: false },
      { feature: maintenanceFeatures[6], included: false },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    description: "Servicio premium con personalización completa",
    schedule: { label: "5×12", hours: "L-V 08:00-20:00" },
    features: [
      { feature: maintenanceFeatures[0], included: true },
      { feature: maintenanceFeatures[1], included: true },
      { feature: maintenanceFeatures[2], included: true },
      { feature: maintenanceFeatures[3], included: true },
      { feature: maintenanceFeatures[4], included: true },
      { feature: maintenanceFeatures[5], included: true },
      { feature: maintenanceFeatures[6], included: true },
    ],
  },
];
