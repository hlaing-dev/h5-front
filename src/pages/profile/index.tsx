import "./profile.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProfileFirst from "./components/ProfileFirst";
import ProfileSecond from "./components/ProfileSecond";
import { useGetUserQuery } from "./services/profileApi";

const index = () => {
  return (
    <>
      <div className="profile-bg"></div>
      <div className="text-white">
        <div className="">
          <div>
            <Navbar />
          </div>
          <div>
            <Header />
          </div>
          <div className="pb-[100px]">
            <ProfileFirst />
            <ProfileSecond />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
