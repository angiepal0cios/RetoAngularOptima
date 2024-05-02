// data.ts

export interface DataItem {
    cliente: string;
    proyecto: string;
    fecha: Date;
    monto_total: number | string;
    monto_parcial: number | string;
  }
  
  export const DATA: DataItem[] = [
    { cliente: 'Cliente 1', proyecto: 'Proyecto 1', fecha: new Date('2024-04-30'), monto_total: 0, monto_parcial: 0 },
    { cliente: 'Cliente 2', proyecto: 'Proyecto 1', fecha: new Date('2024-04-29'), monto_total: 0, monto_parcial: 0 },
    { cliente: 'Cliente 3', proyecto: 'Proyecto 1', fecha: new Date('2024-04-28'), monto_total: 0, monto_parcial: 0 },
    { cliente: 'Cliente 4', proyecto: 'Proyecto 1', fecha: new Date('2024-04-27'), monto_total: 0, monto_parcial: 0 },
    { cliente: 'Cliente 5', proyecto: 'Proyecto 1', fecha: new Date('2024-04-26'), monto_total: 0, monto_parcial: 0 },
    { cliente: 'Cliente 6', proyecto: 'Proyecto 1', fecha: new Date('2024-04-25'), monto_total: 0, monto_parcial: 0 },
  ];

  // Formatear valores de monto a "S/. VALOR.00"
DATA.forEach(item => {
    item.monto_total = formatCurrency(Number(item.monto_total));
    item.monto_parcial = formatCurrency(Number(item.monto_parcial));
  });
  
  function formatCurrency(value: number): string {
    if(value===0){
        const valueFormat='S/. 00'+ String(value) + '.00';
        return valueFormat;
    }
    return 'S/. ' + value.toFixed(2);
  }

  export const MIN_DATE = new Date(Math.min(...DATA.map(item => item.fecha.getTime())));
  export const MAX_DATE = new Date(Math.max(...DATA.map(item => item.fecha.getTime())));

  