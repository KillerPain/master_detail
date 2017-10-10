import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'md-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  private  _count : number;
  public get count() : number {
    return this._count;
  }
  public set count(v : number) {
    this._count = v;
  }
  
  private _name : string;
  public get name() : string {
    return this._name;
  }
  public set name(v : string) {
    this._name = v;
  }
  constructor(private app: AppService) { }

  ngOnInit() {
  }

  onDelete() {
    this.app.toDelete(this.count);
  }

}
