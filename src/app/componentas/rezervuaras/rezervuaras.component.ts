import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervuaras',
  templateUrl: './rezervuaras.component.html',
  styleUrls: ['./rezervuaras.component.css']
})
export class RezervuarasComponent implements OnInit {

  public talpa:number=0;
  public greitis:number=0;
  public laikas:number=0;

  public uzpildyta_procentais: number = 0;
  public error_msg: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  public skaiciuoti_rezervuaro_uzpildymoLygi() {
      if (this.talpa && this.greitis && this.laikas) {
        this.uzpildyta_procentais = Number(
          (((this.greitis * this.laikas) / this.talpa) * 100).toFixed(2)
        );
        if (this.uzpildyta_procentais > 80 && this.uzpildyta_procentais < 100)
          this.error_msg = 'Rezervuaro talpa kritiškai pripildyta.';
        if (this.uzpildyta_procentais >= 100) this.error_msg = 'Talpa perpildyta';
      }
  }

}

//Paspaudus skaičiuoti mūsų aplikacija turėtų suskaičiuoti kiek % rezervuaro yra užpildyta.