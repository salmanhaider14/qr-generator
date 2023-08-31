import React, { useState } from "react";
import QRCode from "react-qr-code";
import { AiFillFileAdd } from "react-icons/ai";

const App = () => {
  const [value, setValue] = useState();
  const Generate = (e) => {
    if (value) setValue(null);
    if (typeof e.target.value == "string") {
      setValue(e.target.value);
    } else {
      setValue(e.target.files[0]);
    }
    setTimeout(() => setValue(""), 600000);
  };

  return (
    <div
      className="relative p-5 min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient( 109.6deg,  rgba(204,228,247,1) 11.2%, rgba(237,246,250,1) 100.2% )",
      }}
    >
      <h1 className="text-center text-6xl font-bold pt-7">Generate QR Code </h1>
      <p className="text-center py-4 text-lg">
        The internet's best QR Code Generator..Generate any QR Code in
        seconds...
      </p>

      <div className="flex flex-col gap-4 justify-center items-center  w-[100%]">
        {value && (
          <>
            <QRCode value={value} className="my-5" />{" "}
            <p className="bg-blue-600 p-3 text-white font-semibold rounded">
              Expiring in a minute
            </p>
          </>
        )}

        <input
          type="text"
          placeholder="Enter your information in text....e.g. phone number or whatever"
          onChange={(e) => Generate(e)}
          className="w-[50%]  h-[64px] rounded-xl p-3 focus:outline-blue-500 shadow-lg text-lg outline-4"
        />
        {/* <div className="flex gap-3 items-center">
          <h1 className="text-2xl">Add File</h1>{" "}
          <AiFillFileAdd color="orange" size={40} />
        </div>

        <input
          type="file"
          placeholder="Enter your data....e.g. phone number or whatever"
          onChange={(e) => Generate(e)}
          className="w-[50%] border-2 border-gray-500 h-[64px] rounded-xl p-3 focus:outline-blue-600 shadow-lg text-lg"
        /> */}
      </div>
    </div>
  );
};

export default App;
