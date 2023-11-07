import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import capaignReducer from './slices/campaignSlice'


const store = configureStore({
    reducer: {
        campaign: capaignReducer,

    },

});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export { store };
