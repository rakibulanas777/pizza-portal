// eslint-disable-next-line no-unused-vars
import React from "react";
import PrimaryButton from "./shared/PrimaryButton";
import video from "../assets/video.png";
import banner from "../assets/pizza.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="mx-auto my-auto py-[20vh] container  px-10 sm:px-8 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-8 items-center">
          <div className="left-part flex flex-col space-y-6">
            <div className="text-2xl md:text-3xl lg:text-4xl font-medium">
              Providing Quality <span className="text-red-700">Healthcare</span>{" "}
              for a <span className=" text-orange-500">Brighter </span>
              and <span className=" text-orange-500">Healthy </span> Future
            </div>
            <div className="text-md md:text-base lg:text-xl pb-5">
              Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.
            </div>

            <div className="flex items-center space-x-10">
              <PrimaryButton>appointments</PrimaryButton>
              <div className="flex items-center cursor-pointer space-x-3">
                <img src={video} alt="" className="cursor-pointer" />
                <div className="text-xl hidden sm:block font-medium">
                  watch video
                </div>
              </div>
            </div>
          </div>
          <div className="right-part mx-auto py-4">
            <img
              src={banner}
              alt=""
              className="cursor-pointer h-96 lg:h-[27rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
