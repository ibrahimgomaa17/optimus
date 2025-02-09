import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  // styleUrls: ['./team.component.css'],
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private  titleService: Title) { }

  ngOnInit() {
     this.titleService.setTitle( 'Our Team' );

  }

}
