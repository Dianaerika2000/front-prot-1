import create from 'zustand';

const useContentStore = create((set) => ({
  contents: [], // Array para almacenar los contenidos registrados
  addContent: (content) =>
    set((state) => ({
        contents: [...state.contents, content], 
    })),
}));

export default useContentStore;