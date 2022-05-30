import "./assets/style/style.css";
import styled from "styled-components";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";

const AppStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;

  &&:before {
    content: '';
    background: url('https://raw.githubusercontent.com/fireclint/weather-app-react/main/src/assets/sunset.jpg') no-repeat center center/cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const App = () => {
    return (
        <AppStyle>
            <Search/>
            <Weather/>
        </AppStyle>
    );
}

export default App;
