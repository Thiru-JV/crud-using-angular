import { Component , OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit{
  formAllData= new FormGroup({
    name : new FormControl(),
    email : new FormControl(),
    salary : new FormControl(),
    position : new FormControl(),
    education : new FormControl('Select'),
    exp : new FormControl(),
    dob : new FormControl(),
    gender : new FormControl()
  });
  
  constructor(private employerDetils:DataService){

  }
  ngOnInit() :void{

  }

  onSubmit(){
    console.log(this.formAllData);
    this.employerDetils.post(this.formAllData.value).subscribe((data)=>{
      alert('SuccessFUlly added If you like to see click "Home-Button"')
    this.formAllData.reset();
    })
  }
}
