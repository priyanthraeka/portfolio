import Card from "./Card";

const Education = () => {
  return (
    <Card id="education">
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-4xl font-bold ">Pendidikan</h1>
        <div className="flex flex-col lg:flex-row w-full mt-20 border border-black rounded-md shadow-sm shadow-slate-500">
          <img
            src="https://et2o98r3gkt.exactdn.com/wp-content/uploads/2019/09/shutterstock_501077824.jpg?strip=all&lossy=1&quality=75&ssl=1"
            alt=""
            width={500}
            className="rounded-t-md lg:rounded-s-md lg:rounded-tr-none"
          />
          <div className="flex flex-col justify-start items-start gap-2 p-5">
            <h1 className="text-2xl font-bold">
              Institut Teknologi dan Bisnis STIKOM Bali
            </h1>
            <p className="text-base font-bold text-gray-700">Sistem Komputer</p>
            <p className="text-lg font-bold text-green-600">
              2018-2022 | Selesai
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Education;
