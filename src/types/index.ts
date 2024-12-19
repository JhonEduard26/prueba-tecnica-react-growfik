export interface Call {
  id:       number;
  duracion: string;
  estado:   CallState
  fecha:    string;
}

export type CallState = "Todas" | "Exitosa" | "Fallida" | "En Proceso"
