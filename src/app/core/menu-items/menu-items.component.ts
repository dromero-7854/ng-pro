import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/core.model';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(90deg)'}))
    ])
  ]
})
export class MenuItemsComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  onItemSelected(item: MenuItem) {
    if (item.children && item.children.length) {
      item.expanded = !item.expanded;
    }
    if (!item.children || !item.children.length) {
      console.log('navigate');
    }
  }

  menuItems: MenuItem[] = [
    {
      name: 'Menu.01',
      expanded: true,
      icon: 'recent_actors',
      children: [
        {
          name: 'Ver usuarios'
        },
        {
          name: 'Crear un nuevo usuario'
        }
      ]
    },
    {
      name: 'Settings',
      expanded: true,
      icon: 'settings',
      children: [
        {
          name: 'Ver scorings'
        },
        {
          name: 'Nuevo scoring'
        }
      ]
    }
  ];

}
