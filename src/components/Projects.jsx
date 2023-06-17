import Card from "./Card";
import weddingImg from "../assets/wedding.png";
import { BsEye, BsCodeSlash } from "react-icons/bs";
const Projects = () => {
  return (
    <Card id="projects">
      <div className="flex flex-col justify-start items-center pt-[64px]">
        <h1 className="text-4xl font-bold ">Projects</h1>
        <div className="flex flex-wrap justify-center items-center w-full mt-20 gap-10 py-10">
          <div className="w-[720px] p-5 border border-black rounded-lg">
            <img
              src={weddingImg}
              alt="Wedding Website"
              width={720}
              height={628}
              className="rounded-lg"
            />
            <h1 className="font-bold text-lg mt-5">Wedding Website</h1>
            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              ratione porro inventore, repellat accusamus eaque quam tempora
              adipisci quis cupiditate! Doloribus ratione maiores non recusandae
              harum ut voluptas, quam aspernatur?
            </p>
            <div className="flex gap-2 mt-5">
              <button className="font-bold text-sm border border-blue-500 rounded-3xl px-4 py-2 bg-blue-500 text-white">
                <a
                  href="https://wedding-website-neon.vercel.app/dika-ewikk/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex"
                >
                  <BsEye size={20} /> <span className="ms-2">View</span>
                </a>
              </button>
              <button className="font-bold text-sm border border-blue-500 rounded-3xl px-4 py-2 bg-blue-500 text-white">
                <a
                  href="https://github.com/priyanthraeka/wedding-website"
                  rel="noreferrer"
                  target="_blank"
                  className="flex"
                >
                  <BsCodeSlash size={20} /> <span className="ms-2">Code</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
