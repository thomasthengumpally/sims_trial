import React from 'react';
import Card from './components/card';
import { FaBook } from 'react-icons/fa';
//import Home from "./Home/page";
//import Link from "next/link";

export default function Home() {
  return (
    <div >
      <div >
      {/* Single Card */}
      <Card
        icon={<FaBook className="text-white w-6 h-6" />} // Icon
        text="Reports"                                    // Text content
      />
    </div>
    </div>
  );
}
