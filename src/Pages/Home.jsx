import React from "react";
import Timer from "../Components/Timer";
import ImageOne from "../Assets/1.png"
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="">
      
      <img className=" absolute " src={ImageOne} alt="" />
      <Navbar/>
      <div className="relative text-white text-center mt-[100px]">
        <div className="text-7xl  font-Krona flex flex-col gap-4 my-8">
          <p className="tracking-wide">2023</p>
          <p className="tracking-widest">AVSAR</p>
        </div>
        <div>
          <p className="font-Krona text-lg mx-4">NASHIK'S BIGGEST TECH FEST EVENT EVER</p>
          <button className="text-black font-Kanit bg-white px-11 py-3 rounded-full my-8">GET TICKETS</button>
        </div>
        <Timer />
        <div>
          <p>ABOUT</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            aspernatur, labore enim libero iste aut consequuntur consectetur
            minus sint provident perferendis veniam ex quod atque tempora
            sapiente! Repellendus tenetur quidem, ea culpa porro necessitatibus
            iure doloremque sint quasi provident veritatis accusamus, quisquam
            velit officia fugiat, obcaecati illum voluptate amet sunt?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates sapiente enim soluta corporis, dolorum, voluptate perspiciatis laboriosam harum sequi tenetur. Asperiores nemo omnis eaque maxime. Possimus accusantium nam esse labore debitis adipisci quos accusamus! A culpa facilis maxime provident nam possimus at optio incidunt iure accusantium, officiis harum. Vitae, nisi soluta modi temporibus aliquam consequuntur. Dolor, ipsa amet. Possimus veritatis sed tempora voluptate facere perferendis consequuntur repudiandae dolor, accusantium quaerat rem accusamus quod in cumque numquam expedita, dolorem deleniti aspernatur eum id. Praesentium iste itaque omnis sapiente quo veniam sequi? Perspiciatis labore dolores totam, placeat corporis ipsam consequatur error.
          </p>
        </div>
        <div>
          <p>GET ENTRY PASS</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint
            labore aliquam voluptate, a corrupti eveniet autem! Non modi itaque
            libero culpa distinctio provident in.
          </p>
          <button>GET TICKETS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
