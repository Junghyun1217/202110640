import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import clearImage from './clear.jpg';
import rainImage from './rain2.jpg';
import snowImage from './snow.jpg';
import cloudsImage from './clouds.jpg';
import thunderImage from './thunder2.jpg';
import defaultImage from './mapp.jpg'; 

function App() {
  const API_KEY = "7e616611044e1dc090b2a34f13ba88a5";
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const getBackgroundImage = (weatherMain, weatherDescription) => {
    if (weatherMain === 'Rain') {
      return rainImage;
    } else if (weatherMain === 'Snow') {
      return snowImage;
    } else if (weatherMain === 'Mist') {
      return rainImage;
    }else if (weatherMain === 'Clouds') {
      return cloudsImage;
    } else if (weatherMain === 'Thunderstorm') { 
      return thunderImage;
    } else if (weatherMain === 'Clear' && weatherDescription.includes('clear')) {
      return clearImage;
    } else {
      return defaultImage;
    }
  };

  const searchWeather = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  useEffect(() => {
    const backgroundImage = getBackgroundImage(result.weather?.[0]?.main, result.weather?.[0]?.description);
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
  }, [result]);

  return (
    <AppWrap>
      <div className='appContentWrap'>
        <input
          placeholder='도시(영문)를 입력해주세요'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
          style={{ height: '20px', fontSize: '16px' }}
        />
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.name}</div>
            <div className="temperature">
              {Math.round(((result.main.temp - 273.15) * 10)) / 10}℃
            </div>
            <div className="sky">{result.weather[0].main}</div>
          </ResultWrap>
        )}
      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;




const ResultWrap = styled.div`  
  margin-top: 20px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .city {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .temperature {
    font-size: 36px;
    margin-bottom: 8px;
  }

  .sky {
    font-size: 20px;
  }
`;