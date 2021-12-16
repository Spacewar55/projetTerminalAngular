import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selecteur-composant',
  templateUrl: './selecteur-composant.component.html',
  styleUrls: ['./selecteur-composant.component.css']
})
export class SelecteurComposantComponent implements OnInit {

  public listecomposant: any;

  composant = new Array;

  listeComposantBateau = "https://iwa2021.edriki.com/api/Item/Items";

  constructor(private http: HttpClient) { }
  @Input() donneesVoiles:any;

  //Utilisation de la 3eme API en utilisant les tailles du bateau et celles des voiles entré par l'utilisateur précédemment
  getComposant(event:any){
    this.listeComposantBateau+"?gvl="+this.donneesVoiles.mesureGvl+
    "&gvsl="+this.donneesVoiles.mesureGvsl+
    "&gve="+this.donneesVoiles.mesureGve+
    "&gm="+this.donneesVoiles.mesureGm+
    "&ge="+this.donneesVoiles.mesureGe+
    "&ss="+this.donneesVoiles.mesureSs+
    "&sa="+this.donneesVoiles.mesureSa+
    "&gs="+this.donneesVoiles.mesureGs+
    "&length="+this.donneesVoiles.mesureBateau;
  }

  ngOnInit(): void {
  }



}
