import { Component, OnInit } from '@angular/core';
import { JoquesService, Fake } from '../services/joques.service';
import { Observable, fromEvent, FactoryOrValue } from 'rxjs';
import { throttleTime, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-joques',
  templateUrl: './joques.component.html',
  styleUrls: ['./joques.component.scss']
})
export class JoquesComponent implements OnInit {

  //joke$: Observable<Fake[]>;
  //jk$: Observable<Fake>;

  public joque:Fake[];
  public jk:Fake;

  public identifier: any;

  // constructor(private joques: JoquesService, private route: ActivatedRoute) { }  ActivatedRoute es para obtener el parametro de la url
  constructor(private joques: JoquesService) { } // Inyectar servicio

  ngOnInit() {
    this.getUrl2();
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
  //this.joke$ = this.joques.getUrl$();
}

getUrl2() {
  this.joques.getUrl$().subscribe(joque => this.joque = joque);
}

getFake(id) {
  this.joques.getFake$(id).subscribe(jk => this.jk = jk);
}

addFake() {
  let jk2:Fake = { title:"pepe" , userId: 222, id: 222, completed: true }
  this.joques.addFake$(jk2);
}

/*
  // Obtenemos el parametro id del route , paso de parametros por url
  getFake2() {
  this.route.params.subscribe(miParams => this.identifier = miParams['id']);
  this.joques.getFake$(this.identifier).subscribe(jk => this.jk = jk);
}
 */


}
