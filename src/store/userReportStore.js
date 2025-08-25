import { create } from "zustand";

export const useUserReportStore = create((set) => ({
  view: "weekly",
  setView: (newView) => set({ view: newView }),
}));
