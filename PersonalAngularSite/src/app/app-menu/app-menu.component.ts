import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    element.scrollIntoView();
  }

}
