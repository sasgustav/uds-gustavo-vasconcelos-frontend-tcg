import { Component, Input } from '@angular/core';
import { Carta } from 'src/app/models/carta.model';

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.scss']
})
export class ModalDetalhesComponent {
  @Input() carta!: Carta;
  show: boolean = false;

  constructor() { }

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }
}
