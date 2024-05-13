import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-tecnologia',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './tecnologia.component.html',
  styleUrl: './tecnologia.component.scss',
})
export class TecnologiaComponent {
  primerBimestre: Array<any> = [
    {
      title: 'Infografía',
      description: 'Infografía sobre Desarrollo web y preprocesadores como handlebars, Pug, Jade, Sass o Less',
      link: './assets/files/infografia.pdf',
    },
    {
      title: 'Mapa conceptual',
      description: 'Mapa conceptual sobre tecnologías web como Expressjs, Javascript, Backbone, NextJs, etc.',
      link: './assets/files/mapa.pdf',
    },
    {
      title: 'Mapa Mental',
      description: 'Mapa mental sobre el Desarrollo web de diferentes conceptos web como Hosting, Dominio, Cliente-servidor y Web semántica',
      link: 'https://acortar.link/8uQn1H',
    },
  ];

  segundoBimestre: Array<any> = [
    {
      title: 'Infografía: Beneficios React',
      description: 'Infografía sobre los beneficios de React como el SEO-Friendly, Virtual DOM, Reutilización de componentes, etc',
      link: 'https://www.canva.com/design/DAGCOUgE7DA/lc4PxYZzeg6-_-Hnr-q7iA/edit?utm_content=DAGCOUgE7DA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      title: 'Investigación',
      description: 'API, Rest, RestFull, buenas prácticas de desarrollo de API’s. Como PEP8 de Python o Airbnb de Javascript',
      link: './assets/files/estilos.pdf',
    },
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
