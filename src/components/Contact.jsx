import Card from "./Card";
import sticker from "../assets/message.png";
import { useRef } from "react";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    fetch("https://portfolio-5c896-default-rtdb.firebaseio.com/messages.json", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      }),
    }).catch((error) => error);
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

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
            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col justify-center items-end gap-5 md:w-full lg:w-auto"
            >
              <input
                type="text"
                placeholder="Nama"
                className="border border-black p-2 w-full rounded-md"
                ref={nameRef}
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-black p-2 w-full rounded-md"
                ref={emailRef}
              />
              <textarea
                placeholder="Pesan"
                cols="30"
                rows="10"
                className="border border-black p-2 w-full rounded-md"
                ref={messageRef}
              ></textarea>
              <button
                type="submit"
                className="font-bold text-base border border-blue-500 rounded-3xl px-4 py-2 mt-3 bg-blue-500 text-white"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
