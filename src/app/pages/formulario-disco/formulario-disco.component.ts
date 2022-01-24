import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';//invoca al api rest
import { DiscoService } from 'src/app/shared/disco.service';
import { Disco } from 'src/app/model/disco';

@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.css'],
})
export class FormularioDiscoComponent implements OnInit {
public discos:Disco[]=[];//html
public disco:Disco;
public discoEliminado:boolean=false;
public actualizar:boolean=false;
  constructor(public  apiServes:DiscoService) { }

  

  ngOnInit(): void {
  }

  mandardisco(){
    console.log("estapasando1");
       this.apiServes.obtenerDiscos().subscribe((data:Disco[])=>{
         this.discos = data;
        
       });
      }
  
  mostrarUnDisco(id:string){ //id es un
    console.log(id)
    this.apiServes.obtenerDisco(Number(id)).subscribe((data:Disco[])=> {
      this.disco = data[0];
      
     
    });
  }


insertarDisco(id:number,titulo:string, interprete:string, anyoPublicacion:number){
    console.log(titulo)
    this.apiServes.ayadirDisco(new Disco (0,titulo,interprete,anyoPublicacion)).subscribe((data:Disco[])=>{
      console.log(data);
      console.log("Disco insertado.");
    });
    
   }
  
actualizarDisco2(id:string,titulo:string, interprete:string, anyoPublicacion:number){
  this.apiServes.actualizarDisco(new Disco(Number(id),titulo,interprete,anyoPublicacion)).subscribe((data:Disco[])=>{
    this.actualizar=true;
    this.disco = data[0];
    console.log(id );
    console.log(data );
  });

}


delete(id:HTMLInputElement){
 
  this.apiServes.eliminarDisco(Number(id.value)).subscribe((data)=>{
    this.discoEliminado=true;
  console.log("Disco eliminado");
  console.log(id.value);
  })
}



}

