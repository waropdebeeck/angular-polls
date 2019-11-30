import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private data:any = []
  constructor(private http: HttpClient, private router: Router) { }

  getPolls(){
    const url = 'https://localhost:44312/api/Poll';
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
    this.router.navigate(['poll'])
  }

  ngOnInit() {
  }

}
