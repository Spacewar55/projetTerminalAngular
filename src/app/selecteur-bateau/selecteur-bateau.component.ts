import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  mesureGe:any;
  mesureGm:any;
  mesureGs:any;
  mesureGve:any;
  mesureGvl:any;
  mesureGvsl:any;
  mesureSa:any;
  mesureSs:any;

  rechercheDeBateau = "https://iwa2021.edriki.com/api/Boat/Search/";
  dimensionBateau = "https://iwa2021.edriki.com/api/Boat/ByRef/";

  validationInput = "^\d{1,2}(\.\d{1,2})?$";



  constructor(private http: HttpClient) { }

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

  getMesureBateau($event:any){
    var input = $event.target.value;
    this.http.get<any>(this.dimensionBateau+input).subscribe(
      respond => {
        console.log(respond.response.datas);
        this.mesureBateau = respond.response.datas.lengthm;
        this.mesureGe = respond.response.datas.sails.ge;
        this.mesureGm = respond.response.datas.sails.gm;
        this.mesureGs = respond.response.datas.sails.gs;
        this.mesureGve = respond.response.datas.sails.gve;
        this.mesureGvl = respond.response.datas.sails.gvl;
        this.mesureGvsl = respond.response.datas.sails.gvsl;
        this.mesureSa = respond.response.datas.sails.sa;
        this.mesureSs = respond.response.datas.sails.ss;
        console.log(this.mesureBateau);
        return this.mesureBateau;
      }
    );
  }

  ngOnInit(): void {
  }
}
