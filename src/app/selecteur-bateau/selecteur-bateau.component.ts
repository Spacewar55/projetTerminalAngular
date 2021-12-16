import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-selecteur-bateau',
  templateUrl: './selecteur-bateau.component.html',
  styleUrls: ['./selecteur-bateau.component.css']
})

export class SelecteurBateauComponent implements OnInit {

  private minString = 3;
  private maxString = 40;

  public listebateau:any;

  ref = new String;
  bateaux = new Array;
  mesureBateau:any;
  voiles = new Array;

  form = new FormGroup({
    gvl: new FormControl('',[Validators.pattern(/^\d{1,3}(\.\d{1,2})?$/)]),
    gvsl: new FormControl('',[Validators.pattern(/^\d{1,3}(\.\d{1,2})?$/)]),
    gve: new FormControl('',[Validators.pattern(/^\d{1,3}(\.\d{1,2})?$/)]),
    gm: new FormControl('',[Validators.pattern(/^\d{1,3}(\.\d{1,2})?$/)]),
    ge: new FormControl('',[Validators.pattern(/^\d{1,3}(\.\d{1,2})?$/)]),
    ss: new FormControl('',[Validators.pattern(/^\d{1,3}(\.\d{1,2})?$/)]),
    sa: new FormControl('',[Validators.pattern(/^\d{1,3}(\.\d{1,2})?$/)]),
    gs: new FormControl('',[Validators.pattern(/^\d{1,3}(\.\d{1,2})?$/)])
  })

  mesureGvl:any;
  mesureGvsl:any;
  mesureGve:any;
  mesureGm:any;
  mesureGe:any;
  mesureSs:any;
  mesureSa:any;
  mesureGs:any;

  //Première API qui retourne la liste des bateaux en fonction d'un nom entré par l'utilisateur
  rechercheDeBateau = "https://iwa2021.edriki.com/api/Boat/Search/";
  //Deuxième API qui retourne les longueurs des voiles du bateau selectionné par l'utilisateur
  dimensionBateau = "https://iwa2021.edriki.com/api/Boat/ByRef/";

  constructor(private http: HttpClient) { }
  @Output() donneesVoiles = new EventEmitter<any>();
  getBateau(event:any){
    let input = event.target.value;
    if (input.length >= this.minString && input.length <= this.maxString){
      this.http.get<any>(this.rechercheDeBateau+input).subscribe(
        respond => {
          console.log(respond.response.datas);
          this.bateaux = respond.response.datas;
          this.ref = respond.response.datas.ref;
        }
      );
    }
  }

  //Fonction qui retourne les valeurs des voiles du bateau selectionné par l'utilisateur
  getMesureBateau($event:any){
    var input = $event.target.value;
    this.http.get<any>(this.dimensionBateau+input).subscribe(
      respond => {
        console.log(respond.response.datas);
        this.mesureBateau = respond.response.datas.lengthm;
        this.mesureGvl = respond.response.datas.sails.gvl;
        this.mesureGvsl = respond.response.datas.sails.gvsl;
        this.mesureGve = respond.response.datas.sails.gve;
        this.mesureGm = respond.response.datas.sails.gm;
        this.mesureGe = respond.response.datas.sails.ge;
        this.mesureSs = respond.response.datas.sails.ss;
        this.mesureSa = respond.response.datas.sails.sa;
        this.mesureGs = respond.response.datas.sails.gs;

        console.log(this.mesureBateau);
        return this.mesureBateau;

        this.voiles=[this.mesureBateau, this.mesureGvl, this.mesureGvsl, this.mesureGve, this.mesureGm, this.mesureGe, this.mesureSs, this.mesureSa, this.mesureGs]
      }
    );
  }

  //Fonction qui permet de valider la taille des voiles entré par l'utilisateur
  validationMesure(){
    console.log(this.form.valid);
    if (this.form.valid == true){
      this.donneesVoiles.emit(this.voiles);
    }
    else {
      alert('Veuillez entrer une taille valide!')
    }
  }

  ngOnInit(): void {
  }
}
