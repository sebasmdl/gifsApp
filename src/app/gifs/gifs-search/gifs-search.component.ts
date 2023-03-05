import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.css']
})
export class GifsSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    console.log(termino);
  }

}
