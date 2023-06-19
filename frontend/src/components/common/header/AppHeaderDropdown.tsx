import React from 'react'
import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownHeader,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'
import {
    cilBell,
    cilEnvelopeOpen,
    cilSettings,
    cilTask,
    cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import avatar8 from '../../../assets/images/avatars/8.jpg'

// Własny komponent dropdown item
const DropdownItemLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link to={to} className="dropdown-item">
        {children}
    </Link>
)

const AppHeaderDropdown: React.FC = () => {
    return (
        <CDropdown variant="nav-item">
            <CDropdownToggle className="py-0" caret={false}>
                <CAvatar src={avatar8} size="md" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
                <DropdownItemLink to="/updates">
                    <CIcon icon={cilBell} className="me-2" />
                    Updates
                    <CBadge color="info" className="ms-2">
                        42
                    </CBadge>
                </DropdownItemLink>
                <DropdownItemLink to="/messages">
                    <CIcon icon={cilEnvelopeOpen} className="me-2" />
                    Messages
                    <CBadge color="success" className="ms-2">
                        42
                    </CBadge>
                </DropdownItemLink>
                <DropdownItemLink to="/tasks">
                    <CIcon icon={cilTask} className="me-2" />
                    Tasks
                    <CBadge color="danger" className="ms-2">
                        42
                    </CBadge>
                </DropdownItemLink>
                <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
                <DropdownItemLink to="/profile">
                    <CIcon icon={cilUser} className="me-2" />
                    Profile
                </DropdownItemLink>
                <DropdownItemLink to="/settings">
                    <CIcon icon={cilSettings} className="me-2" />
                    Settings
                </DropdownItemLink>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default AppHeaderDropdown
