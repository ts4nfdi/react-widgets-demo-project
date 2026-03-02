'use client'

import React, { useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EuiPageHeader, EuiSpacer, EuiText } from '@elastic/eui';

export function PageClient() {
    const [queryClient] = useState(() => new QueryClient());
    const [tabSelected, setTabSelected] = useState<string>('tab1');

    const containerStyle: React.CSSProperties = {
        display: 'grid',
        gap: '20px',
        width: '800px',
        margin: '50px auto',
    };


    const tabs = useMemo(() => {
        return[
            {
                id: 'tab1',
                label: 'Tab 1',
                isSelected: tabSelected === 'tab1',
                onClick: ()=> setTabSelected("tab1"),
            },
            {
                id: 'tab2',
                label: 'Tab 2',
                isSelected: tabSelected === 'tab2',
                onClick: ()=> setTabSelected("tab2"),
            },
            {
                id: 'tab3',
                label: 'Tab 3',
                isSelected: tabSelected === 'tab3',
                onClick: ()=> setTabSelected("tab3"),
            },
            {
                id: 'tab4',
                label: 'Tab 4',
                isSelected: tabSelected === 'tab4',
                onClick: ()=> setTabSelected("tab4"),
            },
            {
                id: 'tab5',
                label: 'Tab 5',
                isSelected: tabSelected === 'tab5',
                onClick: ()=> setTabSelected("tab5"),
            },
            {
                id: 'tab6',
                label: 'Tab 6',
                isSelected: tabSelected === 'tab6',
                onClick: ()=> setTabSelected("tab6"),
            }

        ]
    },[tabSelected]);


    return (
        <div className="grid-container" style={containerStyle}>
            <QueryClientProvider client={queryClient}>
                <EuiPageHeader pageTitle="Page title" tabs={tabs} />
            </QueryClientProvider>
        </div>
    );
}
