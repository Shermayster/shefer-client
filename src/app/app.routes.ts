import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from "./shared/auth.guard";
import {ProtectedClass} from "./protected/protected.component";


const appRoutes: Routes = [
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: '', redirectTo:'/signin', pathMatch: 'full'},
  { path:'signup', component:SignUpComponent},
  { path:'signin', component:SignInComponent},
  {path:'protected', component: ProtectedClass, canActivate: [AuthGuard]},
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];

export const appRoutingProviders: any[] = [

];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes);
