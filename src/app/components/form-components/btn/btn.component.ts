import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BtnComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
