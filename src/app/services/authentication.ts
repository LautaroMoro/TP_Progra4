import { Injectable } from "@angular/core";
import { createClient } from "@supabase/supabase-js";
import { enviroment } from "../enviroments/enviroments";
@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    private supabase = createClient(
        enviroment.supabaseUrl,
        enviroment.supabaseKey
    );

    async register(email: string, password: string) {
        return await this.supabase.auth.signUp({email, password});
    }

    async login(email: string, password: string) {
        return await this.supabase.auth.signInWithPassword({email, password});
    }
    async logout(){
        return await this.supabase.auth.signOut();
    }

    async getCurrertUser() {
        const {data} = await this.supabase.auth.getUser();
        return data.user;
    }

    async haySesionActiva() {
        const user = await this.getCurrertUser();
        return user !== null;
    }
}

