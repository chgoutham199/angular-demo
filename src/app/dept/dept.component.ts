import { Component } from '@angular/core';
import { DeptServiceService } from '../services/dept-service.service';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dept',
  standalone: true,
  imports: [JsonPipe,CommonModule,FormsModule],
  templateUrl: './dept.component.html',
  styleUrl: './dept.component.css'
})
export class DeptComponent {

     constructor(private deptService:DeptServiceService){
     }
     details:any;
     ngOnInit(){
      this.deptService.getDept().subscribe((res:any)=>{
        this.details=res.products;
     })}
  idDetails:any;
  idFetch:any=0;
getLogs(){ console.log('clicked'); 
}
  getDetails(id : any){
    console.log(id);
    this.deptService.getDetailsById(id).subscribe((res:any)=>{
      this.idDetails=res;
    })
  }
}
