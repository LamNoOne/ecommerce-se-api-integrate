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
    Products,
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
                { path: "/product", element: <Products /> },
                { path: "/laptop", element: <Laptop /> },
                { path: "/studio", element: <Studio /> },
                { path: "/smartphone", element: <SmartPhone /> },
                { path: "/camera", element: <Camera /> },
                { path: "/accessory", element: <Accessories /> },
                { path: "/pc", element: <PC /> },
                { path: "/tv", element: <Tivi /> },
                { path: "/member", element: <HomeMember /> },
                { path: "/user/wishlist", element: <WishList /> },
                { path: "/user/cart", element: <Cart /> },
                {
                    path: "/user/checkout",
                    element: (
                        <Loader>
                            <CheckOut />
                        </Loader>
                    ),
                },
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
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/smartphone",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/laptop",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/studio",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/camera",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/accessory",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/pc",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
        },
        {
            path: "/tv",
            element: <DefaultLayout />,
            children: [
                {
                    path: ":id",
                    element: (
                        <Loader>
                            <SingleProduct />
                        </Loader>
                    ),
                },
            ],
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
