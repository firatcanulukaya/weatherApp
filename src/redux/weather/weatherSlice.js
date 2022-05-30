import {createSlice} from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: "Nicosia",
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {setCity} = weatherSlice.actions

export default weatherSlice.reducer