import React, { useState } from "react";
import {
    AiFillDelete,
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiOutlinePlus,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";
import pizzas from "../pizza-data"
import { NavLink } from "react-router-dom";
const Allpizza = () => {

    return (
        <div>
            <Wrapper>
                <div className="container px-10 sm:px-8 md:px-6 lg:px-10 py-14 mx-auto">

                    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                        {pizzas.map((curElem) => {
                            return <Pizza key={curElem.name} curElem={curElem} />;
                        })}
                    </div>

                </div>
            </Wrapper>
        </div>
    );
};

export default Allpizza;

const Pizza = ({ curElem }) => {
    const [varient, setVarient] = useState("small");
    const [quantity, setQuantity] = useState(1);



    const { id, name, varients, prices, category, image, description } = curElem;
    return (
        <div className=" bg-white cursor-pointer px-3 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <NavLink to={`/pizza/${id}`}>
                <div className="relative">
                    <img className="w-full h-48 rounded-xl" src={image} alt="Colors" />
                    <p className="absolute top-0 bg-orange-500 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${prices[0][varient] * quantity}</p>
                </div>
            </NavLink>
            <div className="flex flex-col space-y-4">
                <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">{name}</h1>


                <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold text-black">Varients</div>
                    <select
                        value={varient}
                        className="bg-gray-100 cursor-pointer p-2"
                        onChange={(e) => setVarient(e.target.value)}
                    >
                        {varients.map((varient) => (
                            <option key={varient}>{varient}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold text-black">Quantity</div>
                    <select
                        value={quantity}
                        className="bg-gray-100 cursor-pointer p-2"
                        onChange={(e) => setQuantity(e.target.value)}
                    >
                        {[...Array(10).keys()].map((v, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <button className="bg-gradient-to-r lowercase from-secondary to-primary btn glass text-white hover:!bg-secondary w-full">
                    Add to cart
                </button>
            </div>
        </div>


    );
};
const Wrapper = styled.section`
            figure {
                width: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            transition: all 0.5s linear;
            &::after {
                content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: RGB(239, 68, 68, 0.5);
            transition: all 0.2s linear;
            cursor: pointer;
		}
            &:hover::after {
                width: 100%;
		}
            &:hover img {
                transform: scale(1.3);
		}
            img {
                height: 10rem;
            transition: all 0.2s linear;
		}
	}
            `;