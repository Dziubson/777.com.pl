import  { ReactElement, ReactNode, memo } from 'react';
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCode, cilMediaPlay } from '@coreui/icons';

interface DocsExampleProps {
    children?: ReactNode;
    href?: string;
}

const DocsExample = (props: DocsExampleProps): ReactElement => {
    const { children, href } = props;

    const _href = `https://coreui.io/react/docs/${href}`;

    return (
        <div className="example">
            <CNav variant="tabs">
                <CNavItem>
                    <CNavLink href="#" active>
                        <CIcon icon={cilMediaPlay} className="me-2" />
                        Preview
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href={_href} target="_blank">
                        <CIcon icon={cilCode} className="me-2" />
                        Code
                    </CNavLink>
                </CNavItem>
            </CNav>
            <CTabContent className="rounded-bottom">
                <CTabPane className="p-3 preview" visible>
                    {children}
                </CTabPane>
            </CTabContent>
        </div>
    );
}

export default memo(DocsExample);
