export interface CreditoHipotecario {
    id:number;
    cliente: string;
    proyecto: string;
    fecha: Date;
    monto_total: number;
    monto_parcial: number;
    monto_total_text: string;
    monto_parcial_text: string;
  }