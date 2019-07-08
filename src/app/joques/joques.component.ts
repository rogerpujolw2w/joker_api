import { Component, OnInit } from '@angular/core';
import { JoquesService, Fake } from '../services/joques.service';
import { Observable, fromEvent, FactoryOrValue } from 'rxjs';
import { throttleTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-joques',
  templateUrl: './joques.component.html',
  styleUrls: ['./joques.component.scss']
})
export class JoquesComponent implements OnInit {

  joke$: Observable<Fake[]>;

  public joque:any;

  constructor(private joques: JoquesService) { }

  ngOnInit() {
/*     this.joke$ = fromEvent<MouseEvent>
    (document.getElementById('joke-btn'),'click').pipe(
      throttleTime(1000), switchMap(
        (e: MouseEvent) => this.joques.getRandom$()
      )
    );
 */  }

  /* Metodo 1 : Obtenemos JSON y nos subscribimos a él

  getRandom(){
    this.joke$ = this.joques.getRandom$();
  }

  /* Metodo 2 : Obtenemos el valor de Joke del Json y nos subscribimos con el pipe

  getRandom(){
     this.joques.getRandom$()
      .subscribe(joque => this.joque = joque);  }

  */
  getRandom(){
/*     this.joques.getRandom$()
      .subscribe(joque => this.joque = joque);
 */
    //this.joke$ = this.joques.getRandom$();

}

getUrl() {
  this.joke$ = this.joques.getUrl$();
}

}
