import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditoHipotecario } from 'src/model/credito-hipotecario';

@Injectable({
    providedIn: 'root'
})
export class CreditoService {

    baseUrl: string = "http://localhost:3000/api";

    constructor(private http: HttpClient) { }


    getCreditosHipotecarios(searchQuery: string, startDate: Date, endDate: Date): Observable<CreditoHipotecario[]> {
        // Construye la URL con los parámetros de búsqueda si son proporcionados
        let url = `${this.baseUrl}/creditos-hipotecarios`;

        if (searchQuery || (startDate && endDate)) {
            url += '?';
            if (searchQuery) {
                url += `searchQuery=${searchQuery}&`;
            }
            if (startDate && endDate) {
                url += `startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`;
            }
        }

        // Realiza una petición HTTP GET para obtener los datos desde el backend
        return this.http.get<CreditoHipotecario[]>(url);
    }
    //Obtiene la fecha mínima y máxima de la tabla creditos_hipotecarios
    getMinMaxDatesFromCH(): Observable<{ minDate: Date, maxDate: Date }> {
        return this.http.get<{ minDate: Date, maxDate: Date }>(this.baseUrl + '/fechas-min-max');
    }
}