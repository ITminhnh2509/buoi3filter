import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Container, Input } from 'reactstrap';
export default function Weatherapi() {
  const apikey = '2b45ec7a264d478ec065ef567009d60e';
  const [text, setText] = useState("");
  const [city, setCity] = useState("Ho Chi Minh");
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  const dayName = days[d.getDay()];
  const dsunseth = (value) => {
    let nd = new Date(value * 1000);
    let ghours = nd.getHours()
    return ghours.toLocaleString();
  }
  const dsunsetm = (value) => {
    let nd = new Date(value * 1000);
    let ghours = nd.getMinutes()
    return ghours.toLocaleString();
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
  const [data, setData] = useState();
  const fetchData = () => {
    axios({
      method: 'get',
      url: url
    })
      .then(function (res) {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  useEffect(() => {
    fetchData();
  }, [city])
  return (
    data &&
    <>
      <Container className='container-weather'>
        <Input className='input-weather' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCity(text)
            setText("");
          }
        }} />
        <div className='box-card-weather text-white my-4'>
          <h1 className='text-center text-capitalize'>{data.name}</h1>
          <div className='flex-weather'>
            <div className='text-left'>

              <p className='fs-16'><i class="fa-solid fa-location-dot  text-capitalize"></i>{data.name}</p>
              <p className='fs-16'><i class="fa-solid fa-calendar-days  text-capitalize"></i>DayTime | {dayName}</p>
              <h2><i class="fa-solid fa-temperature-three-quarters"></i>{data.main.temp}&deg;C | {(data.main.temp * 9 / 5 + 32).toFixed(2)}&deg;F</h2>
              <h2 className='text-capitalize'>{data.weather[0].description}</h2>
              <p className='fs-16 my-0'>City: {data.name}</p>
              <p className='fs-16 my-0'>Temp: {(data.main.temp + 273.15).toFixed(2)}</p>
              <p className='fs-16 my-0'>Country: {data.sys.country}</p>
              <p className='fs-16 my-0'>Sunrise: {dsunseth(data.sys.sunrise)}:{dsunsetm(data.sys.sunrise)} AM</p>
              <p>Sunset: {dsunseth(data.sys.sunset)}:{dsunsetm(data.sys.sunset)} PM</p>
            </div>
            <div>
              <img className='img-weather' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
            </div>

          </div>
        </div>
      </Container>
    </>
  )
}
