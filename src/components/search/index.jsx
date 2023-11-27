import React, { useState, useRef } from "react"
import { SearchIcon } from "../icon"
import { useNavigate } from "react-router-dom"

const data = [
    {
        id: 1,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__1.jpg",
        name: "iPhone 15 Series",
    },
    {
        id: 2,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-13c_21__1.png",
        name: "Xiaomi Redmi 13C",
    },
    {
        id: 3,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__1.jpg",
        name: "iPhone 15 Series",
    },
    {
        id: 4,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-13c_21__1.png",
        name: "Xiaomi Redmi 13C",
    },
    {
        id: 5,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__1.jpg",
        name: "iPhone 15 Series",
    },
    {
        id: 6,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-13c_21__1.png",
        name: "Xiaomi Redmi 13C",
    },
    {
        id: 7,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__1.jpg",
        name: "iPhone 15 Series",
    },
    {
        id: 8,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-13c_21__1.png",
        name: "Xiaomi Redmi 13C",
    },
    {
        id: 9,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__1.jpg",
        name: "iPhone 15 Series",
    },
    {
        id: 10,
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:40:0/q:100/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-13c_21__1.png",
        name: "Xiaomi Redmi 13C",
    },
]

const Search = () => {
    const ref = useRef(null)
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const handleClickSearch = (id) => navigate(`/product/${id}`)
    const handleOnChange = (e) => {
        setValue(e.target.value)
        setIsOpen(true)
    }
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div className="relative">
            <form
                className="search-form-header h-[100%] w-[243px] flex ps-5 pe-3 py-[7px] justify-center items-center rounded gap-2"
                action=""
            >
                <input
                    type="text"
                    ref={ref}
                    placeholder="What are you looking for?"
                    name="search"
                    value={value}
                    onChange={handleOnChange}
                    onClick={toggle}
                    onBlur={toggle}
                    className="flex-1 h-[100%] bg-transparent focus:outline-none text-xs"
                />
                <button type="submit" className="flex items-center">
                    <SearchIcon />
                </button>
            </form>

            {isOpen && (
                <div className="drop-down z-10 right-0 top-[140%] w-[400px] h-fit absolute text-sm bg-white border shadow-md">
                    {data
                        .filter((item) => {
                            const searchValue = value.toLowerCase()
                            const name = item.name.toLowerCase()
                            return (
                                searchValue && name.indexOf(searchValue, 0) > -1
                            )
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div key={item.id} onClick={() => handleClickSearch(item.id)} className="drop-down-row cursor-pointer py-2 px-4 border-b flex items-center justify-between hover:bg-gray-200">
                                <span>{item.name}</span>
                                <img
                                    src={item.img}
                                    className="w-[40px] h-[40px] object-contain"
                                />
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default Search
