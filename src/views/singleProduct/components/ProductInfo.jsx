import React from "react"
import ReactStars from "react-stars"
import style from "~/style/index"
import { useState } from "react"
import { Line, Button } from "~/components"
import images from "~/assets/images"
import { Delivery, Return, WishlistIcon } from "~/components/icon"
import { useNavigate, useParams } from "react-router-dom"
import { useAddCartMutation } from "~/features/cart/cartApiSlice"
// useparams to get product id
// useSeletor to get individual product info
// not recieve props from outside

const ProductInfo = (props) => {
    const [addCart, { isLoading }] = useAddCartMutation()
    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(1)
    const [sizeType, setSizeType] = useState("")
    const [type, setType] = useState("")
    const [wishlistActive, setWishListActive] = useState(false)
    const {
        id: productId,
        name,
        rating,
        totalRating,
        price,
        description,
        stockQuantity,
    } = props?.metadata?.product
    const handleQuantityOnChange = (value) => setQuantity(value)
    const increment = () => setQuantity((a) => a + 1)
    const decrement = () => {
        if (quantity !== 0) {
            setQuantity((a) => a - 1)
        }
    }

    const handleAddWishList = () => {
        wishlistActive ? setWishListActive(false) : setWishListActive(true)
        // handle dispacth add product to wishlist or remove from wishlist
    }

    const handleOnClick = async () => {
        // not store on sesssion
        // sessionStorage.setItem('orderQuantity', quantity)
        // sessionStorage.setItem('orderId', productId)
        // call api create product cart when click buy
        // navigate to checkout
        // at checkout, get product from cart => info => order
        // at order => add multiple product
        // useNavigate to Checkout

        if (!isLoading) {
            try {
                await addCart({ productId, quantity }).unwrap()
                navigate('/user/checkout')
            } catch (error) {
                console.log('Failed to add to cart', error)
            }
        }
    }
    // Neu color khac thi gia co khac khong
    const colors = ["White", "Black"]
    const sizes = ["XS", "S", "M", "L", "XL"]
    return (
        <div className="product-info-container">
            <div className="product-info">
                <h1 className="font-[Inter] text-2xl leading-6 font-semibold tracking-[0.72px] mb-2">
                    {name || "Havic HV G-92 Gamepad"}
                </h1>
                <div className="star-container flex items-center gap-4 mb-2">
                    <div className="flex justify-start items-center gap-2">
                        <ReactStars
                            count={5}
                            size={24}
                            value={Number(rating) || 5}
                            edit={false}
                            color2={"#FFAD33"}
                        />
                        <span className="flex text-sm font-semibold font-[Poppins] text-black opacity-50 pt-[2px]">
                            {`(${totalRating || "150"})`}
                        </span>
                    </div>
                    <div className="text-[rgba(0,0,0,0.5)]">|</div>
                    <div className="">
                        {stockQuantity ? "In Stock" : "Out Of Stock"}
                    </div>
                </div>
                <span className="font-[Inter] text-2xl leading-6 font-normal tracking-[0.72px] mb-2">
                    ${`${price || "192"}.00`}
                </span>
                <p className="font-[Poppins] text-sm leading-[21px] mt-4">
                    {description ||
                        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}
                </p>
                <div className="mt-4 mb-4">
                    <Line style={style.lineStyleCart} />
                </div>
            </div>
            <div className="colour-container">
                <div className="flex items-center gap-5">
                    <h3 className="">Colour:</h3>
                    <div className="color-btn flex gap-4">
                        {colors.map((color) => (
                            <button
                                type="button"
                                className={`w-[146px] h-[47px] flex items-center justify-evenly rounded border-[2px] ${
                                    type === color
                                        ? "border-[#d70018]"
                                        : "border-[#ccc]"
                                }`}
                                key={color}
                                onClick={() => setType(color)}
                            >
                                <div className="flex items-center">
                                    <img
                                        className="w-[30px] h-[30px] object-contain"
                                        src={images.game_1}
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <h5 className="text-sm font-light">
                                        {color}
                                    </h5>
                                    <span className="text-sm font-light">
                                        {price || "$192.00"}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="size-container mt-6">
                <div className="flex items-center gap-6">
                    <h3 className="">Size:</h3>
                    <div className="flex items-center gap-4">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                value={size}
                                onClick={(e) => setSizeType(e.target.value)}
                                className={`w-[32px] h-[32px] text-sm font-medium flex items-center justify-center p-[8px] border-[2px] rounded-md
                                ${
                                    sizeType === size
                                        ? "border-[#db44444] bg-[#db4444]"
                                        : "border-[rgba(0,0,0,0.5)"
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="button my-4 flex items-center gap-6">
                <div className="quantity-btn flex h-11">
                    <button
                        className="hover:bg-[#db4444] hover:border-[#db44444] flex items-center justify-center border-y-2 border-l-2 border-[#ccc] rounded-l w-[40px] px-2 py-[10px]"
                        onClick={() => decrement()}
                    >
                        <span className="text-xl">-</span>
                    </button>
                    <div className="">
                        <input
                            className="max-w-[44px] text-lg border-[2px] border-[#ccc] h-full outline-none text-center"
                            name="quantity"
                            value={quantity}
                            min="1"
                            max="100"
                            onChange={(e) =>
                                handleQuantityOnChange(e.target.value)
                            }
                        />
                    </div>
                    <button
                        className="hover:bg-[#db4444] hover:border-[#db44444] flex items-center justify-center border-y-2 border-r-2 border-[#ccc] rounded-r w-[40px] px-2 py-[10px]"
                        onClick={() => increment()}
                    >
                        <span className="text-xl">+</span>
                    </button>
                </div>
                <div className="buy-btn">
                    <Button
                        primary
                        medium
                        type="submit"
                        onClick={() => handleOnClick()}
                    >
                        <span className="text-base font-medium">Buy Now</span>
                    </Button>
                </div>
                <div className="wishlist">
                    <button
                        className={`w-[44px] h-[44px] flex items-center justify-center rounded border-[2px] border-[#ccc] ${
                            wishlistActive
                                ? "border-[#db4444] bg-[#db4444]"
                                : ""
                        }`}
                        onClick={() => handleAddWishList()}
                    >
                        <WishlistIcon />
                    </button>
                </div>
            </div>
            <div className="border-[2px] border-[#ccc]">
                <div className="flex items-center gap-4 justify-start ms-4 mt-4">
                    <div className="">
                        <Delivery />
                    </div>
                    <div className="flex flex-col gap-2 justify-between items-start">
                        <h3 className="text-base font-medium">Free Delivery</h3>
                        <p className="text-xs leading-[18px] font-medium">
                            Enter your postal code for Delivery Availability
                        </p>
                    </div>
                </div>
                <div className="my-4">
                    <Line style={style.lineStyleCart} />
                </div>
                <div className="flex items-center gap-4 justify-start ms-4 mb-4">
                    <div className="">
                        <Return />
                    </div>
                    <div className="flex flex-col gap-2 justify-between items-start">
                        <h3 className="text-base font-medium">Free Delivery</h3>
                        <p className="text-xs leading-[18px] font-medium">
                            Enter your postal code for Delivery Availability
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
