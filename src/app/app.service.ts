import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

  private subject = new Subject<string>();
  public master = this.subject.asObservable();
  private subject2 = new Subject<number>();
  public deleteDelete = this.subject2.asObservable();

  constructor() {
  }

  Clicked(name) {
    this.subject.next(name);
  }

  toDelete(number) {
    this.subject2.next(number);
  }
}
