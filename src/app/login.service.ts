
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:9090/api/login';
  user :any ;

  constructor(private http: HttpClient) { }

  getUser(username:string, password:string): Observable<any>{
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append(username,1);
    // queryParams = queryParams.append(password,2);
    return this.http.get(this.url);
  }

}




  // getUser(): Observable<User[]> {
  //   console.log('getPeople '+this.url + 'people')
  //   return this.http.get<User[]>(this.url + 'people')
  // }



  //We She ile yaptigin
  // async login(person:User): Promise<any> {
  //   //search(term:string) {


  //       let apiURL = `${this.url}+'people'`;
  //       this.http.get(apiURL)
  //         .toPromise()
  //         .then(
  //           res => { // Success
  //             console.log(res);
  //             //resolve();
  //           }
  //         );
  //   //  });
  //    // rn promise;
  //   }






  //   var promise = new Promise((resolve, reject)=>{
  //     setTimeout(() => {
  //       console.log("Async Work Complete");
  //       resolve();
  //     }, 1000);
  //   })

  //   return this.http.post(this.url + 'user', body,{'headers':headers})
  // }

  // postMovies(){
  //   this.user = this.http.get(this.url);
  //   return this.http.get(this.url);
  // }


