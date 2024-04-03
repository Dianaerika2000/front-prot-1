import create from 'zustand';

const useSectionStore = create((set) => ({
  sections: [], // Array para almacenar las unidades registradas
  addSection: (section) =>
    set((state) => ({
      sections: [...state.sections, section], // Agregar la nueva unidad al array
    })),
}));

export default useSectionStore;