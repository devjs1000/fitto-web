import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <Link to="/profile">
      <img
        src={"https://picsum.photos/200/300"}
        className="border-2 w-[30px] h-[30px] rounded-md border-green-600"
      />
    </Link>
  );
};

export default Profile;
