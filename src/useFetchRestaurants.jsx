import { useState, useEffect } from "react";

const useFetchRestaurants = (lat, lng) => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `/api/proxy?lat=${lat}&lng=${lng}`
                );
                const data = await response.json();

                const restaurantsData =
                    data?.data?.cards[1]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants || [];
                setRestaurants(restaurantsData);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchRestaurants();
    }, [lat, lng]);

    return { restaurants, loading, error };
};

export default useFetchRestaurants;
