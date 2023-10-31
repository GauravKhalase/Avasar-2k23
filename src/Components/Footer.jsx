import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#d9d9d9]">
      <div className="max-w-[90%] flex flex-col justify-center items-center mx-auto pt-8 pb-10 gap-6">
        <div className="flex flex-row justify-between item-center text-black font-semibold gap-10">
          <div className="flex flex-col justify-center items-center text-[12px]">
            <div className="font-bold">MAIL</div>
            <div>mahajan.hitesh3404gmail.com</div>
            <div>ashishviveksingh@gmail.com</div>
          </div>
          <div className="flex flex-col justify-center items-center text-[12px]">
            <div className="font-bold">CONTACT NO.</div>
            <div>+ 91 90283 80245</div>
            <div>+ 91 86691 15801</div>
          </div>
        </div>
        <div className="w-[100%] h-[1px] mx-auto bg-black"></div>
        <div className=" flex flex-col justify-center items-cente text-black font-semibold gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-[15px] tracking-wide">
              Design By :{" "}
              <span className="font-bold uppercase">Diksha Mahajan</span>
            </div>
            <div className="text-[15px] tracking-wider ">
              Develop By :{" "}
              <span className="font-bold uppercase">Gaurav Khalase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer