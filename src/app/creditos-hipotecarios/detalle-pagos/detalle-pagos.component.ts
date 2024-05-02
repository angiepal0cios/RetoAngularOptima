import { Component, Input } from '@angular/core';
import { DetallePagos } from 'src/model/detalle-pagos';
import { DetallePagoService } from '../../services/detalle-pagos.service';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-detalle-pagos',
  templateUrl: './detalle-pagos.component.html',
  styleUrls: ['./detalle-pagos.component.css']
})


export class DetallePagosComponent {
  @Input()
  creditoId!: number; // Definir la propiedad de entrada creditoId
  detalle_data: DetallePagos[] = [];

  private modalSubscription!: Subscription;

  constructor(private modalService: ModalService, 
    private DetallePagoService: DetallePagoService) { }

    ngOnInit() {
      this.modalSubscription = this.modalService.creditoId$.subscribe(id => {
        this.creditoId = id;
        if (this.creditoId) {
          this.loadDetallesData();
        }
      });
    }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }

  loadDetallesData() {
    this.DetallePagoService.getDetallesPagos(this.creditoId).subscribe({
      next: (detalle_data: DetallePagos[]) => {

        this.detalle_data = detalle_data;
      },
      error: error => {
        console.error('Error al cargar los datos desde la base de datos:', error);
      }
    });
  }

  onFileUpload(event: any, detallePagoId: number): void {}
}