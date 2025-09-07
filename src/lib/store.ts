// TODO: store session in zustand after login to prevent refetching of user details when opening user modal

import { create } from "zustand";
import { Session } from "next-auth";

interface SessionStoreProps {
  session: Session | null;
  setUserSession: (user: Session) => void;
  clearUserSession: () => void;
}

export const useSessionStore = create<SessionStoreProps>((set) => ({
  session: null,
  setUserSession: (session) => set({ session }),
  clearUserSession: () => set({ session: null }),
}));
