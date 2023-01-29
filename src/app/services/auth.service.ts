import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";



@Injectable({ providedIn: 'root' })
export class Authservice {

    userProfile$ = new BehaviorSubject({});
    currentUser = {};

    constructor() {
        this.getCurrentUser();
        this.userProfile$.next(this.currentUser)
    }

    getCurrentUser() {
        const currentUserString = localStorage.getItem('current-user') || '';
        this.currentUser = JSON.parse(currentUserString);
        this.userProfile$.next(this.currentUser)
    }

    updateUserProfile(updatedUserProfile: any) {
        const currentUserString = localStorage.getItem('current-user') || '';
        const signUpUsersString = localStorage.getItem('signUpUsers') || '';

        const currentUser = JSON.parse(currentUserString);
        let signUpUsers: any[] = JSON.parse(signUpUsersString);

        currentUser.userName = updatedUserProfile.username;
        currentUser.dob = updatedUserProfile.dob;

        signUpUsers = signUpUsers.map(user => {
            if (user.email === updatedUserProfile.email) {
                user.userName = updatedUserProfile.username;
                user.dob = updatedUserProfile.dob;
                return user;
            } else {
                return user;
            }
        })

        localStorage.setItem('current-user', JSON.stringify(currentUser))
        localStorage.setItem('signUpUsers', JSON.stringify(signUpUsers))
        this.currentUser = currentUser;
        this.userProfile$.next(this.currentUser)

    }
}



