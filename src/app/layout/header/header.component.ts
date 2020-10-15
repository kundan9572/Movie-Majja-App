import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  city: any = ['Patna', 'Delhi', 'Ranchi', 'Goa', 'Noida', 'Bhopal'];
  constructor() { }

  ngOnInit(): void {
  }

}
