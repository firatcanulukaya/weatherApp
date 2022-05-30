import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`}),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: (name) => `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&q=${name}`,
        }),
    }),
})

export const {useGetWeatherQuery} = weatherApi