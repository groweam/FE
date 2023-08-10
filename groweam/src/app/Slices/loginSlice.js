import { createSlice } from "@reduxjs/toolkit";

/**로그인 상태를 관리하는 Slice */
const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        accessToken: "",
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
    },
});

export default loginSlice;
export const { setAccessToken } = loginSlice.actions;
