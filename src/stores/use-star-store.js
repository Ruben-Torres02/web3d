import {create} from 'zustand';

const useStarStore = create((set) => ({
  stars: 0,
incrementStars: () => set((state) => ({stars: state.stars + 1})),
}));

export default useStarStore;
