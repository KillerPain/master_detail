import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, OnInit } from '@angular/core';
import { DetailComponent } from 'app/detail/detail.component';
import { AppService } from 'app/app.service';
import { Detail2Component } from 'app/detail2/detail2.component';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild('detail', {read: ViewContainerRef })
  private detailContainer: ViewContainerRef ;
  masters: number[] = [];

  constructor(private cfr: ComponentFactoryResolver, private service: AppService) {
    for(let i = 1; i <= 12; i ++) {
      this.masters.push(i);
    }
  }

  ngOnInit() {
    let count = 0;
    const factory = this.cfr.resolveComponentFactory(DetailComponent);
    this.service.master.subscribe((data) => {
      const componentRef = this.detailContainer.createComponent(factory);      
      componentRef.instance.name = data;
      componentRef.instance.count = count;
      count ++;
    });
    this.service.deleteDelete.subscribe((number) => {
      console.log(number);
      this.detailContainer.remove(number);
    });
  }
}
