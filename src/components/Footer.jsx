import Card from "./Card";
import {
  BsEnvelope,
  BsInstagram,
  BsTelephone,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#212121] w-full min-h-52">
      <Card>
        <div className="flex flex-col md:flex-row md:justify-between py-5 gap-20">
          <div className="text-white">
            <h1 className="text-2xl">Portofolio Eka</h1>
            <p className="text-base mt-3">
              Terimakasih telah mengunjungi website pribadi saya.
            </p>
          </div>
          <div className="text-white">
            <p className="text-2xl">Informasi Kontak</p>
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-base flex items-center gap-2">
                <BsTelephone size={18} />
                +6285175088570
              </p>
              <p className="text-base flex items-center gap-2">
                <BsEnvelope size={18} />
                priyantharaeka067@gmail.com
              </p>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://twitter.com/priyanthraeka"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/priyanthraeka/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Footer;
