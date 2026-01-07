import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private auth = getAuth();
  private firestore = getFirestore();

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  async signup(userData: { fullName: string; email: string; password: string }): Promise<{ success: boolean; error?: string }> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, userData.email, userData.password);
      const user = userCredential.user;
      await setDoc(doc(this.firestore, 'users', user.uid), {
        uid: user.uid,
        fullName: userData.fullName,
        email: userData.email,
        createdAt: new Date(),
      });
      return { success: true };
    } catch (error: any) {
      let errorMsg = 'Signup failed';
      if (error.code === 'auth/email-already-in-use') errorMsg = 'Email already in use';
      else if (error.code === 'auth/weak-password') errorMsg = 'Password is too weak';
      else if (error.code === 'auth/invalid-email') errorMsg = 'Invalid email';
      return { success: false, error: errorMsg };
    }
  }

  async login(credentials: { email: string; password: string }): Promise<{ success: boolean; error?: string }> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, credentials.email, credentials.password);
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard']);
      return { success: true };
    } catch (error: any) {
      let errorMsg = 'Invalid credentials';
      if (error.code === 'auth/user-not-found') errorMsg = 'User not found';
      else if (error.code === 'auth/wrong-password') errorMsg = 'Incorrect password';
      else if (error.code === 'auth/invalid-email') errorMsg = 'Invalid email';
      else if (error.code === 'auth/too-many-requests') errorMsg = 'Too many login attempts. Try again later.';
      return { success: false, error: errorMsg };
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}