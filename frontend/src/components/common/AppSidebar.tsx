import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { AppSidebarNav } from '../common/AppSidebarNav.tsx';

//import { logoNegative } from '../../assets/brand/logo-negative';
//import { sygnet } from 'src/assets/brand/sygnet';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../../_nav.tsx';

interface SidebarState {
    sidebarUnfoldable: boolean;
    sidebarShow: boolean;
}

const AppSidebar = (): ReactElement => {
    const dispatch = useDispatch();
    const unfoldable = useSelector((state: SidebarState) => state.sidebarUnfoldable);
    const sidebarShow = useSelector((state: SidebarState) => state.sidebarShow);

    return (
        <CSidebar
            position="fixed"
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible: boolean) => {
                dispatch({ type: 'set', sidebarShow: visible });
            }}
        >
            <CSidebarBrand className="d-none d-md-flex">
                <Link to="/">
                    <CIcon className="sidebar-brand-full" icon={""} height={35} />
                    <CIcon className="sidebar-brand-narrow" icon={""} height={35} />
                </Link>
            </CSidebarBrand>
            <CSidebarNav>
                <SimpleBar>
                    <AppSidebarNav items={navigation} />
                </SimpleBar>
            </CSidebarNav>
            <CSidebarToggler
                className="d-none d-lg-flex"
                onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
            />
        </CSidebar>
    );
};

export default React.memo(AppSidebar);
