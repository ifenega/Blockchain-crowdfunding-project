import { createSlice } from '@reduxjs/toolkit';
;


const initialState: CampaignSliceProps = {
    currentCampaignData: null,
    showModal: false,
    modal: {
        size: "mid",
        title: "",
        modal_type: ""
    },
};

const campaignSlice = createSlice({
    name: 'campaign',
    initialState,
    reducers: {
        setCampaignData: (state, action) => {
            state.currentCampaignData = action.payload;
            state.showModal = true
        },
        setModalFeatures: (state, action) => {
            state.modal = action.payload
        },
        closeCampaignModal: (state) => {
            state.currentCampaignData = null;
            state.showModal = false;
            state.modal = initialState.modal
        },
        setAccountSettings: (state, action) => {
            state.modal = action.payload
            state.showModal = true
        }
    },
});

export const campaignActions = campaignSlice.actions;
export default campaignSlice.reducer;
