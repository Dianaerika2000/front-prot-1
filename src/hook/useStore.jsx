import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSectionStore = create(
  persist(
    (set) => ({
      startDate: '',
      endDate: '',
      sections: [], // Array para almacenar las secciones
      addSection: (section) =>
        set((state) => ({
          sections: [...state.sections, { ...section, contents: [] }],
        })),
      addContentToSection: (sectionIndex, content) =>
        set((state) => ({
          sections: state.sections.map((section, index) =>
            index === sectionIndex
              ? { ...section, contents: [...section.contents, content] }
              : section
          ),
        })),
      addPeriodDate: ({ startDate, endDate }) =>
        set((state) => ({
          ...state,
          startDate: startDate !== undefined ? startDate : state.startDate,
          endDate: endDate !== undefined ? endDate : state.endDate,
        })),
    }), { name: 'section-storage' })
);

export default useSectionStore;