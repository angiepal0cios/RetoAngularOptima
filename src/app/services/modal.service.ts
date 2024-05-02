import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private creditoIdSubject = new BehaviorSubject<number>(0);
  creditoId$ = this.creditoIdSubject.asObservable();

  constructor() { }

  showDetailDialog(creditoId: number) {
    this.creditoIdSubject.next(creditoId);
  }
}
