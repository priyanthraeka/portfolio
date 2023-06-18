import Card from "./Card";
import sticker from "../assets/message.png";

const Contact = () => {
  return (
    <Card id="contact">
      <div className="py-[64px] w-11/12 m-auto ">
        <h1 className="flex justify-center items-start text-3xl font-bold">
          Kontak
        </h1>
        <div className="flex justify-center items-center p-5 mt-20 rounded-xl shadow-sm shadow-slate-500">
          <div className="flex justify-around items-center w-full">
            <div className="hidden lg:block">
              <img src={sticker} alt="Stiker" width={380} className="p-5" />
            </div>
            <div className="flex flex-col justify-center items-end gap-2 md:w-full lg:w-auto">
              <input
                type="text"
                placeholder="Nama"
                className="border border-black p-2 w-full rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-black p-2 w-full rounded-md"
              />
              <textarea
                placeholder="Pesan"
                cols="30"
                rows="10"
                className="border border-black p-2 w-full rounded-md"
              ></textarea>
              <button className="font-bold text-base border border-blue-500 rounded-3xl px-4 py-2 mt-3 bg-blue-500 text-white">
                <a href="#">Kirim</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
