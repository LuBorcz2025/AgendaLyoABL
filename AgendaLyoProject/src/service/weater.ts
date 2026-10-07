export type Weather = {
    city: string;
    region?: string;
    temp: number;
    code: number;
    timezone: string;
};

export type Background = "cold" | "mild" | "warm" | "hot";

export async function fetchWeather(city: string, signal?: AbortSignal): Promise<Weather> {
    // 1) cidade -> coordenadas
    const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=pt&format=json`,
        { signal }
    );

    if (!geoRes.ok) throw new Error("Não foi possível localizar a cidade");

    const place = (await geoRes.json()).results?.[0];
    if (!place) throw new Error(`Cidade não encontrada: ${city}`);
    console.log(place)

    // 2) coordenadas -> clima atual
    const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,weather_code&timezone=auto`,
        { signal }
    );
    if (!weatherRes.ok) throw new Error("Não foi possível obter o clima");

    const data = await weatherRes.json();
console.log(data)
    return {
        city: place.name,
        region: place.admin1,
        temp: Math.round(data.current.temperature_2m),
        code: data.current.weather_code,
        timezone: data.timezone ?? place.timezone,
    };
}

// o "if" que troca o background pela temperatura
export function backgroundFor(temp: number): Background {
    if (temp <= 10) return "cold";
    if (temp <= 20) return "mild";
    if (temp <= 28) return "warm";
    return "hot";
}

export type WeatherCondition =
    | "clear"
    | "partly-cloudy"
    | "cloudy"
    | "fog"
    | "drizzle"
    | "rain"
    | "snow"
    | "storm";

// códigos WMO usados pela Open-Meteo
export function describe(code: number): { text: string; condition: WeatherCondition } {
    if (code === 0) return { text: "Céu limpo", condition: "clear" };
    if (code === 1 || code === 2) return { text: "Predominantemente limpo", condition: "partly-cloudy" };
    if (code === 3) return { text: "Nublado", condition: "cloudy"  };
    if (code === 45 || code === 48) return { text: "Neblina", condition: "fog" };
    if (code >= 51 && code <= 57) return { text: "Garoa", condition: "drizzle" };
    if (code >= 61 && code <= 67) return { text: "Chuva", condition: "rain" };
    if (code >= 71 && code <= 77) return { text: "Neve", condition: "snow"};
    if (code >= 80 && code <= 82) return { text: "Pancadas de chuva", condition: "rain" };
    if (code >= 85 && code <= 86) return { text: "Pancadas de neve", condition: "snow" };
    if (code >= 95) return { text: "Tempestade", condition: "storm"  };
    return { text: "Indisponível",  condition: "cloudy" };
}