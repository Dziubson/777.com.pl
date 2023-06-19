import React, { Suspense, ReactElement } from 'react';
import { CContainer, CSpinner } from '@coreui/react';

interface AppContentProps {
    children: React.ReactNode;
}

const AppContent = ({children}: AppContentProps): ReactElement => {
    return (
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                {children}
            </Suspense>
        </CContainer>
    );
};

export default React.memo(AppContent);
