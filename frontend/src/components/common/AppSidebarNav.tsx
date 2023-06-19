import React, { ReactElement } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { CBadge } from '@coreui/react';

interface NavItemProps {
    component?: any;
    name: string;
    badge?: { color: string, text: string };
    icon?: JSX.Element;
    to?: string;
    items?: NavItemProps[];
}

interface SidebarNavProps {
    items: NavItemProps[];
}

export const AppSidebarNav = ({ items }: SidebarNavProps): ReactElement => {
    const location = useLocation();

    const navLink = (name: string, icon?: JSX.Element, badge?: { color: string, text: string }): ReactElement => {
        return (
            <>
                {icon && <>{icon}</>}
                {name && name}
                {badge && (
                    <CBadge color={badge.color} className="ms-auto">
                        {badge.text}
                    </CBadge>
                )}
            </>
        );
    }

    const navItem = (item: NavItemProps, index: number): ReactElement => {
        const { component, name, badge, icon, ...rest } = item;
        const Component = component;

        return (
            <Component
                {...(rest.to &&
                    !rest.items && {
                        component: NavLink,
                    })}
                key={index}
                {...rest}
            >
                {navLink(name, icon, badge)}
            </Component>
        );
    }

    const navGroup = (item: NavItemProps, index: number): ReactElement => {
        const { component, name, icon, to, ...rest } = item;
        const Component = component;

        return (
            <Component
                idx={String(index)}
                key={index}
                toggler={navLink(name, icon)}
                visible={location.pathname.startsWith(to || '')}
                {...rest}
            >
                {item.items?.map((item, index) =>
                    item.items ? navGroup(item, index) : navItem(item, index),
                )}
            </Component>
        );
    }

    return (
        <React.Fragment>
            {items &&
                items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
        </React.Fragment>
    );
}
