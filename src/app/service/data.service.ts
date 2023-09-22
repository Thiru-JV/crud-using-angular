import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  employerData="http://localhost:3000/employerData";

  employer(){
    return this.http.get(this.employerData);
  }
  post(data:any){
    return this.http.post(this.employerData,data)
  }
  delete(id:any){
    const urll = `${this.employerData}/${id}`;
    return this.http.delete(urll)
  }
  put(id:any,data:any){
    const urll = `${this.employerData}/${id}`;
    return this.http.put(urll,data);
  }
}
