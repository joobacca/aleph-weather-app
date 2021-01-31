import { useState, useEffect, useMemo } from 'https://esm.sh/react';
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { useDeno } from "https://deno.land/x/aleph/mod.ts";
import { GeoLocationCoords } from "../types/index.ts";

const API_URL = "https://api.openweathermap.org/data/2.5/weather"

const useWeather = ({ latitude, longitude }: GeoLocationCoords, API_KEY: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState({});

  // const API_KEY = useDeno(() => config());

  useEffect(() => {
    console.log(API_KEY)
  }, [API_KEY]);

  const WEATHER_API = useMemo(() => `${API_URL}?lat=${latitude}&long=${longitude}&appid=${API_KEY}`, [latitude, longitude, API_KEY, API_URL]);



  // useEffect(() => {
  //   setLoading(true);
  //   fetch(WEATHER_API)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, []);

  return { weather, loading, error };
}

export default useWeather;
