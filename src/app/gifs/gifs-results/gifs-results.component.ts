import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-results',
  templateUrl: './gifs-results.component.html',
  styleUrls: ['./gifs-results.component.css']
})
export class GifsResultsComponent {

  constructor(private gifsService: GifsService) { }
  
  get resultados(){
    return this.gifsService.resultados;
  }
}
