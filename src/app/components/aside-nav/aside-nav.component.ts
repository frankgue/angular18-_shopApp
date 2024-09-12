import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../../models/item';
import { auth_items, nav_items } from '../../api/nav';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aside-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.css',
})
export class AsideNavComponent implements OnInit {
  nav_data: Item[] = nav_items;
  auth_data: Item[] = auth_items;
  @Output() close : EventEmitter<string> = new EventEmitter<string>()
  
  constructor() {}

  ngOnInit(): void {}
  
  handleClose(){
    this.close.emit()
  }
}
