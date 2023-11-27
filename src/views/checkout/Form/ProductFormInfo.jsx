import React from "react"
import images from "~/assets/images"
import { useGetCartByUserIdQuery } from "~/features/cart/cartApiSlice"
//props or useSelector to get the state

const ProductFormInfo = ({ carts }) => {
    let content
    if (typeof carts == "object") {
        content = (
            <>
                {Array.isArray(carts) && carts.map((cart, index) => (
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-6">
                            <img
                                className="w-[54px] h-[54px] p-1 object-contain"
                                src={cart?.product?.imageUrl}
                            />
                            <h3 className="text-base">{cart?.product?.name}</h3>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="quantity">
                                    {cart?.quantity}
                                </span>
                                <span className="">&times;</span>
                                <span className="price">
                                    {cart?.product?.price}
                                </span>
                            </div>
                            <p className="text-base">
                                {cart?.quantity * cart?.product?.price}
                            </p>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return <>{content}</>
}

export default ProductFormInfo
