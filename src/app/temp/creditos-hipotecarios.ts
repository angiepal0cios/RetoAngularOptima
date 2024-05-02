import { Component } from '@angular/core';
import { DATA, DataItem, MAX_DATE, MIN_DATE } from './temp/data';

@Component({
  selector: 'app-creditos-hipotecarios',
  templateUrl: './creditos-hipotecarios.component.html',
  styleUrls: ['./creditos-hipotecarios.component.css']
})

export class CreditosHipotecariosComponent {
  menuVisible: boolean = false;
  searchQuery: string = '';
  startDate: Date = MIN_DATE; // Utiliza MIN_DATE como valor predeterminado para startDate
  endDate: Date = MAX_DATE; // Utiliza MAX_DATE como valor predeterminado para endDate
  data: DataItem[] = DATA; 
  detailDialogVisible: boolean = false;

  // Método para abrir el popup de detalle
  showDetailDialog() {
    // Lógica para mostrar el popup de detalle
  }

  // Método para realizar la búsqueda
  buscar() {
    // Lógica para realizar la búsqueda
  }
}
