import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var Stats = [0,0,0,0,0,0];
    var i =0;
    var test = "done"
    function generateStats()
    {
        for(i=0;i<6;i++)
        {
          Stats[i] = Math.floor(Math.random() * Math.floor(20));
          console.log(i);
        }
    }
  }

  

}
