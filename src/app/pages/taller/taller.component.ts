import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-taller',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.scss',
})
export class TallerComponent {
  primerBimestre: Array<any> = [
    {
      title: 'Laboratorio #1',
      description: 'Aplicación web para la gestión de tareas escolares. Fue desarrollada con Javascript utilizando Node.js',
      link: 'https://github.com/AnderCabrera/multi-homework',
    },
    {
      title: 'Laboratorio #2',
      description: 'API de sistema de gestión de mascotas desarrollada con Javascript utilizando Node.js',
      link: 'https://github.com/acabrera-2022508/laboratorio2.git',
    },
    {
      title: 'Proyecto Final',
      description: 'Revisión de avances en proyecto final de bimestre "Ventas". Desarrollado utilizando Javascript y Node.js',
      link: 'https://github.com/acabrera-2022508/sales-backend/tree/feature-routes',
    },
    {
      title: 'Proyecto Final Bim.',
      description: 'Entrega de proyecto bimestral "Ventas Online". Desarrollado utilizando Javascript con Node.js. Aprendi sobre el uso de Json web token para autenticación',
      link: 'https://github.com/acabrera-2022508/sales-backend/tree/feature-routes',
    },
  ];

  segundoBimestre: Array<any> = [
    {
      title: 'HackerRank',
      description: 'Ejercicios sobre lógica de programación de dificultad fácil, medio y dificil',
      link: './assets/files/hackerrank.pdf',
    },
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
