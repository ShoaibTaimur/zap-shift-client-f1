import type { User, UserCredential } from "firebase/auth";
import { createContext, type Dispatch, type SetStateAction } from "react";

type AuthContextType = {
  loading: boolean;
  setloading: Dispatch<SetStateAction<boolean>>;
  user: User | null;
  signUpUser: (email: string, password: string, name: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<UserCredential>;
  logOutUser: () => Promise<unknown>;
  signUpGoogle: () => Promise<UserCredential>;
  updateUserProfile: (profile: { photoURL?: string }) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
