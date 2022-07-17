export const WeatherCard = (props: any) => {
  const { wdata } = props;
  return (
    <div>
      <div>{wdata.main.temp}</div>
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
