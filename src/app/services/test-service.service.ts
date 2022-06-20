import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ans } from '../classes/Ans';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  ans:Ans[]=[];
  constructor(private http:HttpClient) { }

 //method for getting the all Questions
 public getAllQuestions(){
  return this.http.get("http://localhost:9090/getAllQuestions");
}

getAllAnswers(){
  return this.http.get("http://localhost:9090/getAllAnswers");
}


//method for setting the data to ans array
setAns(data:any){
  this.ans=data;
}


//method for getting the data to ans array
getAns(){
  return this.ans;
}


}
