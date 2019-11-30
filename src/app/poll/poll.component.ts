import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Antwoord } from '../models/antwoord.model';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  private dataPoll:any = []
  private dataAntwoord:any = []
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const url = 'https://localhost:44312/api/';
    this.http.get(url + 'Poll').subscribe((polls)=>{
      this.dataPoll = polls
      console.log(this.dataPoll)
    })
  }

  getAntwoorden(poll: number){
    console.log(poll);
    const url = 'https://localhost:44312/api/';
    this.http.get(url + 'Antwoord').subscribe((antwoorden)=>{
      this.dataAntwoord = antwoorden
      this.dataAntwoord = this.dataAntwoord.filter((antwoord: Antwoord) => antwoord.pollId === poll)
      console.log(this.dataAntwoord)
    })
  }

  nieuwePoll(){
    this.router.navigate(['poll/add'])
  }
}
