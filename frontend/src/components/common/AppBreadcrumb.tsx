import React, { ReactElement, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import routes from '../../routes.tsx';

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';

interface RouteType {
    path: string;
    name: string;
    element: JSX.Element;
}


interface BreadcrumbType {
    pathname: string;
    name: string;
    active: boolean;
}

const AppBreadcrumb = (): ReactElement => {
    const currentLocation = useLocation().pathname;

    const getRouteName = (pathname: string, routes: RouteType[]): string | false => {
        const currentRoute = routes.find((route) => route.path === pathname);
        return currentRoute ? currentRoute.name : false;
    };

    const getBreadcrumbs = (location: string): BreadcrumbType[] => {
        const breadcrumbs: BreadcrumbType[] = [];
        location.split('/').reduce((prev, curr, index, array) => {
            const currentPathname = `${prev}/${curr}`;
            const routeName = getRouteName(currentPathname, routes);
            routeName &&
            breadcrumbs.push({
                pathname: currentPathname,
                name: routeName,
                active: index + 1 === array.length ? true : false,
            });
            return currentPathname;
        });
        return breadcrumbs;
    };

    const breadcrumbs = useMemo(() => getBreadcrumbs(currentLocation), [currentLocation]);

    return (
        <CBreadcrumb className="m-0 ms-2">
            <CBreadcrumbItem>
                <Link to="/">Home</Link>
            </CBreadcrumbItem>
            {breadcrumbs.map((breadcrumb, index) => {
                return (
                    <CBreadcrumbItem
                        {...(breadcrumb.active ? { active: true } : {})}
                        key={index}
                    >
                        <Link to={breadcrumb.pathname}>
                            {breadcrumb.name}
                        </Link>
                    </CBreadcrumbItem>
                );
            })}
        </CBreadcrumb>
    );
};

export default React.memo(AppBreadcrumb);
