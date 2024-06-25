import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ProfileStore = {
    currentUser: {
        id: string | undefined,
        email: string | undefined
    };
    setProfile: (payload: { id: string | undefined, email: string | undefined }) => void;
};

export const useProfileStore = create(
  immer<ProfileStore>(set => ({
    //state
    currentUser: {
        id: undefined,
        email: undefined
    },

    //functions
    setProfile: (payload) =>
        set(state => {
            state.currentUser.id = payload.id; 
            state.currentUser.email = payload.email;
        }),
  }))
);