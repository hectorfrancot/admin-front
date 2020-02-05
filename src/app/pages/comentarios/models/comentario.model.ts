export interface Comentario {
    id?: number;
    titulo: string;
    detalle: string;
    fecha_creacion: Date;
    fecha_modficacion: Date;
    usuario?: number;
    estatus?: number;
}