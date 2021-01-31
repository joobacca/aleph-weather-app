import React, { useState, useEffect, useCallback, useMemo } from 'https://esm.sh/react';
import WeatherData from './weatherData.tsx';
import { GeoLocationCoords, GeoLocationPosition } from '../types/index.ts';

const defaultGeoLocationCoords: GeoLocationCoords = {
  latitude: -1,
  longitude: -1,
};


const Weather = () => {
  const [location, setLocation] = useState(defaultGeoLocationCoords);
  const handleGeoInformation = useCallback((pos: GeoLocationPosition) => {
    if (!pos) return;
    setLocation(pos.coords);
  }, []);
  const handleGeoError = useCallback((err: Error) => console.info(err), []);

  const showWeather = useMemo(() => {
    return (location.latitude !== -1 && location.longitude !== -1);
  }, [location.latitude, location.longitude]);

  const locationDisplay = useMemo(() => {
    const { latitude, longitude } = location;
    if (!showWeather) {
      return `Please enable your location permission or choose a location to show the weather data.`;
    }
    return `Your location - Latitude: ${latitude}, Longitude: ${longitude}
    `;
  }, [location]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(handleGeoInformation, handleGeoError);
    } else {
      console.log('GeoLocation not supported by your browser');
    }
  }, []);

  return (
    <div>
      {locationDisplay}
      {showWeather && <WeatherData data={location} />}
    </div>
  );
};

export default Weather;
