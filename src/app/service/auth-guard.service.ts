import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  CanActivateChild,
} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private title: Title) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const title = route.data['title']?`${route.data['title']}- ng antd admin`:'ng antd admin';
    this.title.setTitle(title);
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    return this.canActivate(route);
  }
}
