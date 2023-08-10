import { createSlice } from "@reduxjs/toolkit";

/**회원 정보를 관리하는 Slice */
const myInfoSlice = createSlice({
    name: "myInfoSlice",
    initialState: {
        name: "",
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        }
    },
});

export default myInfoSlice;
export const { setName } = myInfoSlice.actions;
