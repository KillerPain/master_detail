import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'md-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {


  name: string = "";
  surname: string = "";
  constructor(private app: AppService) { }

  ngOnInit() {
  }

  public onClick() {
    console.log(this.name);
    this.app.Clicked(this.name + this.surname);
  }
}
