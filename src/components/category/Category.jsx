import PropsType from "prop-types"
import { useNavigate } from "react-router-dom"

const Category = (props) => {
    const { category } = props
    const navigate = useNavigate()
    return (
        <div className="category flex flex-col items-start">
            {category.map((item, index) => (
                <div
                    onClick={() => navigate(`/${item.link}`)}
                    key={index}
                    className="category__link w-full py-2 ps-2 ms-[-8px] rounded hover:bg-slate-100 flex cursor-pointer"
                >
                    <span className="text-center leading-6 font-[Poppins] text-sm text-black">
                        {item.title}
                    </span>
                </div>
            ))}
        </div>
    )
}

Category.propsType = {
    category: PropsType.array.isRequired,
}

export default Category
