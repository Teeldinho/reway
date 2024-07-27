import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type ShopState = {
  isSignedIn: boolean;
};

type ShopActions = {
  signIn: () => void;
  signOut: () => void;
};

type ShopStore = ShopState & ShopActions;

export const useShopStore = create<ShopStore>()(
  devtools(
    persist(
      (set) => ({
        isSignedIn: false,
        signIn: () => set({ isSignedIn: true }),
        signOut: () => set({ isSignedIn: false }),
      }),
      { name: "shopStore" }
    )
  )
);
