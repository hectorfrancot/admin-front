import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ComentariosService } from '../../../services/comentarios.service';
import { BaseResponse } from '../../../../../shared/models/base-response.model';

@Component({
  selector: 'form-comentarios',
  templateUrl: './form-comentarios.component.html',
  styleUrls: ['./form-comentarios.component.scss']
})
export class FormComentariosComponent implements OnInit, AfterViewInit {


  comentariosForm: FormGroup;
  @ViewChild('titulo', { static: false }) elementoTitulo: ElementRef;
  constructor(private fb: FormBuilder, private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.comentariosForm = this.fb.group({
      titulo: new FormControl(null, [Validators.required]),
      detalle: new FormControl(null, [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    this.elementoTitulo.nativeElement.focus();
  }

  procesarComentario() {
    if (this.comentariosForm.invalid) {
      return;
    }

    this.comentariosService.agregarComentario(this.comentariosForm.value).subscribe((response: BaseResponse) => {
      console.log(response);
      this.comentariosService.recargarComentariosEmit();
    });

  }

}
