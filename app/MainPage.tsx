import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiPage, EuiPageBody, EuiPanel, EuiSpacer, EuiTitle } from '@elastic/eui';
import { AutocompleteWidget, BreadcrumbWidget, DataContentWidget, MetadataWidget } from '@ts4nfdi/terminology-service-suite'

export function MainPage() {
    return (
        <EuiPage paddingSize={"xl"}>
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
                                        hasShortSelectedLabel
                                        parameter="collection=nfdi4health"
                                        placeholder="Search for Term"
                                        selectionChangedEvent={function noRefCheck() {
                                        }}
                                        allowCustomTerms={false}
                                        singleSelection={false}/>

                                </EuiPanel>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiPanel>
                                    <EuiTitle><h3>DataContent Widget</h3></EuiTitle>
                                    <EuiSpacer/>
                                    <DataContentWidget api={"https://semanticlookup.zbmed.de/ols/api/"}/>
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
                                        api={"https://semanticlookup.zbmed.de/ols/api/"}
                                        iri={"http://purl.obolibrary.org/obo/NCIT_C2985"}/>
                                </EuiPanel>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiPanel>
                                    <EuiTitle><h3>Breadcrumb Widget</h3></EuiTitle>
                                    <EuiSpacer/>
                                    <BreadcrumbWidget
                                        api={"https://semanticlookup.zbmed.de/ols/api/"}
                                        iri={"http://purl.obolibrary.org/obo/NCIT_C2985"}/>
                                </EuiPanel>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageBody>
        </EuiPage>
    );
}

