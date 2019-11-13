import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Refund } from '../../models/refund.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  forma: FormGroup;
  public mensaje: any;
  public suc = false;
  public err = false;
  public ale = false;
  public id: Refund;


  constructor(private _dash: DashboardService, private _router: Router) {

    this.id = new Refund('');

  }

  ngOnInit() {

    this.forma = new FormGroup({
      df: new FormControl(null, Validators.required)
    });

  }

  hide() {
    this.suc = false;
    this.err = false;
    this.ale = false;
  }

  refund() {
    this._dash.refund(this.id).subscribe(
      ok => {
        this.id = new Refund('');
        const cod = ok['estado'];
        console.log(cod);
        if (cod === 0) {
          this.err = false;
          this.ale = false;
          this.suc = true;
          this.mensaje = ok['mensaje'];
        } else if (cod === 5 || cod === 7 || cod === 9 || cod === 2) {
          this.suc = false;
          this.err = false;
          this.ale = true;
          this.mensaje = ok['mensaje'];
        } else if (cod === 3 || cod === 4) {
          this.suc = false;
          this.ale = false;
          this.err = true;
          this.mensaje = ok['mensaje'];
        }
      },
      error => {
        this.suc = false;
        this.ale = false;
        this.err = true;
        this.mensaje = 'Hemos tenido un problema, inténtalo más tarde.';
        console.log(error);
      }
    );
  }

  logout() {
    this._dash.logout();
  }

}
