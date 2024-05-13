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
      description: 'Infografía sobre Desarrollo web y procesadores',
      link: './assets/files/infografia.pdf',
    },
    {
      title: 'Mapa conceptual',
      description: 'Mapa conceptual sobre tecnologías web',
      link: './assets/files/mapa.pdf',
    },
    {
      title: 'Mapa Mental',
      description: 'Mapa mental sobre el Desarrollo web',
      link: 'https://acortar.link/8uQn1H',
    },
  ];

  segundoBimestre: Array<any> = [
    {
      title: 'Infografía: Beneficios React',
      description: 'Infografía sobre los beneficios de React',
      link: 'https://www.canva.com/design/DAGCOUgE7DA/lc4PxYZzeg6-_-Hnr-q7iA/edit?utm_content=DAGCOUgE7DA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      title: 'Investigación',
      description: 'API, Rest, RestFull, buenas prácticas de desarrollo de API’s.',
      link: './assets/files/estilos.pdf',
    },
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
