import {createSlice} from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: "Nicosia",
        bg: "https://c0.wallpaperflare.com/preview/793/466/457/sun-summer-blue-sky.jpg",
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload
        },

        setBg: (state, action) => {
            switch (action.payload) {
                case "clear sky":
                    state.bg = "https://c0.wallpaperflare.com/preview/793/466/457/sun-summer-blue-sky.jpg"
                    break;
                case "few clouds":
                case "scattered clouds":
                case "broken clouds":
                case "overcast clouds":
                case "clouds":
                case "cloudy":
                case "partly cloudy":
                    state.bg = "https://wallpaper.dog/large/965988.jpg"
                    break;
                case "rain":
                case "shower rain":
                case "light rain":
                case "moderate rain":
                    state.bg = "https://wallpaper.dog/large/965984.jpg"
                    break;
                case "snow":
                    state.bg = "https://www.wallpaperup.com/uploads/wallpapers/2014/09/08/438356/c8da79cb98bd22fbcd6b9c61e1d6415f.jpg"
                    break;
                case "thunderstorm":
                    state.bg = "https://i.pinimg.com/originals/d3/e3/8f/d3e38f77801c4ffe2f75384a3c3f2be9.jpg"
                    break;
                case "mist":
                    state.bg = "https://i.hizliresim.com/ovr0tqp.jpg"
                    break;
                default:
                    state.bg = "https://c0.wallpaperflare.com/preview/793/466/457/sun-summer-blue-sky.jpg"
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {setCity, setBg} = weatherSlice.actions

export default weatherSlice.reducer