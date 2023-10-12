import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-modals',
  templateUrl: './multiple-modals.component.html',
  styleUrls: ['./multiple-modals.component.css'],
})
export class MultipleModalsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  isModalFirstOpen = false;
  isModalSecondOpen = false;
  isModalThirdOpen = false;
}
