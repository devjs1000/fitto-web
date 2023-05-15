import React from "react";
import { IoLocation } from "react-icons/io5";

const Stats = () => {
  return (
    <div className="absolute bottom-0 flex justify-between w-full px-20 py-10 bg-gradient-to-b from-transparent to-green-900 ">
      <Stat
        icon={<IoLocation className="text-md text-gray-400" />}
        value="2.3"
        description="km"
      />
      <Stat
        icon={<IoLocation className="text-md text-green-400" />}
        value="2.3"
        description="km"
      />
      <Stat
        icon={<IoLocation className="text-md text-red-400" />}
        value="2.3"
        description="km"
      />
    </div>
  );
};

export default Stats;

const Stat = ({ icon, value, description }: StatProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      {icon}
      <h1 className="text-4xl font-bold text-white font-sans">{value}</h1>
      <p className="text-gray-400 font-sans text-xs">{description}</p>
    </div>
  );
};

interface StatProps {
  icon: React.ReactNode;
  value: string;
  description: string;
}
