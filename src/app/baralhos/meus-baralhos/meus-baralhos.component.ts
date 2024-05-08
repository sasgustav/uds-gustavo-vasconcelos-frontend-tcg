import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-baralhos',
  templateUrl: './meus-baralhos.component.html',
  styleUrls: ['./meus-baralhos.component.scss']
})
export class MeusBaralhosComponent implements OnInit {
  baralhos: any[] = [];

  ngOnInit() {
    this.loadBaralhos();
  }

  loadBaralhos() {
    this.baralhos = JSON.parse(localStorage.getItem('baralhos') || '[]');
  }
}
