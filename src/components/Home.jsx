import { BsGithub, BsLinkedin } from "react-icons/bs";
import profileImg from "../assets/0-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import ParticlesBg from "particles-bg";

const Home = () => {
  return (
    <>
      <div className="w-full px-5 md:px-20 lg:px-52" id="home">
        <div className="md:hidden">
          <ParticlesBg type="cobweb" bg={true} num={30} color="#000000" />
        </div>
        <div className="hidden md:block">
          <ParticlesBg type="cobweb" bg={true} num={120} color="#000000" />
        </div>
        <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 py-[64px] h-screen">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-gray-950 font-bold flex flex-col gap-1">
              <span className="text-3xl">Halo,</span>
              <span className="text-3xl">Saya Eka Priyanthara</span>
            </h1>
            <h2 className="text-2xl font-bold lg:text-2xl text-gray-700 mt-2">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 mt-5 font-bold">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <button className="font-bold text-base border border-blue-500 rounded-3xl px-4 py-2 mt-5 bg-blue-500 text-white">
              <a href="#contact">Hubungi Saya</a>
            </button>
            <div className="flex gap-3 mt-5">
              <a
                href="https://github.com/priyanthraeka"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub size={40} className="w-10 h-10" />
              </a>
              <a href="#" rel="noreferrer" target="_blank">
                <BsLinkedin size={40} className="w-10 h-10" color="#0077b5" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center md:items-center">
            <Tilt>
              <img
                src={profileImg}
                alt="Profile Photo"
                className="w-[300px] md:w-[480px] bg-blue-500 rounded-full"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
