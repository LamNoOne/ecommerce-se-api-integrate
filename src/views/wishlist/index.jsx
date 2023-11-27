import React from "react"
import Cart from "./components/Cart"
import { products } from "./components/variables/data"

const WishList = () => {
    return (
        <div className="flex flex-col gap-16 mb-20">
            <section className="wishlist-product">
                <Cart actionName="Move All To Bag" items={products} />
            </section>
            <section className="suggestion-product">
                <Cart actionName="See All" items={products} category/>
            </section>
        </div>
    )
}

export default WishList
