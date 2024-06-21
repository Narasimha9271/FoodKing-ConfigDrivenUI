import { useState } from "react";
import useFetchRestaurants from "./useFetchRestaurants";
import ConfigDrivenRestaurants from "./ConfigDrivenRestaurants";
import CitySelection from "./CitySelection";
import { ShimmerCard } from "./Shimmer";

const cities = [
    { name: "Mumbai", lat: 19.076, lng: 72.8777 },
    { name: "Hyderabad", lat: 17.4065, lng: 78.4772 },
    { name: "Banglore", lat: 12.9716, lng: 77.5946 },
    { name: "Delhi", lat: 28.7041, lng: 77.1025 },
    { name: "Proddatur", lat: 14.7526, lng: 78.5541 },
    { name: "Tadepalligudem", lat: 16.8073, lng: 81.5316 },
];

const App = () => {
    const [selectedCity, setSelectedCity] = useState(cities[0].name);
    const selectedCityData = cities.find((city) => city.name === selectedCity);
    const { restaurants, loading, error } = useFetchRestaurants(
        selectedCityData.lat,
        selectedCityData.lng
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl text-bold text-center mb-4 ml-14">
                Food King
            </h1>
            <CitySelection
                cities={cities}
                selectedCity={selectedCity}
                onCityChange={setSelectedCity}
            />
            {loading ? (
                <div className="flex flex-wrap justify-center">
                    {[...Array(8)].map((_, index) => (
                        <ShimmerCard key={index} />
                    ))}
                </div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <ConfigDrivenRestaurants restaurants={restaurants} />
            )}
        </div>
    );
};

export default App;
