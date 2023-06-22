import Card from "./Card";
import sticker from "../assets/message.png";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loadingImg from "../assets/loading.png";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [loading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://portfolio-5c896-default-rtdb.firebaseio.com/messages.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
          }),
        }
      );
      if (!response.ok) {
        toast.error("Gagal mengirim!");
        throw new Error("Something went wrong!");
      }
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      toast.success("Berhasil mengirim!");
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <>
      <ToastContainer className="fixed top-[64px] right-0" />
      <Card id="contact">
        <div className="w-11/12 m-auto">
          <h1 className="flex justify-center items-start text-3xl font-bold">
            Kontak
          </h1>
          <div className="flex justify-center items-center p-5 mt-20 rounded-xl shadow-sm shadow-slate-500 border border-gray-500">
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
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-black p-2 w-full rounded-md"
                  ref={emailRef}
                  required
                />
                <textarea
                  placeholder="Pesan"
                  cols="30"
                  rows="10"
                  className="border border-black p-2 w-full rounded-md"
                  ref={messageRef}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="font-bold text-base border rounded-3xl px-4 py-2 bg-blue-500 text-white disabled:bg-gray-500"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex gap-2 items-center">
                      <img
                        className="animate-spin"
                        src={loadingImg}
                        alt="Loading"
                        width={25}
                        height={25}
                      />
                      Mengirim...
                    </div>
                  ) : (
                    "Kirim"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Contact;
