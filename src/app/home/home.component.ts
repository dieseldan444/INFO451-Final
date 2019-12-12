import { Component, OnInit } from '@angular/core';
import { HomeModel } from './../shared/home-model';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.home=new HomeModel;
  }

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }
  
  clear() {
    this.home = new HomeModel;
  }

}