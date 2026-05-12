import { Component } from '@angular/core';

@Component({
  selector: 'app-mascota',
  imports: [],
  templateUrl: './mascota.html',
  styleUrl: './mascota.css',
})
export class Mascota {
  listaMascotas = [
    { id: 1, nombre: 'Firulais', tipo: 'Perro' },
    { id: 2, nombre: 'Miau', tipo: 'Gato' },
    { id: 3, nombre: 'Nemo', tipo: 'Pez' },
  ];



  guardarMascota() {
    console.log('Mascota guardada');
  }
  actualizarMascota() {
    console.log('Mascota actualizada');
  }
eliminarMascota(id: number) {
    this.listaMascotas = this.listaMascotas.filter(mascota => mascota.id !== id);
    console.log(`Mascota con id ${id} eliminada`);
  }
}
