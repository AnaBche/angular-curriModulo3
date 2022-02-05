import { Component, OnInit } from '@angular/core';
import { CurriculumService } from 'src/app/servicios/curriculum.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(private datosCurriculum:CurriculumService) { }

  ngOnInit(): void {
    this.datosCurriculum.obtenerDatos().subscribe(data=>{
    console.log(data);
    })
  }

}
