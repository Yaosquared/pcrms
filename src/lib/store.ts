import { create } from "zustand";
import { Session } from "next-auth";

interface AuthStoreProps {
  session: Session | null;
  setUserSession: (user: Session) => void;
  clearUserSession: () => void;
  logoutModalState: boolean;
  setLogoutModalState: (state: boolean) => void;
}

export const useAuthStore = create<AuthStoreProps>((set) => ({
  session: null,
  setUserSession: (session) => set({ session }),
  clearUserSession: () => set({ session: null }),
  logoutModalState: false,
  setLogoutModalState: (state: boolean) => set({ logoutModalState: state }),
}));
