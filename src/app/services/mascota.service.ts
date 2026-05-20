import { Injectable } from '@angular/core';
import { MascotaModel } from '../models/mascota.model';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  mascotas: MascotaModel[] = [];
  idContador = 0;

  constructor() {
    this.mascotas = [
      { id: 1, nombre: 'Pluto', edad: 90 },
      { id: 2, nombre: 'Burrito IPN', edad: 90 },
      { id: 3, nombre: 'Mapache', edad: 40 },
    ];
    this.idContador = 3;
  }

  findAll(): MascotaModel[] {
    return this.mascotas;
  }

  findById(id: number): MascotaModel | undefined {
    return this.mascotas.find((m) => m.id === id);
  }

  save(mascota: MascotaModel): void {
    const index = this.mascotas.findIndex((m) => m.id === mascota.id);
    if (index !== -1) {
      // Editar existente
      this.mascotas[index] = { ...mascota };
    } else {
      // Nuevo registro
      this.idContador++;
      mascota.id = this.idContador;
      this.mascotas.push({ ...mascota });
    }
  }

  delete(id: number): void {
    this.mascotas = this.mascotas.filter((m) => m.id !== id);
  }
}
