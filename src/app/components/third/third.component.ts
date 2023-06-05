import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit{

  oddOrEven?:boolean = true;

  constructor(public dataServ: DataService){ }

  ngOnInit(): void {
    this.dataServ.counter.subscribe({
      next: value => {
        let square= value*value;
        this.oddOrEven = square%2 === 0;
      },
      error: err=> console.error(err)
    })
  }

}
