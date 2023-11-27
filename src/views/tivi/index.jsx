import { Advertisement, Category, PageButton, CardProduct } from "~/components"
import { advertisement, category } from "~/components/variables"
import style from "~/style"
import {
    FaSortAmountDown,
    FaSortAmountDownAlt,
    FaPercent,
    FaEye,
} from "react-icons/fa"
import { useState, useEffect } from "react"
// import {products} from './data'
import { useGetAllProductQuery } from "~/features/products/productApiSlice"

const TV = () => {
    const [page, setPage] = useState(1)
    const [sortActive, setSortActive] = useState("")

    const {
        data: products,
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
    } = useGetAllProductQuery(page)
    console.log(products?.metadata?.products)

    if (isLoading) return <p>Loading Products...</p>

    const content = products?.metadata?.products.map((product) => (
        <CardProduct key={product.id} {...product} />
    ))

    const lastPage = () => setPage(products?.metadata?.totalPage)

    const firstPage = () => setPage(1)

    const pagesArray = Array(products?.metadata?.totalPage)
        .fill()
        .map((_, index) => index + 1)
    console.log(pagesArray)
    // useSelector to get product state
    // console.log(sortActive)

    const nav = (
        <nav className="nav-ex2 flex items-center gap-3">
            <button className="text-xl text-white w-[32px] h-[32px] rounded-lg bg-slate-500 disabled:bg-slate-300" onClick={firstPage} disabled={page === 1}>
                &lt;&lt;
            </button>
            {/* Removed isPreviousData from PageButton to keep button focus color instead */}
            {pagesArray.map((pg) => (
                <PageButton key={pg} pg={pg} setPage={setPage} />
            ))}
            <button className="text-xl text-white w-[32px] h-[32px] rounded-lg bg-slate-500 disabled:bg-slate-300"
                onClick={lastPage}
                disabled={page === products?.metadata?.totalPage}
            >
                &gt;&gt;
            </button>
        </nav>
    )

    const sort = {
        increment: [FaSortAmountDown, "Price High-Low"],
        decrement: [FaSortAmountDownAlt, "Price Low-High"],
        promotion: [FaPercent, "Hot Promotion"],
        view: [FaEye, "Most View"],
    }

    return (
        <div className="flex flex-col gap-16 mb-8">
            <section>
                <div className="top-home flex pt-10">
                    <div className="flex-1 category-menu">
                        <Category category={category} />
                    </div>
                    <div className={`ms-[56px] ${style.advertisememtStyle}`}>
                        <Advertisement advertisement={advertisement} />
                    </div>
                </div>
            </section>
            <section>
                <div className="sort">
                    <h1 className="sort-title mb-4">Sort by:</h1>
                    <div className="btn-sort flex gap-4">
                        {Object.entries(sort).map(([key, [Icon, title]]) => (
                            <button
                                onClick={() => setSortActive(key)}
                                key={key}
                                className={`sort-decrement flex items-center justify-around gap-3 px-2 rounded bg-[#f3f4f6] border ${
                                    key === sortActive
                                        ? "border-[#ff0000]"
                                        : "border-[#e5e7eb]"
                                } h-[34px]`}
                            >
                                <Icon
                                    color={`${key === sortActive ? "red" : ""}`}
                                />
                                <p
                                    className={`text-xs ${
                                        key === sortActive
                                            ? "text-[#ff0000]"
                                            : "text-[black]"
                                    }`}
                                >
                                    {title}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-5 gap-x-[10px] gap-y-[10px]">
                {/* {products.map((item, index) => (
                    <CardProduct key={index} {...item} />
                ))} */}
                {content}
            </div>
            {nav}
        </div>
    )
}

export default TV
