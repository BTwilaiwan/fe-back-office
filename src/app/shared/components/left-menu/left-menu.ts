import { Component, ChangeDetectorRef } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-left-menu',
  imports: [ PanelMenuModule, RouterModule ],
  templateUrl: './left-menu.html',
  styleUrl: './left-menu.scss',
})
export class LeftMenuComponent {

  public menus: MenuItem[] = [];

  constructor(
    private router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
   this.initMenu();
    this.applyActiveState(this.router.url); 

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => this.applyActiveState(e.urlAfterRedirects));
  }

  initMenu() {
    this.menus = [
      {
        id: 'product',
        label: 'Product Management',
        icon: 'fa-solid fa-basket-shopping',
        state: { routePath: '/product' },
        command: () => {this.router.navigate(['/product'])}
      },
      {
        id: 'master',
        label: 'Stock Management',
        icon: 'fa-solid fa-database',
        items: [
          {
            label: 'สถานที่จัดเก็บสินค้า',
            icon: 'fa-solid fa-warehouse',
            state: { routePath: '/master/stock' },
            command: () => this.router.navigate(['/master/stock'])

          },
        ]
      },
    ]
  }

  applyActiveState(currentUrl: string) {
    for (const item of this.menus) {
      let anySubActive = false;

      if (item.items) {
        for (const sub of item.items) {
          const path = sub.state?.['routePath'] as string;  
          const isActive = !!path && currentUrl.startsWith(path);
          sub.styleClass = isActive ? 'active-menu-item' : '';
          if (isActive) anySubActive = true;
        }
      }

      const topPath = item.state?.['routePath'] as string; 
      const isTopActive = !!topPath && currentUrl.startsWith(topPath);

      item.styleClass = isTopActive ? 'active-menu-item' : '';
      if (item.items) item.expanded = anySubActive;
    }

    this.menus = [...this.menus];
    this._cdr.markForCheck();
  }
}
