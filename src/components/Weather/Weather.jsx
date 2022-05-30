import {useSelector, useDispatch} from "react-redux";
import {setBg} from "../../redux/weather/weatherSlice";
import {useGetWeatherQuery} from "../../redux/weather/weatherQuery";
import styled from "styled-components";
import {useEffect} from "react";

const WeatherContainer = styled.div`
  height: 700px;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Top = styled.div`
  width: 100%;
  margin: 1rem auto;
  max-width: 700px;
`;
const Description = styled.div`
  color: #e0e0e0;
  mix-blend-mode: luminosity;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  gap: 2rem;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

const UtilText = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const CountryFlag = styled.img`
  width: 64px;
  border-radius: 2px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;

  i {
    font-size: 2rem;
  }
`;

const Weather = () => {
    const dispatch = useDispatch();
    const city = useSelector(state => state.weather.city);
    const {data, loading, error} = useGetWeatherQuery(city);

    useEffect(() => {
        dispatch(setBg(data?.weather[0].description));
    }, [data])

    if (loading) return <UtilText>Loading...</UtilText>;
    if (error) return <UtilText>Error :(</UtilText>;
    return (
        <WeatherContainer>
            <Top>
                <div className="location">
                    <Span>
                        <CountryFlag src={`https://countryflagsapi.com/png/${data?.sys.country || data?.name}`}
                                     alt="Country Flag"/>
                        <p>{data?.name}</p>

                        <img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="Icon"/>

                    </Span>
                </div>
                <div className="temp bold">
                    <h1>{data?.main.temp.toFixed()}°C</h1>
                </div>
                <Description>
                    <p>{data?.weather[0].description}</p>
                </Description>
            </Top>

            <Bottom>
                <div className="feels">
                    {data?.main.feels_like.toFixed()}°C
                    <p>Feels Like</p>
                </div>
                <div className="humidity">
                    {data?.main.humidity}%
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    {data?.wind.speed}m/s
                    <p>Wind Speed</p>
                </div>

            </Bottom>
        </WeatherContainer>
    )
}

export default Weather;