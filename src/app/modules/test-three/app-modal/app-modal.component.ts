import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css'],
})
export class AppModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() modalTitle!: string;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
