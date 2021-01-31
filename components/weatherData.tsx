import React from 'https://esm.sh/react';
import useWeather from '../hooks/useWeather.tsx';
import { GeoLocationCoords } from '../types/index.ts';
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { useDeno } from "https://deno.land/x/aleph/mod.ts";

const WeatherData = ({ data }: { data: GeoLocationCoords }) => {
  const API_KEY = useDeno(() => config()['API_KEY']);
  console.log(API_KEY)
  const { weather } = useWeather(data, API_KEY);
  return <div>hi</div>;
};

export default WeatherData;
