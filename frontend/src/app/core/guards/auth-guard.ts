import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = () => { const r=inject(Router); if(!localStorage.getItem('user')){r.navigateByUrl('/'); return false;} return true; };
