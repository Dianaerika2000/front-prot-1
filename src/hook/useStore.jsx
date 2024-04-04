import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSectionStore = create(
  persist(
    (set) => ({
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
    }), { name: 'section-storage' })
);

export default useSectionStore;