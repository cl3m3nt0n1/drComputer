import { Component, OnInit, Input } from '@angular/core';
import { Composant } from '../data/Composant';
import { ListeComposantsComponent } from '../liste-composants/liste-composants.component';

@Component({
  selector: 'app-composant-config',
  templateUrl: './composant-config.component.html',
  styleUrls: ['./composant-config.component.css']
})
export class ComposantConfigComponent implements OnInit {

  
  constructor() { }

  public description = '';
  public title = '';
  public monItem = '';

  // public liste : ListeComposantsComponent ;
  

  ngOnInit(): void {
  }
  @Input() item = '' // Décore la propriété item via input

  transcodeMe (item: string) {  //permet de retourner le titre, la description et l'image de l'item en paramètre

    switch (item) {
      case 'boitier':
        this.title = "Boîtier"
        this.description = "La coque de votre machine."
        
      break;
    
      case 'cpu':
        this.title = "Processeur"
        this.description = "Le cerveau de la bête." 
      break;
    

      case 'gpu':
        this.title = "Carte Graphique"
        this.description = "Sans ça, pas d'images."
        
      break;
    

      case 'ram':
        this.title = "RAM"
        this.description = "Pour faire plein de calculs."
        
      break;


      case 'ssd':
        this.title = "SSD"
        this.description = "Un disque dur mais mieux."
        
      break;


      case 'hdd':
        this.title = "Disque Dur"
        this.description = "Le disque original."
        
      break;

      case 'windows':
        this.title = "Windows"
        this.description = "Tu veux ou tu veux pas ?"
      break;
    
      default:
        break;
    }
  }

  //Crée une fenêtre correspondant à la liste des produits disponibles en lien avec l'item séléctionné
  showCompTable(item : string){

    //Crée un nouvel objet ListeComposant et utilise sa méthode show pour afficher la liste des produits correspondant à son nom
    new ListeComposantsComponent().show(item); 
  
  
      
  }
  

}
