import { useState } from "react";
import { BsPencil } from "react-icons/bs";

const Profile = () => {
  const [selected, setSelected] = useState(0);
  const handleSelected = (index: number) => {
    return () => {
      setSelected(index);
    };
  };
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="bg-green-600 w-full h-[250px]  relative flex  flex-col justify-end items-center">
        <div className="absolute -bottom-[80px] flex items-center justify-center flex-col">
          <img
            src={"https://picsum.photos/200/300"}
            className="border-2 w-[70px] h-[70px] rounded-lg border-green-600 bg-white"
          />
          <p className="text-white text-lg font-bold">Adish Mehata</p>
          <p className="text-zinc-500 text-sm">@adishmehata</p>
        </div>
      </div>
      <BsPencil className="absolute right-10 top-[280px]  text-white text-2xl" />
      <div className="mt-[100px] flex items-center justify-between border border-zinc-700 rounded-xl m-4">
        <div
          onClick={handleSelected(0)}
          className=" flex flex-col p-4  border-l border-zinc-700  rounded-lg items-center justify-center relative"
        >
          {selected == 0 && (
            <div className="absolute w-[35px] mx-auto h-[2px] bg-green-600 -top-3" />
          )}
          <h1
            className="text-2xl font-bold mt-5 "
            style={{
              color: selected == 0 ? "#10B981" : "#fff",
            }}
          >
            12
          </h1>
          <p className="text-zinc-500 text-sm ">followers</p>
        </div>
        <div
          onClick={handleSelected(1)}
          className=" flex flex-col p-4  border   border-zinc-700 items-center justify-center relative"
        >
          {selected == 1 && (
            <div className="absolute w-[35px] mx-auto h-[2px] bg-green-600 -top-3" />
          )}
          <h1
            className=" text-2xl font-bold mt-5 "
            style={{
              color: selected == 1 ? "#10B981" : "#fff",
            }}
          >
            LEVEL 2
          </h1>
          <p className="text-zinc-500 text-sm ">since 4 days</p>
        </div>
        <div
          onClick={handleSelected(2)}
          className=" flex flex-col p-4  border-r border-zinc-700  rounded-lg items-center relative "
        >
          {selected == 2 && (
            <div className="absolute w-[35px] mx-auto h-[2px] bg-green-600 -top-3" />
          )}
          <h1
            className=" text-2xl font-bold mt-5 "
            style={{
              color: selected == 2 ? "#10B981" : "#fff",
            }}
          >
            2
          </h1>
          <p className="text-zinc-500 text-sm ">following</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
