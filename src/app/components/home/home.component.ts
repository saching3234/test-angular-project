import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ans } from 'src/app/classes/Ans';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 questions:any;
 ans:Ans[]=[];

  constructor(private service:TestServiceService,private router:Router) { }

  ngOnInit(): void {
    let resp=this.service.getAllQuestions();
    resp.subscribe((data)=>this.questions=data);
    //clearing the array
    this.ans=[];
  }


  saveAns(qid:any,option:any){
 
   this.ans.push(new Ans(qid,option));
   this.service.setAns(this.ans);
  

  }

  submitTest(){
    this.ans=this.ans.sort((a,b)=>a.qid-b.qid);
    console.log(this.ans);

    for(let an of this.ans){
     console.log(`qid = ${an.qid}  answer =  ${an.answer}`);
    }
    this.router.navigate(['./result']) 
  }

  clear(){
   this.ans=[]
   console.log(this.ans);
  }





}
