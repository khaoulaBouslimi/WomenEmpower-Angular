import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
<<<<<<< HEAD
  public video=[
    {vName:'Youth work for women empowerment', Photo:'assets/images/ts.jpg', Like:0, Dislike:0},
    {vName:'Personal developpement for women empowerment', Photo:'assets/images/ts2.jpg', Like:0, Dislike:0},
    {vName:'How to Increase Your Social Intelligence', Photo:'assets/images/ts3.jpg', Like:0, Dislike:0},
  ]
=======
>>>>>>> ala-Branch

  ngOnInit(): void {
  }

<<<<<<< HEAD
  public likeCounter(video:any){
    video.Like++;
  }

  public dislikeCounter(video:any){
    video.Dislike++;
  }

=======
>>>>>>> ala-Branch
}
