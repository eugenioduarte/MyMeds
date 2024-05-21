import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { secureStore } from "@/service/storage";
import { auth } from "@/service/firebase";

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          set({ isAuthenticated: true });
        } catch (error) {
          console.error("Failed to login", error);
          throw error; // Lançar erro para ser tratado na UI
        }
      },
      logout: async () => {
        try {
          await signOut(auth);
          set({ isAuthenticated: false });
        } catch (error) {
          console.error("Failed to logout", error);
        }
      },
    }),
    {
      name: "auth",
      storage: secureStore,
    },
  ),
);

export default useAuthStore;
