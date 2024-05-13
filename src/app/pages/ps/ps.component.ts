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
      description: 'Aplicación web de todo list y contactos desarrollada con html, css y mucho javascript',
      link: './assets/files/contacts.zip',
    },
    {
      title: 'Laboratorio PS #2',
      description: 'Sencilla API REST para la gestión de un centro educativo desarrollada con Javascript y Node.js',
      link: './assets/files/academic-control.zip',
    },
    {
      title: 'Laboratorio PS #3',
      description: 'Sencilla API REST para la gestión de opiniones de usuarios donde se pueden hacer comentarios a las publicaciones, desarrollado con Javascript y Node.js',
      link: 'https://github.com/acabrera-2022508/opinion-manager',
    },
  ];

  segundoBimestre: Array<any> = [
    {
      title: 'Almacenadora',
      description: 'Aplicación web desarrollada con React para la gestión de tareas de diferentes usuarios. Posee un Login y un Register funcional, asi como un backend para poder realizar peticiones a la base de datos de mongodb',
      link: 'https://github.com/AnderCabrera/almacenadora-frontend',
    },
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
