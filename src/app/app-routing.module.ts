import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { authGuard } from './auth/auth.guard';
import { checkoutGuard } from './checkout.guard';

const routes: Routes = [
  { path: 'cart', component: CartComponent, canActivate: [authGuard], canDeactivate: [checkoutGuard]},
  { path: 'about', loadComponent: () => import('./about/about-info/about-info.component').then(m => m.AboutInfoComponent), canLoad: [authGuard] },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
