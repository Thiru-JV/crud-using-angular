import { Component} from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formAllData= new FormGroup({
    name : new FormControl(),
    email : new FormControl(),
    salary : new FormControl(),
    position : new FormControl(),
    education : new FormControl(),
    dob : new FormControl(),
    exp : new FormControl(),
    gender : new FormControl()
  });
  curentId:any;
  employer:any;
  show:boolean=false;
  constructor(private employerDetils:DataService){

   
  }
  ngOnInit(): void{
    this.getData();
  }
getData(){
  this.employerDetils.employer().subscribe((data)=>{
    this.employer = data;
  })
}
  deleteData(id:any){
    console.log(id);
this.employerDetils.delete(id).subscribe(()=>{
  this.getData();
})
  }

  edit(data:any){
this.show=true;
    this.formAllData= new FormGroup({
  name : new FormControl(data.name),
  email : new FormControl(data.email),
  salary : new FormControl(data.salary),
  position : new FormControl(data.position),
  education : new FormControl(data.education),
  dob : new FormControl(data.dob),
  exp : new FormControl(data.exp),
  gender : new FormControl(data.gender)
});
this.curentId= data.id;
console.log(this.curentId);
  }
  close(){
    this.show=false;
    
  }
  upDate(){
   
    const value = this.formAllData.value;
    
    this.employerDetils.put(this.curentId,value).subscribe((data)=>{
      alert('successfuly Updated')
      this.close();
      this.getData();
    })
  }
}

