import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.css'],
})
export class AppParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  isModalFirstOpen: boolean = true;
  isModalSecondOpen!: boolean;
}
