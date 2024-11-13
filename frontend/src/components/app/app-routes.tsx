import { createBrowserRouter } from "react-router-dom";
import B16 from "../pages/b16";
import { Box, Hexagon } from "lucide-react";
import { ForwardRefExoticComponent, ReactNode } from "react";
import B64 from "../pages/b64";

export const routeItems: Array<{
    title: string, path: string, icon: ForwardRefExoticComponent<any>, element: ReactNode
}> = [{
    title: "Base16",
    icon: Hexagon,
    path: "/b16",
    element: <B16 />,
}, {
    title: "Base64",
    icon: Box,
    path: "/b64",
    element: <B64 />,
}]

export const router = createBrowserRouter(routeItems)