import Card from "./Card";
import profileImg from "../assets/0-removebg-preview.png";
import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <Card id="about">
      <div className="flex flex-col justify-start items-center pt-[64px]">
        <h1 className="text-4xl font-bold ">Tentang Saya</h1>
        <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 w-full mt-20 gap-10">
          <div className="flex items-center justify-center md:items-center">
            <Tilt>
              <img
                src={profileImg}
                alt="Profile Photo"
                className="w-[300px] bg-blue-500 rounded-3xl"
              />
            </Tilt>
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <h2 className="font-bold text-xl">Saya I Putu Eka Priyanthara</h2>
            <p className="font-bold text-lg text-gray-700">
              Frontend Developer
            </p>
            <p className="text-sm text-gray-600">
              I am a Full-Stack developer based in Pune, India. I am an
              Information Technology undergraduate from SPPU. I am very
              passionate about improving my coding skills & developing
              applications & websites. I build WebApps and Websites using MERN
              Stack. Working for myself to improve my skills. Love to build
              Full-Stack clones.
            </p>
            <p className="text-sm flex">
              <span className="font-bold text-blue-500 w-[55px]">Surel</span>
              <span className="font-bold text-blue-500 me-2">:</span>
              <span className="text-gray-600">priyantharaeka067@gmail.com</span>
            </p>
            <p className="text-sm flex">
              <span className="font-bold text-blue-500 w-[55px]">Tempat</span>
              <span className="font-bold text-blue-500 me-2">:</span>
              <span className="text-gray-600">Denpasar, Indonesia</span>
            </p>
            <button className="font-bold text-sm border border-blue-500 rounded-3xl px-4 py-2 mt-5 bg-blue-500 text-white">
              <a
                href="https://drive.google.com/file/d/1d9yMP0OWviz3B_SZr4f8FVDxIrX9noFQ/view?usp=drive_link"
                rel="noreferrer"
                target="_blank"
              >
                Resume Saya
              </a>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default About;
