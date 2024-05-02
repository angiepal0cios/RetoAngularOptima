import { Component, OnInit } from '@angular/core';
import { CreditoHipotecario } from '../../model/credito-hipotecario';
import { CreditoService } from '../services/credito.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-creditos-hipotecarios',
  templateUrl: './creditos-hipotecarios.component.html',
  styleUrls: ['./creditos-hipotecarios.component.css']
})

export class CreditosHipotecariosComponent {
  menuVisible: boolean = false;
  searchQuery: string = '';
  startDate!: Date;
  endDate!: Date;
  data: CreditoHipotecario[] = [];
  detailDialogVisible: boolean = false;
  selectedCreditoId!: number;

  constructor(private CreditoService: CreditoService,
    private ModalService: ModalService
  ) { }

  ngOnInit() {
    this.loadDataFromDB();
    this.loadMinMaxDatesFromDB();
  }


  loadDataFromDB() {
    this.CreditoService.getCreditosHipotecarios(this.searchQuery, this.startDate, this.endDate).subscribe({
      next: (data: CreditoHipotecario[]) => {
        // Convertir los montos a decimales
        data.forEach(credito => {
          credito.monto_total_text = credito.monto_total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); // Redondea a 2 decimales
          credito.monto_parcial_text = credito.monto_parcial.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); // Redondea a 2 decimales
        });
        this.data = data;
      },
      error: error => {
        console.error('Error al cargar los datos desde la base de datos:', error);
      }
    });
  }

  loadMinMaxDatesFromDB() {
    this.CreditoService.getMinMaxDatesFromCH().subscribe({
      next: ({ minDate, maxDate }: { minDate: Date, maxDate: Date }) => {
        this.startDate = new Date(minDate);
        this.endDate = new Date(maxDate);
      },
      error: error => {
        console.error('Error al cargar las fechas mínima y máxima desde la base de datos:', error);
      }
    });
  }

  // Método para realizar la búsqueda
  buscar() {
    // Llama a la función para cargar los datos con los filtros de búsqueda
    this.loadDataFromDB();
  }


  // Método para abrir el popup de detalle
  showDetailDialog(creditoId: number) {

    // Lógica para mostrar el popup de detalle
    this.detailDialogVisible = true;
    this.ModalService.showDetailDialog(creditoId);

  }


}

