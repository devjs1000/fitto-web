import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Stats from "./Stats";

const Progress = () => {
  const percentage = 40;
  return (
    <div className="relative  h-[500px] w-full flex items-center justify-center ">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
          trailColor: "#166534",
          backgroundColor: "#22c55e",
          pathTransition: "none",
          pathColor: "#22c55e",
        })}
        className="w-[240px] h-[240px] absolute top-[80px]"
      />
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
          trailColor: "#3f3f46",
          backgroundColor: "#3f3f46",
          pathTransition: "none",
          pathColor: "#fff",
        })}
        className="w-[200px] h-[200px] absolute top-[100px]"
      />
      <div className="bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-900 h-[170px] flex justify-center items-center w-[170px] rounded-full absolute top-[115px]">
        <div>
          <h1 className="text-4xl font-bold text-white font-sans">21,123</h1>
          <p className="text-gray-500 font-sans">of 5,000 steps</p>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Progress;
