import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';//invoca al api rest
import { Disco } from '../model/disco';
@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  private url ="http://localhost:3991/discos" //ruta de mi api rest de potsman o app listen

  constructor( private http:HttpClient) { }
//devuelve la llamada a api rest para todos los discos.
  obtenerDiscos(){   
    return this.http.get(this.url)
    
  }

  //solo un disco pasando un id
  obtenerDisco(id:number){
    return this.http.get(this.url + "/" + id)
  }

//añade un disco
  ayadirDisco(disco:Disco){
  return this.http.post(this.url, disco)
}


//actualizar disco
actualizarDisco(disco:Disco){
  console.log(disco);
  return this.http.put(this.url,disco)
}


eliminarDisco(idd:number){
  console.log(idd);
  const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'}), body: {id:idd}};
  return this.http.delete(this.url, httpOptions)
}


}

