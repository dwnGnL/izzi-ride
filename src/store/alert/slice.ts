import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TAlert = {
    opened: boolean
    message: null | string
}

const initialState: TAlert = {
    opened: false,
    message: null
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        openAlert: (state, actions: PayloadAction<string>) => {
            state.opened = true
            state.message = actions.payload
        },
        closeAlert: state => {
            state.opened = false
        }
    },
})

export const { openAlert, closeAlert } = alertSlice.actions

export default alertSlice.reducer
