import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/core.model';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(90deg)' }))
    ])
  ]
})
export class MenuItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onClick(item: MenuItem) {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    } else if (item.route) {
      console.log('navigate');
    }
  }

  menuItems: MenuItem[] = [
    {
      name: 'Scoring',
      expanded: true,
      icon: 'stars',
      children: [
        {
          name: 'Ver scorings',
          route: 'scorings'
        },
        {
          name: 'Nuevo scoring',
          route: 'new-scoring'
        }
      ]
    },
    {
      name: 'Administrar variables',
      icon: 'dashboard',
      route: 'admin-scoring'
    },
    {
      name: 'Usuarios',
      expanded: true,
      icon: 'recent_actors',
      children: [
        {
          name: 'Ver usuarios',
          route: 'users'
        },
        {
          name: 'Crear un nuevo usuario',
          route: 'new-user'
        }
      ]
    }
  ];

}
