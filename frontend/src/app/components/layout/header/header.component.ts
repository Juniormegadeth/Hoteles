import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opc: MenuItem[] = [];
  estilosMenu: {}= {
    'background-color': '#8DC3D8',
    'border': '0',
  }
  constructor() { }

  ngOnInit(): void {

    this.opc = [
      {
        label: 'Hoteles',
        icon: 'pi pi-fw pi-users',
        routerLink: '/hotels'
      },
      {
        label: 'Agencia',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/agencia'
      },
      {
        label: 'Categoria',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/categoria'
      },
      {
        label: 'Reserva',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/reserva'
      }

    ];
  }

}