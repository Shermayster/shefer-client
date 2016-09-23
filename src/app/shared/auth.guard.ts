/**
 * Created by Pavel on 18/09/2016.
 */
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { IsAuth} from "./auth.sevice";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
constructor(private isAuth:IsAuth) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean {
        return this.isAuth._isAuth;
    }

}