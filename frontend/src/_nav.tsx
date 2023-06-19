
import CIcon from '@coreui/icons-react'
import {
    cilCalculator,
    cilPencil,
    cilStar,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
    {
        component: CNavItem,
        name: 'Home',
        to: '/',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Match Details',
        to: '/match-details',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Predictions',
        to: '/predictions',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'User Profile',
        to: '/user-profile',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Statistics',
        to: '/statistics',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Login',
        to: '/login',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Register',
        to: '/register',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    },
]

export default _nav
