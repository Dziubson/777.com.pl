import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { CNavbar, CNavItem, CNavTitle } from '@coreui/react';

const Navbars: React.FC = () => {
    const { userInfo } = useSelector((state: RootState) => state.user);

    return (
        <CNavbar color="light" className="mb-2">
            <CNavTitle>My App</CNavTitle>
            <CNavItem href="/home">Home</CNavItem>
            <CNavItem href="/matches">Matches</CNavItem>
            <CNavItem href="/predictions">Predictions</CNavItem>
            {userInfo
                ? <CNavItem href="/profile">Profile</CNavItem>
                : <CNavItem href="/login">Login</CNavItem>
            }
        </CNavbar>
    );
};

export default Navbars;