import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Add from "./pages/Add"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"/add",
        element:<Add page="add"/>,
    },
    {
        path:"/edit/:id",
        element:<Add page="edit"/>,
    }
])

export default router