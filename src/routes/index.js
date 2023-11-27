import { useRoutes } from "react-router-dom"
import { Loader } from "~/components"
import { Authentication, DefaultLayout } from "~/layout"
import {
    Home,
    Login,
    Signup,
    WishList,
    Cart,
    SingleProduct,
    CheckOut,
    SmartPhone,
    HomeMember,
    Tivi,
    Camera,
    Laptop,
    Studio,
    Promotion,
    PC,
    Accessories,
    Order,
    SingleOrder,
    Warranty,
    Gift,
    Rank,
    Account,
    Support,
    Feedback,
} from "~/views"

export default function Router() {
    let element = useRoutes([
        {
            element: <DefaultLayout />,
            children: [
                {
                    path: "/",
                    element: (
                        <Loader>
                            <Home />
                        </Loader>
                    ),
                },
                { path: "/laptop", element: <Laptop /> },
                { path: "/studio", element: <Studio /> },
                { path: "/smartphone", element: <SmartPhone /> },
                { path: "/camera", element: <Camera /> },
                { path: "/accessories", element: <Accessories /> },
                { path: "/pc", element: <PC /> },
                { path: "/tivi", element: <Tivi /> },
                { path: "/promotion", element: <Promotion /> },
                { path: "/member", element: <HomeMember /> },
                { path: "/user/wishlist", element: <WishList /> },
                { path: "/user/cart", element: <Cart /> },
                { path: "/user/checkout", element: <CheckOut /> },
            ],
        },
        {
            path: "/member",
            element: <DefaultLayout />,
            children: [
                { path: "order", element: <Order /> },
                { path: "warranty", element: <Warranty /> },
                { path: "gift", element: <Gift /> },
                { path: "rank", element: <Rank /> },
                { path: "account", element: <Account /> },
                { path: "support", element: <Support /> },
                { path: "feedback", element: <Feedback /> },
                { path: "order/:id", element: <SingleOrder /> },
            ],
        },
        {
            path: "/product",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/smartphone",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/laptop",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/studio",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/camera",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/accessories",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/pc",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/tivi",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/promotion",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            element: <Authentication />,
            children: [
                { path: "/login", element: <Login /> },
                { path: "/signup", element: <Signup /> },
            ],
        },
    ])
    return element
}
