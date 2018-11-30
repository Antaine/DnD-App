import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent implements OnInit {
 d6Results = Array<Number>(6);
  constructor() { }

  ngOnInit() {

    
  }

  RollStats():any
  {
    var d6;
    var rolls= [4];
    var statTotal = 0;
    var i =0;
    var j =0;
  var count = 0;
    for(i=0;i<6;i++)
    {
      count++;
      for(j=0;j<4;j++)
      {
        d6 = Math.floor((Math.random() * 6)+1)
        rolls[j] = d6;
      //  console.log("Random Number: " + d6 + " Count" +i);
      }
    this.d6Results[i] =  this.calculateBest3(rolls[0],rolls[1],rolls[2],rolls[3]);
    console.log(this.d6Results[i]);
     
    }
  }//End of roll

  calculateBest3(rl1:Number,rl2:Number,rl3:Number,rl4:Number)
  {
    var i=0;
    var temp;
    var save1 = 0,save2=0,save3=0;
    var statTotal = 0;
    var rollArray = [];
    rollArray[0] = rl1, rollArray[1] = rl2, rollArray[2] = rl3, rollArray[3] = rl4;
    save1 = rollArray[0];
    save2 = rollArray[1];
    save3 = rollArray[2];
    temp = rollArray[3];
   var copy = 0;
   // console.log("Passed Nums:"+ rollArray[0] + " "+ rollArray[1] + " " +rollArray[2] + " " + rollArray[3]);
   
          if(temp>save1)
          {
            copy = save1;
            save1 = rollArray[3];
            temp = copy;
          //  console.log("save 1 " + save1 )
           // console.log("temp " + temp )
          }

          if(temp>save2)
          {
            copy = save2;
            save2 = temp;
            temp = copy;
          }

          if(temp>save3)
          {
              copy = save3;
              save3 = temp;
              temp = copy;
          }
      //console.log("Highest 3 Rolls:"+ save1 + " "+ save2 + " " +save3);
      statTotal = save1 + save2 + save3;
    //  console.log(statTotal);
      return statTotal;
  }
}

