export const WeatherCard = (props: any) => {
  const { wdata } = props;

  return (
    <div>
      <div>{wdata.main.temp}</div>
      <div>{wdata.weather[0].description}</div>
      <div>{new Date(wdata.dt * 1000).toString()}</div>
      <div>{new Date(wdata.sys.sunset * 1000).toLocaleTimeString()}</div>
      <div>{new Date(wdata.sys.sunrise * 1000).toLocaleTimeString()}</div>
      <div>{wdata.name}</div>
      <div> {wdata.weather[0].main}</div>
      <div> {wdata.sys.country}</div>
      <div> {wdata.wind.speed}</div>
      <img
        src={`http://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`}
        alt=""
      />
    </div>
  );
};
