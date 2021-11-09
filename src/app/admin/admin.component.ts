import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  blockunblockForm: FormGroup;
  showBlock: boolean;
  saveData: any=[];
  show_table: boolean;
  saved_dataInLocal:any=[];
  appendArray: any=[];
  submitted= false;

  constructor(private formBuilder: FormBuilder,  private router: Router) {
  }

  ngOnInit(): void {
    this.blockunblockForm = this.formBuilder.group({
      blocktype:['', Validators.required],
      blockreason: ['', Validators.required],
      description:['', Validators.required],
    }); 
  }

  blockreason = [
    { id: 1, name: "To create boundaries.", type: "1" },
    { id: 2, name: "To give you space.", type: "2" },
    { id: 3, name: "They make you feel insecure.", type: "3" },
  ];
  unblockreason = [
    { id: 1, name: "To reconnect.", type: "1" },
    { id: 2, name: "To see your profile.", type: "2" },
    { id: 3, name: "To seek attention", type: "3" },
  ];

  get f() { return this.blockunblockForm.controls; }
  changeAction(e) {
    console.log(e.target.value)
    if(e.target.value == "Block"){
      this.showBlock = true;
    }else{
      this.showBlock = false;
    }
  }
 onSubmit() {
    console.log(this.blockunblockForm.value);
    this.submitted = true;
    if(this.blockunblockForm.invalid){
      return;
    }
    if(this.blockunblockForm.value){
      this.show_table = true;
      localStorage.setItem('save_value', JSON.stringify(this.blockunblockForm.value));  
      this.appendArray.push(this.blockunblockForm.value);   
     
    }
  }
 
}
