import { Fragment } from "react"
import {
    Route,
    BrowserRouter,
    Routes,
    redirect as Redirect,
    Navigate,
} from "react-router-dom"
import { DefaultLayout } from "./layout"
import { publicRoutes, privateRoutes } from "./routes"
import Router from "./routes"

import { store } from "./app/store"
import { Provider } from "react-redux"

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    )
}

export default App
