import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullName: '',
    nationID: '',
    createdAt: '',
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationID) {
                return {
                    payload: {
                        fullName,
                        nationID,
                        createdAt: new Date().toISOString(),
                    },
                };
            },
            reducer(state, action) {
                const { fullName, nationID, createdAt } = action.payload;
                state.fullName = fullName;
                state.nationID = nationID;
                state.createdAt = createdAt;
            },
        },
        updateName(state, action) {
            state.fullName = action.payload.fullName;
        },
    },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
