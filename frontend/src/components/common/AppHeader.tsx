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
                    <Link to="/">
                        <CIcon icon={""} height={48} aria-label="Logo" />
                    </Link>
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        <Link to="/">Dashboard</Link>
                    </CNavItem>
                    <CNavItem>
                        <Link to="/users">Users</Link>
                    </CNavItem>
                    <CNavItem>
                        <Link to="/settings">Settings</Link>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    <CNavItem>
                        <Link to="#">
                            <CIcon icon={cilBell} size="lg" />
                        </Link>
                    </CNavItem>
                    <CNavItem>
                        <Link to="#">
                            <CIcon icon={cilList} size="lg" />
                        </Link>
                    </CNavItem>
                    <CNavItem>
                        <Link to="#">
                            <CIcon icon={cilEnvelopeOpen} size="lg" />
                        </Link>
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
