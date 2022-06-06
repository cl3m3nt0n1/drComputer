import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';
import { ComposantConfigComponent } from '../composant-config/composant-config.component';
import { ComposantServiceService } from '../composant-service.service';
import { Composant } from '../data/Composant';
import data from '../../assets/pcs.json';  //Error but ok, even if the property  : "resolveJsonModule" has been set


@Component({
  selector: 'app-liste-composants',
  templateUrl: './liste-composants.component.html',
  styleUrls: ['./liste-composants.component.css']
})
export class ListeComposantsComponent implements OnInit {
  
  public listeCompo: Composant[] = [];

  
  constructor() {
  }
  
  ngOnInit(): void {    
  }
  
  show(item : string){
    // compo = JSON.parse(data).filter();
    // window.alert(compo)
  }

  
}

