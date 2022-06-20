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

//method for saving the users answers into the ans array
  saveAns(qid:any,option:any){
    //checking the ans is exist or not if exist override the previous ans with new one       
    let flag=true;
    for(let i=0;i<this.ans.length;i++){
      //if answer allready exist in the array update the anser 
      if(this.ans[i].qid==qid){
        this.ans[i].answer=option;
        flag=false
      }
    }
    //pushing the new answer into the arrays
    if(flag){
      this.ans.push(new Ans(qid,option));
      this.service.setAns(this.ans);
    } 

   console.log('the ans array ',this.ans)

  }

 //method for submitting the result
  submitTest(){    
    //sorting the answers in ascending order and store in the ans array
    this.ans=this.ans.sort((a,b)=>a.qid-b.qid);

    if(this.ans.length==10){
      //going to the result component
    this.router.navigate(['./result']) 
    }
    else
    alert(`Solve the all 10 questions.\n The ${10-this.ans.length}  question/s is/are not solved ,\n solve them first and then submit test`);

    
  }

  //method for clearing the all selected options
  clear(){
    //empty the ans array
   this.ans=[]
   console.log(this.ans);
  }

}
