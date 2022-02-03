import { configureStore } from "@reduxjs/toolkit";

import { fetchApi } from "../service/fetchApi";

export const store=configureStore({
    reducer:{
        [fetchApi.reducerPath]: fetchApi.reducer
    }
})