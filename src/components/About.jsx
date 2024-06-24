import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-6">
                <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">
                    About Food King
                </h1>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                    <img
                        src={pic1}
                        alt="Our Story"
                        className="w-full h-64 object-cover rounded mb-6"
                    />
                    <p className="text-gray-700 leading-loose mb-6">
                        Welcome to Food King, where we believe that food is not
                        just a necessity but an experience to be cherished.
                        Established in 2021, our journey began with a simple
                        mission: to bring delicious, high-quality food to your
                        doorstep. Our passion for culinary excellence and
                        commitment to customer satisfaction has made us a
                        beloved choice among food enthusiasts.
                    </p>

                    <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc list-inside mb-6 text-gray-700">
                        <li className="mb-2">
                            <strong>Quality:</strong> We source the freshest
                            ingredients to ensure that every meal is a delight.
                        </li>
                        <li className="mb-2">
                            <strong>Innovation:</strong> Our chefs are
                            constantly experimenting with new recipes to bring
                            you unique and exciting flavors.
                        </li>
                        <li className="mb-2">
                            <strong>Customer Satisfaction:</strong> Your
                            happiness is our priority, and we strive to provide
                            exceptional service.
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold mb-4">
                        Meet Our Team
                    </h2>
                    <img
                        src={pic2}
                        alt="Our Team"
                        className="w-full h-64 object-cover rounded mb-6"
                    />
                    <p className="text-gray-700 leading-loose">
                        Our team is a group of passionate food lovers, talented
                        chefs, and dedicated service professionals. We work
                        together to ensure that every order is prepared with
                        care and delivered with a smile. Thank you for choosing
                        Food King. We look forward to serving you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
