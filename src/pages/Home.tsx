import HomeAppSheet from "../components/HomeAppSheet";
import NavBar from "../components/NavBar";
import Progress from "../components/Progress";
import StepsHistory from "../components/StepsHistory";

const Home = () => {
  return (
    <div className="bg-transparent">
      <NavBar />
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-700 via-green-900 to-zinc-800">
        {/* <Progress /> */}
        <StepsHistory />
      </div>
      <HomeAppSheet />
    </div>
  );
};

export default Home;
