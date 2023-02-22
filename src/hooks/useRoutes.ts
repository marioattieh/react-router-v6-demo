import pages from "../pages";

import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/useAppProvider";

const useRoutes = () => {
    const { role } = useAppContext();
    const location = useLocation();

    return pages
        .filter((page) => {
            if (!page.roles?.includes(role) || page?.disabled) return false;
            page.isSelected = !!page.path && location.pathname.includes(page.path);
            return true;
        })
        .sort((pageA, pageB) => (pageA.order || -1) - (pageB.order || -1));
};

export default useRoutes;
