import Card from "./Card";
import weddingImg from "../assets/wedding.png";
import { BsEye, BsCodeSlash } from "react-icons/bs";
const Projects = () => {
  return (
    <Card id="projects">
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-4xl font-bold ">Projects</h1>
        <div className="flex flex-wrap justify-center items-center w-full gap-10 mt-20">
          <div className="max-w-[720px] border border-black rounded-lg shadow-sm shadow-slate-500">
            <img
              src={weddingImg}
              alt="Wedding Website"
              width={720}
              height={628}
              className="rounded-t-md"
            />
            <div className="p-5">
              <h1 className="font-bold text-lg">Wedding Website</h1>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                ratione porro inventore, repellat accusamus eaque quam tempora
                adipisci quis cupiditate! Doloribus ratione maiores non
                recusandae harum ut voluptas, quam aspernatur?
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
      </div>
    </Card>
  );
};

export default Projects;
