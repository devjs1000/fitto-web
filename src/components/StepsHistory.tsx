import {
  FaChevronCircleRight,
} from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
const StepsHistory = () => {
  return (
    <div className=" pt-12 h-[500px] bg-[rgba(0,0,0,.4)] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center px-4 py-2">
          <select
            placeholder="Steps"
            className="bg-transparent ml-[-4px] text-gray-300 font-sans font-light"
          >
            <option className="font-light">Steps</option>
          </select>
          <a
            href="#"
            className="text-gray-300 font-sans font-light flex items-center  gap-4"
          >
            History <FaChevronCircleRight className={"text-green-500"} />
          </a>
        </div>
        <p className="font-md text-gray-400 text-[12px] ml-4">
          Avg. 14,523 steps per day
        </p>
      </div>
      <div className="overflow-x-auto whitespace-nowrap  flex">
        {Array(15)
          .fill(WeekData)
          .map((WData, i) => {
            return <WData key={i} />;
          })}
      </div>
      <div className="flex z-[1000] bg-[rgba(255,255,255,.2)] rounded-full gap-2 w-auto mx-auto justify-between items-center px-4 py-2 mb-10 ">
        <div className="flex items-center gap-2">
          <IoTriangle className="text-green-500 text-xs mx-auto" />
          <p className="text-green-500 font-sans font-light text-xs">30.9%</p>
        </div>
        <p className="text-gray-400 font-sans font-light text-xs">
          higher than last week
        </p>
      </div>
    </div>
  );
};

export default StepsHistory;

const WeekData = () => {
  return (
    <div className="flex gap-4 px-4 py-2">
      <BarData title="M" />
      <BarData title="T" />
      <BarData title="W" />
      <BarData title="T" />
      <BarData title="F" />
      <BarData title="S" />
      <BarData title="S" />
    </div>
  );
};

const BarData = ({ title }: { title: string }) => {
  const percentage = Math.round(Math.random() * 100) + 100;
  return (
    <div className=" flex flex-col justify-end items-center mx-2">
      <p className="text-gray-400 font-sans text-xs mb-2 font-light">
        {percentage / 10}k
      </p>
      <div
        className="bg-gradient-to-r from-green-500 to-green-600  w-[22px]  rounded-lg"
        style={{
          height: `${percentage * 1.1}px`,
        }}
      />
      <p className=" text-center  text-xs text-gray-400 font-sans font-light">
        {title}
      </p>
    </div>
  );
};
