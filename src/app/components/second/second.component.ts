import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {
  constructor(public dataServ:DataService){ }

  square:number = 0;

  dataSubscription?: Subscription;

  ngOnInit(): void {
      this.dataSubscription=this.dataServ.counter.subscribe({
        next: (value:number)=> {
          this.square= value*value;
        },
        error: (err)=> console.log(err)

      })
  }


  ngOnDestroy(): void {
    if(this.dataSubscription){
      this.dataSubscription.unsubscribe();
    }
  }

}
