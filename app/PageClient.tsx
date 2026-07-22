'use client';

import React, { useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EuiPageHeader, EuiSpacer, EuiText } from '@elastic/eui';
import SearchWidgets from "@/app/Widgets/Search widgets/searchWidgets";
import TerminologyServiceWidget from "@/app/Widgets/Terminology service widgets/terminologyServiceWidget";
import AdditionalEntityMetadata from "@/app/Widgets/additional entity metadata widgets/additionalEntityMetadata";
import HierarchyGraphWidgets from "@/app/Widgets/hierarchy and graph widgets/HierarchyGraphWidgets";
import EntityMetaDataWidget from "@/app/Widgets/entity metadata widgets/entityMetaDataWidget";
import OntologyMetadataWidget from "@/app/Widgets/ontology metadata widgets/ontologyMetadataWidget";

export function PageClient() {
    const [queryClient] = useState(() => new QueryClient());
    const [tabSelected, setTabSelected] = useState<string>('tab1');

    const containerStyle: React.CSSProperties = {
        display: 'grid',
        gap: '10px',
        width: '90%',
        margin: '50px auto',
    };

    const tabs = useMemo(() => {
        return [
            {
                id: 'tab1',
                label: 'search',
                isSelected: tabSelected === 'tab1',
                onClick: () => setTabSelected('tab1'),
            },
            {
                id: 'tab2',
                label: 'terminology service',
                isSelected: tabSelected === 'tab2',
                onClick: () => setTabSelected('tab2'),
            },
            {
                id: 'tab3',
                label: 'additional entity metadata',
                isSelected: tabSelected === 'tab3',
                onClick: () => setTabSelected('tab3'),
            },
            {
                id: 'tab4',
                label: 'hierarchy and graph',
                isSelected: tabSelected === 'tab4',
                onClick: () => setTabSelected('tab4'),
            },
            {
                id: 'tab5',
                label: 'entity metadata',
                isSelected: tabSelected === 'tab5',
                onClick: () => setTabSelected('tab5'),
            },
            {
                id: 'tab6',
                label: 'ontology metadata',
                isSelected: tabSelected === 'tab6',
                onClick: () => setTabSelected('tab6'),
            },
        ];
    }, [tabSelected]);

    const tabContent = useMemo(() => {
        switch (tabSelected) {
            case 'tab1':
                return <SearchWidgets/>;

            case 'tab2':
                return <TerminologyServiceWidget/>

            case 'tab3':
                return <AdditionalEntityMetadata/>

            case 'tab4':
                return <HierarchyGraphWidgets/>

            case 'tab5':
                return <EntityMetaDataWidget/>

            case 'tab6':
                return <OntologyMetadataWidget/>

            default:
                return null;
        }
    }, [tabSelected]);

    return (
        <div className="grid-container" style={containerStyle}>
            <QueryClientProvider client={queryClient}>
                <EuiPageHeader pageTitle="Demo of the Widgets" tabs={tabs} />
                <EuiSpacer size="xs" />
                <br/>
                {tabContent}
            </QueryClientProvider>
        </div>
    );
}

// The bottom left side lists the project issues. What should be done about them?