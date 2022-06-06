import { Component, OnInit } from '@angular/core';
import { Ans } from 'src/app/classes/Ans';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  ans:Ans[]=[];
  questions:any;
  serversAns:any;
  score:number=0;
  scorePercentage:string=this.score+"%";

  constructor(private service:TestServiceService) { }

  ngOnInit(): void {    
    //getting the all question from server
    this.score=0;
    let resp1=this.service.getAllQuestions();
    resp1.subscribe((data)=>this.questions=data);

    //getting the ans from servere
    let resp=this.service.getAllAnswers();
    resp.subscribe((data)=>this.serversAns=data);

    //getting the submittes ans from user 
    this.ans=this.service.getAns();    
  }



  ngAfterViewChecked():void{
//calculating the score
this.markCal();
  }


  
    //method for calculating the score
   markCal(){
     this.score=0;
     this.scorePercentage='0'
     for(let i=0;i<this.serversAns.length;i++){
       if(this.serversAns[i].qid===this.ans[i].qid&&this.serversAns[i].answer===this.ans[i].answer)
       this.score++;    
     
   }
   //console.log("Your Final Score is :",this.score);
   this.scorePercentage=(this.score*10)+"%"

  }
}
