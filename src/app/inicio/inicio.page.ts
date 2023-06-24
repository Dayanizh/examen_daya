import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  }
  

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[]=[
    {
      icon: 'accessibility-outline',
      name: 'Alert',
      redirectTo: '/alert'
      },
      {
      icon: 'create-outline',
      name: 'Input Forms',
      redirectTo: '/input-forms'
      
      },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
