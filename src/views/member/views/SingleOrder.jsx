import React from "react"
import SideBar from "../components/SideBar"
import { FaAngleDoubleLeft } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { BsFillBoxSeamFill } from "react-icons/bs"
import { GiConfirmed } from "react-icons/gi"
import { TbTruckDelivery } from "react-icons/tb"
import { FaBoxOpen } from "react-icons/fa"
import { AiOutlineDash } from "react-icons/ai"
import PaymentBox from "../components/PaymentBox"
import MemberInfo from "../components/MemberInfo"
import SupportInfo from "../components/SupportInfo"
import { useGetOrderByIdQuery } from "~/features/order/orderApiSlice"
import OrderedProductDetail from "../components/OrderedProductDetail"

// This is a order page which can contain multiple ordered items
const SingleOrder = () => {
    // get order by id => display order status
    let { id: orderId } = useParams()
    const {
        data: orders,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetOrderByIdQuery(orderId)

    let userInfo
    let orderedProducts
    let productContent
    let orderStatus
    let totalCost
    if (isLoading) {
        productContent = <p>Loading...</p>
    } else if (isSuccess) {
        orderedProducts = orders?.metadata?.order
        orderStatus = orderedProducts?.orderStatus?.name
        productContent = Array.isArray(orderedProducts.products) ? (
            orderedProducts.products.map((item) => (
                <OrderedProductDetail {...item} />
            ))
        ) : (
            <></>
        )

        totalCost = orderedProducts?.products?.reduce(
            (acc, cur) => acc + cur.quantity * cur.price,
            0
        )

        userInfo = {
            name: `${orderedProducts?.user?.lastName} ${orderedProducts?.user?.firstName}`,
            phone: `${orderedProducts?.phoneNumber}`,
            address: `${orderedProducts?.shipAddress}`,
        }
        // more logic in here
        // orderStatus
        // totalCost
        // Discount = 500
        // required payemnry = price
        // paid => incomplete
    } else if (isError) {
        productContent = <p>{error}</p>
    }

    const navigate = useNavigate()
    return (
        <section className="my-4 flex">
            <div className="min-w-[260px]">
                <SideBar />
            </div>
            <div className="flex flex-col gap-6 ms-6 w-full">
                <div className="flex items-center header-order-detail">
                    <button
                        className="back"
                        onClick={() => navigate("/member/order")}
                    >
                        <FaAngleDoubleLeft size={32} />
                    </button>
                    <h1 className="text-2xl text-center font-semibold ms-[45%]">
                        Order Detail
                    </h1>
                </div>
                <div className="order-status flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-sm">
                            Product Code:
                            <span className="font-semibold">
                                &nbsp;WN0301425802
                            </span>
                        </p>
                        <span className="status-order text-center w-[120px] text-sm px-1 py-1 rounded text-green-700 bg-[#ebf8f2]">
                            {orderStatus}
                        </span>
                    </div>
                    <p className="date-order text-sm">1/11/2023 14:24</p>
                </div>

                {productContent}

                <div className="status-cotainer flex justify-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <BsFillBoxSeamFill size={35} color="red" />
                        <h5 className="flex text-center text-xs mt-2 text-[#ff0000]">
                            Đặt hàng <br />
                            thành công
                        </h5>
                    </div>
                    <AiOutlineDash
                        size={35}
                        color={orderStatus === "Pending" ? "black" : "red"}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <GiConfirmed
                            size={35}
                            color={orderStatus === "Pending" ? "black" : "red"}
                        />
                        <h5
                            className={`flex text-center text-xs mt-2 ${
                                orderStatus === "Pending"
                                    ? "text-black"
                                    : "text-[#ff0000]"
                            }`}
                        >
                            Đã <br />
                            xác nhận
                        </h5>
                    </div>
                    <AiOutlineDash
                        size={35}
                        color={orderStatus === "Pending" ? "black" : "red"}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <TbTruckDelivery
                            size={35}
                            color={orderStatus === "Pending" ? "black" : "red"}
                        />
                        <h5
                            className={`flex text-center text-xs mt-2 ${
                                orderStatus === "Pending"
                                    ? "text-black"
                                    : "text-[#ff0000]"
                            }`}
                        >
                            Đang <br />
                            vận chuyển
                        </h5>
                    </div>
                    <AiOutlineDash
                        size={35}
                        color={orderStatus === "Pending" ? "black" : "red"}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <FaBoxOpen
                            size={35}
                            color={orderStatus === "Pending" ? "black" : "red"}
                        />
                        <h5
                            className={`flex text-center text-xs mt-2 ${
                                orderStatus === "Pending"
                                    ? "text-black"
                                    : "text-[#ff0000]"
                            }`}
                        >
                            Đã <br />
                            giao hàng
                        </h5>
                    </div>
                </div>
                <PaymentBox total={totalCost} orderStatus={orderStatus} />
                <MemberInfo {...userInfo} />
                <SupportInfo />
            </div>
        </section>
    )
}

export default SingleOrder
