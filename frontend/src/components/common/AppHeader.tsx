import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,
    CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons';

import { AppBreadcrumb } from './index';
import { AppHeaderDropdown } from './header/index';

interface SidebarState {
    sidebarShow: boolean;
}

const AppHeader = (): ReactElement => {
    const dispatch = useDispatch();
    const sidebarShow = useSelector((state: SidebarState) => state.sidebarShow);

    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderToggler
                    className="ps-1"
                    onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                >
                    <CIcon icon={cilMenu} size="lg" />
                </CHeaderToggler>
                <CHeaderBrand className="mx-auto d-md-none">

                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem component={Link} to="/">
                        Dashboard
                    </CNavItem>
                    <CNavItem component={Link} to="/users">
                        Users
                    </CNavItem>
                    <CNavItem component={Link} to="/settings">
                        Settings
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    <CNavItem component={Link} to="/settings">
                        <CIcon icon={cilBell} size="lg" />
                    </CNavItem>
                    <CNavItem component={Link} to="/settings">
                        <CIcon icon={cilList} size="lg" />
                    </CNavItem>
                    <CNavItem component={Link} to="/settings">
                        <CIcon icon={cilEnvelopeOpen} size="lg" />
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav className="ms-3">
                    <AppHeaderDropdown />
                </CHeaderNav>
            </CContainer>
            <CHeaderDivider />
            <CContainer fluid>
                <AppBreadcrumb />
            </CContainer>
        </CHeader>
    );
};

export default AppHeader;
