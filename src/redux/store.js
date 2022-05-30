import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {weatherApi} from "./weather/weatherQuery";
import weatherSlice from "./weather/weatherSlice";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        weather: weatherSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
})

setupListeners(store.dispatch)