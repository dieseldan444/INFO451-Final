import { Component, OnInit } from '@angular/core';
import { HomeModel } from './../shared/home-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  home: HomeModel;
  drpStudent = ['Logan Dawkins', 'Sujit Gurung', 'Andrew Quash', 'Kiernan van Doorn', 'Daniel Spencer'];
  minNum = 0;
  maxNum = 100;

  constructor() { }

  ngOnInit() {
    this.home=new HomeModel;
  }

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    if(this.home.Score >= 91){
      this.home.Grade = 'A';
    }
   else if(this.home.Score >= 81){
      this.home.Grade = 'B';
    }
   else if(this.home.Score >= 71){
      this.home.Grade = 'C';
    }
   else if(this.home.Score >= 61){
      this.home.Grade = 'D';
    }
   else{
    this.home.Grade = 'F';
    }
  }
  
  clear() {
    this.home = new HomeModel;
  }

}