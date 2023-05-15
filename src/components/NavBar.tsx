import Coins from "./Coins";
import Notification from "./Notification";
import Profile from "./Profile";

const NavBar = () => {
  return (
    <div className="fixed z-[1000] top-0 w-full flex justify-between items-center p-4">
      <Profile />
      <div className="flex space-x-4">
        <Coins />
        <Notification />
      </div>
    </div>
  );
};

export default NavBar;
