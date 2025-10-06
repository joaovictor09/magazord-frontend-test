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

interface FiltersState {
	filters: Filters;
	setFilters: (filters: Partial<Filters>) => void;
	resetFilters: () => void;
}

export const useFiltersStorage = create<FiltersState>((set) => ({
	filters: {
		search: "",
		language: "all",
		type: "all",
	},
	setFilters: (newFilters) =>
		set((state) => ({
			filters: { ...state.filters, ...newFilters },
		})),
	resetFilters: () => set({ filters: defaultFilters }),
}));
