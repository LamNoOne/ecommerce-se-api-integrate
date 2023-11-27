import React, { useState } from "react"
import ReactStars from "react-stars"
import { FiHeart } from "react-icons/fi"
import { useNavigate, useLocation } from "react-router-dom"
import formatCurrency from "~/config/CustomCost"

const CardProduct = (props) => {
    const [click, setClick] = useState(false)
    const navigate = useNavigate()
    let location = useLocation()
    const { id, name, price, stockQuantity, imageUrl } = props
    return (
        <section className="product-item cursor-pointer flex flex-col relative border border-[#F5F5F5] rounded shadow-sm overflow-hidden">
            <div
                onClick={() =>
                    navigate(
                        location.pathname === "/" ? `product/${id}` : `${id}`
                    )
                }
                className="product-img-container p-3"
            >
                <div className="product-img flex justify-center items-center">
                    <img
                        src={imageUrl}
                        alt="product"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="product-info pt-4 ps-[10px]">
                <div className="flex flex-col gap-2 items-start">
                    <h1 className="text-sm font-semibold font-[Poppins] text-black">
                        {name}
                    </h1>
                    <div className="flex items-center justify-start gap-3">
                        <span className="text-base font-medium font-[Poppins] text-[#DB4444]">{`${formatCurrency(
                            price
                        )}`}</span>
                        <span className="text-base font-medium font-[Poppins] line-through text-[#000] opacity-50"></span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex justify-start items-center gap-2 -mt-2">
                            <ReactStars
                                count={5}
                                size={20}
                                value={4}
                                edit={false}
                                color2={"#FFAD33"}
                            />
                            <span className="flex text-sm font-semibold font-[Poppins] text-black opacity-50 pt-[2px]">
                                {`(${stockQuantity})`}
                            </span>
                        </div>

                        <div className="w-[30px] h-[30px] bg-transparent">
                            <FiHeart
                                className="heart"
                                size={20}
                                color="red"
                                fill={`${click ? "red" : "none"}`}
                                onClick={() => setClick(!click)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardProduct
