import React from "react"
import ProductSlide from "./components/ProductSlide"
import ProductInfo from "./components/ProductInfo"
import { useParams } from "react-router-dom"
import { useGetProductByIdQuery } from "~/features/products/productApiSlice"

const SingleProduct = () => {
    const { id: productId } = useParams()
    const {
        data: product,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetProductByIdQuery(productId)

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = (
            <section className="my-8 flex flex-row items-center gap-10">
                <div className="h-[600px] flex flex-row-reverse relative gap-x-8 gap-y-4 justify-end">
                    <ProductSlide />
                </div>
                <div className="">
                    <ProductInfo {...product} />
                </div>
            </section>
        )
    } else if(isError) {
        content = <p>{error}</p>
    }

    return (
        <>
            {content}
        </>
    )
}

export default SingleProduct
