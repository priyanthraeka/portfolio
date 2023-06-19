import Card from "./Card";
import profileImg from "../assets/0-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import { BsEnvelope, BsPinMap } from "react-icons/bs";

const About = () => {
  return (
    <Card id="about">
      <div className="flex flex-col justify-start items-center py-[64px]">
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
            <p className="text-base text-gray-600">
              Saya merupakan fresh graduate dari Institut Teknologi dan Bisnis
              STIKOM Bali dengan jurusan Sistem Komputer. Saya suka belajar hal
              baru tentang teknologi untuk pengembangkan skill serta memiliki
              minat dalam pemrograman dan sedang mencari kesempatan berkarir
              sebagai Frontend Web Developer.
            </p>
            <div className="flex justify-center items-center gap-2 text-base text-gray-600">
              <BsEnvelope size={18} />
              <span>priyantharaeka067@gmail.com</span>
            </div>
            <div className="flex justify-center items-center gap-2 text-base text-gray-600">
              <BsPinMap size={18} />
              <span>Denpasar, Bali</span>
            </div>
            <button className="font-bold text-sm border border-blue-500 rounded-3xl px-4 py-2 mt-5 bg-blue-500 text-white">
              <a
                href="https://drive.google.com/file/d/1d9yMP0OWviz3B_SZr4f8FVDxIrX9noFQ/view?usp=drive_link"
                rel="noreferrer"
                target="_blank"
              >
                Curriculum Vitae
              </a>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default About;
