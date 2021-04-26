import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from "@angular/forms";
import { Card } from 'src/app/_shared/_models/card';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public title: string;

  
  newsForm = new FormGroup({
    comment: new FormControl('',Validators.required),
    prix: new FormControl(),
  });

  constructor(public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.title = this.data.title;
    }

  ngOnInit() {
    this.createForm();
    if(this.data.card) {
      this.newsForm.patchValue(this.data.card);
    }
  }

  createForm() {
    this.newsForm = new FormGroup({
      comment: new FormControl('',Validators.required),
      prix: new FormControl()
    });
  }

  sendData() {
    if(this.newsForm.valid) {
      this.dialogRef.close(new Card(this.newsForm.controls['comment'].value))
    }
  }
}
