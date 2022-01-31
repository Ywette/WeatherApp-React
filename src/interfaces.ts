export interface cityDataProps {
  cod: number,
  coord: Geolocation,
  main: Temperatures,
  name: string,
  weather: [{
    description: string,
    icon: string,
    id: number,
    main: string,
  }]
}

export interface Geolocation {
  lon: number,
  lat: number
}

export interface Temperatures {
  temp: number,
  'feels_like': number,
  'temp_min': number,
  'temp_max': number,
  pressure: number
}

export interface ViewportProps {
  latitude: number,
  longitude: number,
  width: string,
  height: string,
  zoom: number,
}
