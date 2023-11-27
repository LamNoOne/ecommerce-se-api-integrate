import React from "react"
import { Link } from "react-router-dom"
const OrderedProduct = (props) => {
    const { id, orderStatus, paymentForm, products } = props
    const { name: nameStatus } = orderStatus
    const { name: namePayment } = paymentForm
    const numberProducts = products.length
    const productImageUrl = products[0]?.product?.imageUrl
    const productName = products[0].product?.name
    const totalPrice = Array.isArray(products)
        ? products.reduce(
              (acc, product) => acc + product?.quantity * product?.price,
              0
          )
        : 0
    return (
        <div className="border rounded-lg shadow-md px-4 pt-4 pb-2">
            <div className="flex flex-row items-center">
                <div className="w-[110px] h-[110px] object-contain">
                    <img src={productImageUrl} />
                </div>
                <div className="order-short-info flex flex-col ps-4 gap-2 items-start">
                    <h2 className="name-product-order">{productName}</h2>
                    <span className="vat-fee w-[120px] text-xs px-1 py-1 rounded text-[#ff0000] bg-[#fff1f0]">
                        VAT Exported
                    </span>
                    <span className="status-order w-[120px] text-sm px-1 py-1 rounded text-green-700 bg-[#ebf8f2]">
                        {nameStatus}
                    </span>
                    <span className="price-order text-sm text-[#ff0000]">
                        {numberProducts > 1
                            ? `${numberProducts} items`
                            : `${numberProducts} item`}
                    </span>
                    <span className="price-order text-base text-[#ff0000]">
                        {totalPrice}
                    </span>
                </div>
            </div>
            <div className="flex justify-end gap-4">
                <Link
                    to={`${id}`}
                    className="flex items-center justify-center rounded text-sm px-2 py-1 border border-[#ff0000] text-[#ff0000]"
                >
                    Watch Bill
                </Link>
                <Link
                    to={`${id}`}
                    className="flex items-center justify-center rounded text-sm px-2 py-1 border border-[#ff0000] text-[#ff0000]"
                >
                    Go Detail
                </Link>
            </div>
        </div>
    )
}

export default OrderedProduct
