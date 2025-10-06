import { create } from "zustand";

interface Filters {
	search: string;
	language: string;
	type: string;
}

const defaultFilters: Filters = {
	search: "",
	language: "all",
	type: "all",
};

const defaultUsername = "joaovictor09";

interface FiltersState {
	username: string;
	filters: Filters;
	setFilters: (filters: Partial<Filters>) => void;
	resetFilters: () => void;
}

export const useFiltersStorage = create<FiltersState>((set) => ({
	username: defaultUsername,
	filters: defaultFilters,
	setFilters: (newFilters) =>
		set((state) => ({
			filters: { ...state.filters, ...newFilters },
		})),
	resetFilters: () => set({ filters: defaultFilters }),
}));
