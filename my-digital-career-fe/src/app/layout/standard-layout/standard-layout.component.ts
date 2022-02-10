import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.scss']
})
export class StandardLayoutComponent implements OnInit {
  @Input() header = 'this is header';
  @Input() footer = 'this is footer';
  constructor() { }

  ngOnInit(): void {
  }

}
