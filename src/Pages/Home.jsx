import React from "react";
import Timer from "../Components/Timer";
import ImageOne from "../Assets/1.png";
import ImageTwo from "../Assets/2.png";
import Imagesix from "../Assets/6.png";
import ImageThree from "../Assets/5.png";
import SUCFSA from "../Assets/SUCFSA.jpg";
import SUCSSA from "../Assets/SUCSSA.jpg";
import SUAISA from "../Assets/SUAISA.jpg";
import SUCTSA from "../Assets/SUCTSA.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="w-screefull">
      <img className="w-full absolute " src={ImageOne} alt="" />

      <Navbar />
      <div className="relative text-white text-center mt-[130px]">
        <div className="text-7xl  font-Krona flex flex-col gap-4 my-8">
          <p className="tracking-wide">2023</p>
          <p className="tracking-widest">AVSAR</p>
        </div>
        <div>
          <p className="font-Krona text-sm px-10">
            NASHIK'S BIGGEST TECH FEST EVENT EVER
          </p>
          <button className="text-black font-Kanit bg-white px-10 py-2.5 rounded-full mt-6 mb-28">
            GET TICKETS
          </button>
        </div>
      </div>

      <div>
        <img className="absolute w-full h-[500px] z-0" src={ImageTwo} alt="" />
        <Timer />
        <div className="relative text-white flex flex-col justify-center items-center px-8 py-14 ">
          <p className="text-3xl font-bold tracking-widest my-4">ABOUT</p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            aspernatur, labore enim libero iste aut consequuntur consectetur
            minus sint provident perferendis veniam ex quod atque tempora
            sapiente! Repellendus tenetur quidem, ea culpa porro necessitatibus
            iure doloremque sint quasi provident veritatis accusamus, quisquam
            velit officia fugiat, obcaecati illum voluptate amet sunt? iure
            doloremque sint quasi provident veritatis accusamus, quisquam velit
            officia fugiat, obcaecati illum voluptate amet sunt?
          </p>
        </div>
      </div>
      <div>
        <img
          className="absolute w-full h-[376px] z-20"
          src={ImageThree}
          alt=""
        />
        <div className="relative z-30 text-white flex flex-col justify-center items-center px-8 py-10">
          <p className="text-3xl text-center font-bold tracking-widest uppercase my-4 px-10">
            Get Entry Pass
          </p>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            aspernatur, labore enim libero iste aut consequuntur consectetur
            minus sint provident perferendis veniam ex quod atque tempora.
          </p>
          <button className="text-black font-Kanit bg-white px-10 py-2.5 rounded-full mt-10 mb-2">
            GET TICKETS
          </button>
        </div>
      </div>
      <div>
        <img className="absolute w-full h-[290px]" src={Imagesix} alt="" />
        <div className="relative text-white px-8 py-10">
          <p className="text-3xl text-center font-bold tracking-widest uppercase my-6 px-10">
            Organized By
          </p>
          <div className="w-[100%] flex flex-row justify-between items-center py-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={SUAISA}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <div className="text-[12px] font-bold">SUAISA</div>
                <div className="text-[6px]">DEPARTMENT OF AIML</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={SUCFSA}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <div className="text-[12px] font-bold">SUCFSA</div>
                <div className="text-[6px]">DEPARTMENT OF CSF</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <img
                className="w-[56px] h-[56px] rounded-full"
                src={SUCSSA}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <div className="text-[12px] font-bold">SUCSSA</div>
                <div className="text-[6px]">DEPARTMENT OF CSE</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={SUCTSA}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <div className="text-[12px] font-bold">SUCTSA</div>
                <div className="text-[6px]">DEPARTMENT OF CTIS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
