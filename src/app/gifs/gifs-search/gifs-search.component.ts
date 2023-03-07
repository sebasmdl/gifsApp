import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.css']
})
export class GifsSearchComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement> 
  constructor(private gifsService: GifsService) { }

  
  ngOnInit(): void {
  }

  buscar(termino: string){
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length == 0) { return }
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
