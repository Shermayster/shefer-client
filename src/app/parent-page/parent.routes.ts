
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ParentPage} from "./paren-page.component";
import {ProtectedClass} from "../protected/protected.component";
import {ParentResponse} from "./response.component/response.component";
import {AuthGuard} from "../shared/auth.guard";

const parentRouters: Routes = [
  { path: "parent/:id", component: ParentPage, canActivate: [AuthGuard]},
  { path: "parent/response/:id", component: ParentResponse, canActivate: [AuthGuard]},
  {path:'protected', component: ProtectedClass, canActivate: [AuthGuard]}
];

export const parentRouting: ModuleWithProviders = RouterModule.forChild(parentRouters);
