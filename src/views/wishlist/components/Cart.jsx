import { Button, WishlistProduct } from "~/components"
import CategoryRectangle from "~/components/icon/CategoryRectangle"

const Cart = (props) => {
    const { items, actionName, category = false } = props
    return (
        <div className="product-list relative">
            <div className="flex justify-between items-center mb-10 mt-20">
                <div className="name">
                    {!category ? (
                        <h1 className="text-[20px] leading-[26px]">
                            Wishlist({Array.isArray(items) ? items.length : 0})
                        </h1>
                    ) : (
                        <>
                            <div className="flex items-center gap-2">
                                <CategoryRectangle />
                                <h1 className="text-xl">Just For You</h1>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex justify-center items-center">
                    <Button outline large>
                        {actionName}
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-[16px] gap-y-[16px]">
                {items.map((item, index) =>
                    category ? (
                        <WishlistProduct view key={index} {...item} />
                    ) : (
                        <WishlistProduct key={index} {...item} />
                    )
                )}
            </div>
        </div>
    )
}

export default Cart
