import React from "react"
import ReactStars from "react-stars"
import PropsType from "prop-types"
import { Link } from "react-router-dom"
import { CartIcon, DeleteIcon, HeartIcon, ViewIcon } from "../icon"
import Button from "~/components/button"
import { useNavigate } from "react-router-dom"

const WishlistProduct = (props) => {
    const { _id, title, price, old_price, quantity, sale, image, totalRating, view=false } =
        props
        const navigate = useNavigate()
    return (
        <section className="flex flex-col relative border border-[#F5F5F5]">
            <div className="flex flex-col relative">
                <Link
                    to={`#${_id}`}
                    className="product-img-container pb-[30px] pt-[20px] px-[35px] bg-[#F7F7F7]"
                >
                    <div className="product-img">
                        <img
                            src={image}
                            alt="product"
                            className="w-full object-contain"
                        />
                    </div>
                </Link>
                <div className="add-cart absolute left-0 right-0 bottom-0">
                    <Button black full notRounded onClick={() => navigate('/')}>
                        <div className="icon-cart flex justify-center items-center gap-2">
                            <CartIcon width={32} height={32} color="white" />
                            <h3 className="text-base font-light">Add To Cart</h3>
                        </div>
                    </Button>
                </div>
            </div>
            <div className="absolute top-3 left-3 w-auto h-auto">
                <div className="bg-[#DB4444] py-1 px-3 flex items-center rounded">
                    <span className="text-xs text-center leading-[18px] font-[Poppins] text-[#FAFAFA]">{`-${sale}%`}</span>
                </div>
            </div>
            <div className="absolute top-3 right-3">
                <div className="flex flex-col gap-2 relative">
                    <button className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center">
                        {view ? <ViewIcon /> : <DeleteIcon />}
                    </button>
                </div>
            </div>
            <div className="product-info pt-4 ps-[16px]">
                <div className="flex flex-col gap-2 items-start">
                    <h1 className="text-base font-medium font-[Poppins] text-black">
                        {title}
                    </h1>
                    <div className="flex items-center justify-start gap-3">
                        <span className="text-base font-medium font-[Poppins] text-[#DB4444]">{`$${price}`}</span>
                        <span className="text-base font-medium font-[Poppins] line-through text-[#000] opacity-50">{`$${old_price}`}</span>
                    </div>
                    <div className="flex justify-start items-center gap-2 -mt-2">
                        <ReactStars
                            count={5}
                            size={24}
                            value={Number(totalRating)}
                            edit={false}
                            color2={"#FFAD33"}
                        />
                        <span className="flex text-sm font-semibold font-[Poppins] text-black opacity-50 pt-[2px]">
                            {`(${quantity})`}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

WishlistProduct.propsType = {
    _id: PropsType.oneOfType([PropsType.string, PropsType.number]).isRequired,
    title: PropsType.string.isRequired,
    price: PropsType.oneOfType([PropsType.string, PropsType.number]).isRequired,
    old_price: PropsType.oneOfType([PropsType.string, PropsType.number]),
    quantity: PropsType.oneOfType([PropsType.string, PropsType.number]),
    sale: PropsType.oneOfType([PropsType.string, PropsType.number]),
    image: PropsType.string.isRequired,
    totalRating: PropsType.oneOfType([PropsType.string, PropsType.number]),
}

export default WishlistProduct
