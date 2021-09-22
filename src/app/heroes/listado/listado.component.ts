import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Hulk', 'Iron Man', 'Thor', 'Spier-Man', 'Dr. Strange', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe() {

    //this.heroes.splice(this.heroes.length - 1, this.heroes.length)
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
