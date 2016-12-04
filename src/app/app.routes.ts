import { Routes, RouterModule } from '@angular/router';


import { DataResolver } from './app.resolver';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from "./shared/auth.guard";
import {ProtectedClass} from "./protected/protected.component";
import {ProgramPageComponent} from "./parent-page/program-page/program-page.component";
import {OdotComponent} from "./odot-component/odot-component";


const appRoutes: Routes = [

  { path: 'odot', component:OdotComponent},
  { path: '', redirectTo:'/signin', pathMatch: 'full'},
  { path:'signup', component:SignUpComponent},
  { path:'signin', component:SignInComponent},
  {path:'protected', component: ProtectedClass, canActivate: [AuthGuard]},
  { path: "parent/program-page/:id", component: ProgramPageComponent, canActivate: [AuthGuard]},
  { path: '**',    component: SignInComponent },
];

export const appRoutingProviders: any[] = [

];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes);
