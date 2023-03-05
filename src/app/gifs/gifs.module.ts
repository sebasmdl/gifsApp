import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsSearchComponent } from './gifs-search/gifs-search.component';
import { GifsResultsComponent } from './gifs-results/gifs-results.component';



@NgModule({
  declarations: [GifsPageComponent, GifsSearchComponent, GifsResultsComponent],
  imports: [
    CommonModule
  ],
  exports:[GifsPageComponent, GifsSearchComponent, GifsResultsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]  
})
export class GifsModule { }
