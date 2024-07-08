import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/service/firebase";

type LoginProps = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginProps) => {
  console.log("login");
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredential.user;
};

export const logout = async () => {
  await signOut(auth);
};
