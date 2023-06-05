import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  subjectVariable = new Subject<string>()
  behaviorVariable = new BehaviorSubject<string>('starting value');
  replayValue = new ReplaySubject<string>();
  counter = 0;
  constructor() {
    setInterval(()=>{
      this.counter++;
      const nextValue = 'sono passati: '+ this.counter*2 + 'secondi.';
      this.subjectVariable.next(nextValue);
      this.behaviorVariable.next(nextValue);
      this.replayValue.next(nextValue);
    },2000)
  }
}
