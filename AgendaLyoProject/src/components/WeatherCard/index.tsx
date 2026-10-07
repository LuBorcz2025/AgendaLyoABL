import { useEffect, useState } from "react";
import { fetchWeather, backgroundFor, describe, type Weather, type WeatherCondition } from "../../service/weater";
import {
    MapPin,
    Sun,
    CloudSun,
    Cloud,
    CloudFog,
    CloudDrizzle,
    CloudRain,
    CloudSnow,
    CloudLightning,
} from "lucide-react";
import './index.css';

type Props = { city: string };

function WeatherIcon({ condition }: { condition: WeatherCondition }) {
    const props = {
        size: 52,
        strokeWidth: 1.6,
    };

    switch (condition) {
        case "clear":
            return <Sun {...props} />;
        case "partly-cloudy":
            return <CloudSun {...props} />;
        case "cloudy":
            return <Cloud {...props} />;
        case "fog":
            return <CloudFog {...props} />;
        case "drizzle":
            return <CloudDrizzle {...props} />;
        case "rain":
            return <CloudRain {...props} />;
        case "snow":
            return <CloudSnow {...props} />;
        case "storm":
            return <CloudLightning {...props} />;
        default:
            return <Cloud {...props} />;
    }
}

function WeatherCard({ city }: Props) {
    const [weather, setWeather] = useState<Weather | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const loadWeather = () => {
            setError(null);
            
            fetchWeather(city, controller.signal)
                .then(setWeather)
                .catch((e) => {
                    if (e.name !== "AbortError") {
                        setError(e.message);
                    }
                });
        };

        loadWeather();

        const interval = setInterval(() => {
            loadWeather();
        }, 1 * 60 * 1000);

        return () => {
            controller.abort();
            clearInterval(interval);
        };
    }, [city]);

    if (error) return <article className="weather-card weather-card--mild">{error}</article>;
    if (!weather) return <article className="weather-card weather-card--mild">Carregando...</article>;

    const description = describe(weather.code);
    const now = new Date();
    const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "long", timeZone: weather.timezone }).format(now);
    const hour = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: weather.timezone }).format(now);

    return (
        <article className={`weather-card weather-card--${backgroundFor(weather.temp)}`}>
            <div className="weather-main">
                <span className="weather-city">
                    <MapPin size={22} strokeWidth={2} />
                    {weather.city}{weather.region ? `, ${weather.region}` : ""}
                </span>
                <div className="weather-reading">
                    <span className="weather-icon"><WeatherIcon condition={description.condition} /></span>
                    <span className="weather-temp">{weather.temp}°C</span>
                </div>
            </div>

            <div className="weather-meta">
                <strong>Clima</strong>
                <span>{weekday}, {hour}</span>
                <span>{description.text}</span>
            </div>
        </article>
    );
}

export default WeatherCard;