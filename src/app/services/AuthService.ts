import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token?: string;
  
    public isAuthenticated(): boolean {
        return !!this.token;
    }

    public async login(): Promise<boolean> {
        // wait 3 seconds
        await new Promise(resolve => setTimeout(resolve, 3000));
        this.token = 'token';
        return true;
    }
}