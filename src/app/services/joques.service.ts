import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

export interface Joke {
  type: string,
  value: {
    id: number,
    joke: string,
    categories: string[]
  }
}

export interface Fake {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

/* export interface Fake {
  type: string,
  value: {
    id: number,
    userId: string,
    title: string,
    completed: boolean
  }
}
 */
@Injectable({
  providedIn: 'root'
})

export class JoquesService {

  constructor(private http: HttpClient) { }

  getRandom$() {
    return this.http.get<Joke>('http://api.icndb.com/jokes/random')
    .pipe(
      map((res) => { return res.value.joke;}) // Con tap controlamos errores
    )
    /*     return this.http.get<Joke>('http://api.icndb.com/jokes/random')
      .pipe(
        map((res) => { return res.value.joke;})
      )
 */    //return this.http.get('http://api.icndb.com/jokes/random');
//    return this.http.get('http://api.icndb.com/jokes/random', {responseType: 'text'});
  }

  getUrl$() {

    //return this.http.get('http://jsonplaceholder.typicode.com/todos', {responseType: 'text'});
    //return this.http.get<Fake[]>('http://jsonplaceholder.typicode.com/todos')
    return this.http.get<Fake[]>('http://localhost:3000/customers')
      .pipe(
        //map((res) => { return res.filter(item => item.id<=5); })
        map((res) => { return res; })
      )
  }

  getFake$(id) {
    return this.http.get<Fake>(`http://localhost:3000/customers/${id}`);
    //return this.http.get<Fake>('http://localhost:3000/customers/' + id);
  }

addFake$(fake:Fake) {
  console.log(fake);

/*   return this.http.post<Fake>('http://localhost:3000/customers/', fake)
  .pipe(tap((fake : Fake) => console.log(`add member: id=${fake.id}`)),
  catchError(this.handleError.bind(this)));
 */

 return this.http.post<Fake>('http://localhost:3000/customers/', fake);

}

private handleError(error) {
  console.log(error);
}


}
