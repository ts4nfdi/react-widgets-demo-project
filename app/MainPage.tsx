'use client'

import dynamic from 'next/dynamic';

import { EuiFlexGroup, EuiFlexItem, EuiPageTemplate, EuiPageBody, EuiPanel, EuiSpacer, EuiTitle } from '@elastic/eui';
import {
    AutocompleteWidgetProps,
    DataContentWidgetProps,
    MetadataWidgetProps,
    BreadcrumbWidgetProps,
} from '@ts4nfdi/terminology-service-suite'
import React from 'react'

// By dynamically importing the widgets you ensure that the component is only rendered on the client-side, avoiding
// server-side rendering errors
const AutocompleteWidget = dynamic<AutocompleteWidgetProps>(() =>
        import("@ts4nfdi/terminology-service-suite").then((mod) => mod.AutocompleteWidget)
    , { ssr: false }) as React.ComponentType<AutocompleteWidgetProps>;
;

const DataContentWidget = dynamic<DataContentWidgetProps>(() =>
        import("@ts4nfdi/terminology-service-suite").then((mod) => mod.DataContentWidget)
    , { ssr: false }) as React.ComponentType<DataContentWidgetProps>;
;

const MetadataWidget = dynamic<MetadataWidgetProps>(() =>
        import("@ts4nfdi/terminology-service-suite").then((mod) => mod.MetadataWidget)
    , { ssr: false }) as React.ComponentType<MetadataWidgetProps>;
;

const BreadcrumbWidget = dynamic<BreadcrumbWidgetProps>(() =>
        import("@ts4nfdi/terminology-service-suite").then((mod) => mod.BreadcrumbWidget)
    , { ssr: false }) as React.ComponentType<BreadcrumbWidgetProps>;
;

export function MainPage() {
    return (
        <EuiPageTemplate paddingSize={"xl"}>
            <EuiPageBody>
                <EuiFlexGroup gutterSize="l" direction="column" justifyContent="spaceEvenly">
                    <EuiFlexItem>
                        <EuiFlexGroup gutterSize="l">
                            <EuiFlexItem>
                                <EuiPanel>
                                    <EuiTitle><h3>Autocomplete Widget</h3></EuiTitle>
                                    <EuiSpacer/>
                                    <AutocompleteWidget
                                        api="https://semanticlookup.zbmed.de/ols/api/"
                                        selectionChangedEvent={(
                                            selectedOptions: Array<{
                                                label: string;
                                                iri?: string;
                                                type?: string;
                                                ontology_name?: string;
                                            }>
                                        ) => {
                                            if (selectedOptions.length == 0) return;
                                        }}
                                        placeholder="Search"/>
                                </EuiPanel>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiPanel>
                                    <EuiTitle><h3>DataContent Widget</h3></EuiTitle>
                                    <EuiSpacer/>
                                    <DataContentWidget api="https://semanticlookup.zbmed.de/ols/api/"/>
                                </EuiPanel>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFlexGroup gutterSize="l">
                            <EuiFlexItem>
                                <EuiPanel>
                                    <EuiTitle><h3>Metadata Widget</h3></EuiTitle>
                                    <EuiSpacer/>
                                    <MetadataWidget
                                        api="https://semanticlookup.zbmed.de/ols/api/"
                                        iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                                        useLegacy={true}/>
                                </EuiPanel>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiPanel>
                                    <EuiTitle><h3>Breadcrumb Widget</h3></EuiTitle>
                                    <EuiSpacer/>
                                    <BreadcrumbWidget
                                        api="https://semanticlookup.zbmed.de/ols/api/"
                                        iri="http://purl.obolibrary.org/obo/NCIT_C2985"/>
                                </EuiPanel>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPageTemplate>
    );
}

