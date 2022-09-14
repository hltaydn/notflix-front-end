import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  public movieForm:FormGroup;
  private title:FormControl;
  private actors:FormControl;
  private rate:FormControl;
  private description:FormControl;
  private type:FormControl;
  private photoPath:FormControl;
  private url:FormControl;
  
  closeResult = '';

  constructor(private admin: NgbModal,public formBuilder:FormBuilder) {

    this.title=new FormControl('',[Validators.required])
    this.actors=new FormControl('',[Validators.required])
    this.rate=new FormControl('',[Validators.required])
    this.description=new FormControl('',[Validators.required])
    this.type=new FormControl('',[Validators.required])
    this.photoPath=new FormControl('',[Validators.required])
    this.url=new FormControl('',[Validators.required])
    this.movieForm=formBuilder.group({
      title:this.title,
      actors:this.actors,
      rate:this.rate,
      description:this.description,
      type:this.type,
      photoPath:this.photoPath,
      url:this.url
    })
   }
   

  open(content: any) {
    this.admin.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  close(){
    console.log(this.movieForm.value);
    this.admin.dismissAll()
    this.movieForm.reset()
  }

  createMovie()
  {   
      console.log(this.movieForm.value)
      this.movieForm.reset()
  }}