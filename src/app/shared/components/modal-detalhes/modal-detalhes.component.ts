import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Carta } from 'src/app/models/carta.model';

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.scss']
})
export class ModalDetalhesComponent implements OnChanges {
  @Input() carta!: Carta;
  show: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['carta'] && this.carta) {
      this.openModal();
    }
  }

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }
}
