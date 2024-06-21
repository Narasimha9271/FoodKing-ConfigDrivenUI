import fetch from "node-fetch";

export default async (req, res) => {
    const { lat, lng } = req.query;
    const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    console.log(`Fetching data from: ${apiUrl}`);

    try {
        const response = await fetch(apiUrl);
        console.log("Response status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(
                `Error fetching data: ${response.statusText}`,
                errorText
            );
            res.status(response.status).json({
                error: response.statusText,
                details: errorText,
            });
            return;
        }

        const data = await response.json();
        console.log("Data fetched successfully");
        res.status(200).json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
};
