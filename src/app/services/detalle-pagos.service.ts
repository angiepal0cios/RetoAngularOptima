import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetallePagos } from 'src/model/detalle-pagos';

@Injectable({
    providedIn: 'root'
})
export class DetallePagoService {

    baseUrl: string = "http://localhost:3000/api";

    constructor(private http: HttpClient) { }

     //Obtiene detalles de los pagos de un credito.
    getDetallesPagos(creditoId: number): Observable<DetallePagos[]> {
        return this.http.get<DetallePagos[]>(this.baseUrl +'/detalles-pagos/'+creditoId);
      }
}