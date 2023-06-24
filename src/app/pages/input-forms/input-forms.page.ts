import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.page.html',
  styleUrls: ['./input-forms.page.scss'],
})
export class InputFormsPage implements OnInit {
  nombre: string='YAZMIN';
  usuario ={
    email: ' ',
    password: ' '
  }

  constructor() { }

  ngOnInit() {
  }

}
