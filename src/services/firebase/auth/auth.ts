import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
  Auth,
} from "firebase/auth";

import { app } from "../config/app";
import User from "@/types/User";

type NotifyUser = (user: User | null) => void;
type Unsubscribe = () => void;

export default class Authentication {
  private _auth: Auth;

  constructor() {
    this._auth = getAuth(app);
  }

  async loginGoogle(): Promise<User | null> {
    const resp = await signInWithPopup(this._auth, new GoogleAuthProvider());
    return this._convertUser(resp.user);
  }

  async loginEmailPassword(
    email: string,
    password: string
  ): Promise<User | null> {
    const resp = await signInWithEmailAndPassword(this._auth, email, password);
    return this._convertUser(resp.user);
  }

  async createUserEmailPassword(
    email: string,
    password: string
  ): Promise<User | null> {
    const resp = await createUserWithEmailAndPassword(
      this._auth,
      email,
      password
    );
    return this._convertUser(resp.user);
  }

  async logout(): Promise<void> {
    await signOut(this._auth);
  }

  observeUser(notify: NotifyUser): Unsubscribe {
    return onIdTokenChanged(this._auth, async (firebaseUser) => {
      const user = this._convertUser(firebaseUser);
      notify(user);
    });
  }

  private _convertUser(firebaseUser: any) {
    if (!firebaseUser?.email) return null;

    return {
      id: firebaseUser.uid,
      name: firebaseUser.displayName,
      email: firebaseUser.email,
      image: firebaseUser.photoURL,
    };
  }
}
