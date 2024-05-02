export interface DetallePagos {
    id: number; // ID del detalle de pagos
    fecha_pago: Date; // Fecha de pago
    monto: number; // Monto del pago
    archivo_voucher: string;
  }