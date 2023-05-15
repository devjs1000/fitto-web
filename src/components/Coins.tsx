import { SiLitecoin } from "react-icons/si";
const Coins = () => {
  return (
    <div className="bg-[rgba(255,255,255,.2)] flex justify-between space-x-2 pr-2  rounded-full items-center">
      <SiLitecoin className="text-2xl text-white bg-black rounded-full" />
      <p
      className="text-white font-md text-xs"
      >1012</p>
    </div>
  );
};

export default Coins;
