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
      updateContentInSection: (sectionIndex, contentIndex, updatedContent) =>
        set((state) => ({
          sections: state.sections.map((section, index) =>
            index === sectionIndex
              ? {
                  ...section,
                  contents: section.contents.map((item, idx) =>
                    idx === contentIndex ? { ...item, ...updatedContent } : item
                  ),
                }
              : section
          ),
        })),
      deleteContentInSection: (sectionIndex, contentIndex) =>
        set((state) => ({
          sections: state.sections.map((section, index) =>
            index === sectionIndex
              ? {
                  ...section,
                  contents: section.contents.filter((_, idx) => idx !== contentIndex),
                }
              : section
          ),
        })),
      addPeriodDate: ({ startDate, endDate }) =>
        set((state) => ({
          ...state,
          startDate: startDate !== undefined ? startDate : state.startDate,
          endDate: endDate !== undefined ? endDate : state.endDate,
        })),
      updatePeriodDate: ({ startDate, endDate }) =>
        set((state) => ({
          ...state,
          startDate: startDate !== undefined ? startDate : state.startDate,
          endDate: endDate !== undefined ? endDate : state.endDate,
        })),
      updateSection: (index, updatedSection) =>
        set((state) => ({
          ...state,
          sections: state.sections.map((section, i) => 
            i === index ? updatedSection : section
          ),
        }))
    }), { name: 'section-storage' })
);

export default useSectionStore;