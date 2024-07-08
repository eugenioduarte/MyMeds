import { create } from "zustand";
import { persist } from "zustand/middleware";
import { secureStore } from "@/service/storage";

interface AuthState {
  logout: any;
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
    }),
    {
      name: "auth",
      storage: secureStore,
    },
  ),
);

export default useAuthStore;
