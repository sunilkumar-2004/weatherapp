import TopButton from './components/TopButtons';
import Input from './components/input';
import TimeLocation from './components/TimeLocation';
import TempDetails from './components/TempDetails';
import Forecast from './components/Forecast';
import { useEffect, useState } from 'react';
import getFormattedWeatherData from './services/weatherService';

const App = () => {
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-6 sm:px-16 md:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      {/* Top Button Section */}
      <TopButton setQuery={setQuery} />

      {/* Search Input Section */}
      <Input setQuery={setQuery} setUnits={setUnits} />

      {/* Weather Data */}
      {weather && (
        <>
          <TimeLocation weather={weather} />
          <TempDetails weather={weather} units={units} />
          
          {/* Forecasts */}
          <div className="space-y-8 mt-8">
            <Forecast title="3 hour step forecast" data={weather.hourly} />
            <Forecast title="Daily forecast" data={weather.daily} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
