import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-ps',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './ps.component.html',
  styleUrl: './ps.component.scss',
})
export class PsComponent {
  primerBimestre: Array<any> = [
    {
      title: 'Laboratorio PS #1',
      description: 'Aplicación web de todo list y contactos',
      link: './assets/files/contacts.zip',
    },
    {
      title: 'Laboratorio PS #2',
      description: 'API REST para la gestión de un centro educativo',
      link: './assets/files/academic-control.zip',
    },
    {
      title: 'Laboratorio PS #3',
      description: 'API REST para la gestión de opiniones de usuarios',
      link: 'https://github.com/acabrera-2022508/opinion-manager',
    },
  ];

  segundoBimestre: Array<any> = [
    {
      title: 'Almacenadora',
      description: 'Aplicación web desarrollada con React para la gestión de tareas',
      link: 'https://github.com/AnderCabrera/almacenadora-frontend',
    },
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
