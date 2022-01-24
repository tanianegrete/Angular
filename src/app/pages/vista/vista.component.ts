import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';//invoca al api rest
import { DiscoService } from 'src/app/shared/disco.service';
import { Disco } from 'src/app/model/disco';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  public discos:Disco[]=[];//html
  public disco:Disco;
  
  constructor(public  apiServes:DiscoService) { 

  
  }

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

}
