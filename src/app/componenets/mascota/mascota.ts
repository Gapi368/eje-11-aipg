import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { MascotaModel } from '../../models/mascota.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mascota',
  imports: [FormsModule],
  templateUrl: './mascota.html',
  styleUrl: './mascota.css',
})
export class Mascota implements OnInit {
  mascotas: MascotaModel[] = [];

  mascota: MascotaModel = {
    id: 0,
    nombre: '',
    edad: 0,
  };

  enEdicion = false;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.mascotas = this.mascotaService.findAll();
  }

  guardar(): void {
    if (!this.mascota.nombre.trim()) {
      alert('El nombre es obligatorio.');
      return;
    }
    this.mascotaService.save(this.mascota);
    this.limpiar();
    this.listar();
  }

  editar(mascota: MascotaModel): void {
    // Copia para no mutar el original hasta guardar
    this.mascota = { ...mascota };
    this.enEdicion = true;
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar esta mascota?')) {
      this.mascotaService.delete(id);
      this.listar();
    }
  }

  limpiar(): void {
    this.mascota = { id: 0, nombre: '', edad: 0 };
    this.enEdicion = false;
  }
}
