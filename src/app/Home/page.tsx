import React from "react";
import Card from "../components/card"; // Adjust the path based on your project structure
import { FaBook } from "react-icons/fa"; // Example icon from react-icons
import DateRangePicker from "../components/DateRangePicker";
const Home: React.FC = () => {
  return (
  <div>
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      {/* Single Card */}
      <Card
        icon={<FaBook className="text-white w-6 h-6" />} // Icon
        text="Reports"                                    // Text content
      />
    </div>
    <div >
      <DateRangePicker />
    </div>


    </div>
  );
};

export default Home;