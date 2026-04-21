import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { auth } from "@/Firebase/firebase.init";

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  const logOutUser = () => {
    return signOut(auth);
  };

  const signUpUser = async (email: string, password: string, name: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(result.user, {
      displayName: name,
    });
  };

  const signUpGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile: Parameters<typeof updateProfile>[1]) => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return Promise.reject(new Error("No authenticated user"));
    }

    return updateProfile(currentUser, profile);
  };

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
    });
    return userState;
  }, []);

  const userInfo = {
    setloading,
    loading,
    user,
    signUpGoogle,
    signUpUser,
    signInUser,
    logOutUser,
    updateUserProfile,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
