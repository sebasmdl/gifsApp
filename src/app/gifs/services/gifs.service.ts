import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Pagination, Gif } from '../interface/gifs.interface'
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];
  public resultados: Gif[]= [];

  private url_service = "https://api.giphy.com/v1/gifs";
  private api_key = "rZLlHqTRLSEl6m9730mJbumvl0mJmjx3";

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [] 
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [] 
   }

  get historial(){
    
    return [...this._historial]
  } 
  
  buscarGifs(query:string){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,8)

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }
    const params = new HttpParams() 
    .set('api_key', this.api_key)
    .set('limit', 10)
    .set('q', query)

    this.http.get<SearchGifsResponse>(`${this.url_service}/search`, {params: params}).subscribe( (res) => {
      this.resultados = res.data
      localStorage.setItem('resultados', JSON.stringify(this.resultados))
    })
  }

}
