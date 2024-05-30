export interface IClase {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface CreateClasePayload {
  nombre: string | null;
  descripcion: string | null;
}
