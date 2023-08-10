import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/loginSlice";
import myInfoSlice from "./Slices/myInfoSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";

/**각 Slice들에 있는 state와 이것들을 다루는 함수들을 하나의 리듀서로 묶어서 가져오고
 * 그렇게 가져온 reducer들을 모아서 store로 묶어줌.
 * -> 이 store는 Provider를 통해서 index.js에서 뿌려줌으로서 모든 컴포넌트에서 접근이 가능함.
 */

const reducers = combineReducers({
    myInfo: myInfoSlice.reducer,
    login: loginSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["teamManage", "login"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export default store;
