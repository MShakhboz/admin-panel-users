import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import { AdminUsersPage, NotFound } from "../pages";
import { MainLayout } from "../layouts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* main */}
            <Route path={"/"} element={<MainLayout />}>
                <Route index element={<AdminUsersPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

const MainRouter = () => {
    return <RouterProvider router={router} />;
};

export default MainRouter;
