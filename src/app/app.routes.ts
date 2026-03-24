import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: '', loadComponent: () => import('./main-layout/main-layout').then(m => m.MainLayout),
        children: [
            { path: 'product', loadComponent: () => import('./products/products').then(m => m.ProductsComponent) },
        ]
    },
    { path: 'master', loadComponent: () => import('./main-layout/main-layout').then(m => m.MainLayout),
        children: [
            { path: 'stock', loadComponent: () => import('./products/products').then(m => m.ProductsComponent) },
        ]
    }
];