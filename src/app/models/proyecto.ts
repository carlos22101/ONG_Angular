export interface Proyecto {
  id_proyecto: number;
  nombre: string;
  descripcion: string;
  responsable: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  total_horas_necesarias: number;
}
