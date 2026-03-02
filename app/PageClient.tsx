'use client'

import React from 'react'
import {
    AlternativeNameTabWidget,
    AutocompleteWidget,
    BreadcrumbPresentation,
    BreadcrumbWidget,
    CrossRefTabWidget,
    DataContentWidget,
    DescriptionWidget,
    EntityDefinedByWidget,
    EntityInfoWidget,
    EntityOntoListWidget,
    EntityRelationsWidget,
    GraphViewWidget,
    HierarchyWidget,
    IriWidget,
    JsonApiWidget,
    MetadataWidget,
    OntologyInfoWidget,
    ResourcesWidget,
    SearchBarWidget,
    SearchResultsListWidget,
    TabWidget,
    TermDepictionWidget,
    TitleWidget,
} from '@ts4nfdi/terminology-service-suite'
import { QueryClient, QueryClientProvider } from 'react-query'

export function PageClient() {
    const queryClient = new QueryClient()

    const containerStyle: React.CSSProperties = {
        display: 'grid',
        gap: '20px',
        width: '800px',
        margin: '50px auto',
    }

    return (
        <div className="grid-container" style={{ display:"flex", flexDirection: "column", gap: '50px', width: '80%', margin: '50px' }}>
            <QueryClientProvider client={queryClient}>


                <div>
                    <h3 style={{ margin: '10px' }}>AutocompleteWidget: </h3>
                    <AutocompleteWidget
                        api="https://semanticlookup.zbmed.de/ols/api/"
                        selectionChangedEvent={(
                            selectedOptions: Array<{
                                label: string
                                iri?: string
                                type?: string
                                ontology_name?: string
                            }>
                        ) => {
                            if (selectedOptions.length == 0) return
                        }}
                        placeholder="Search"
                    />
                </div>


                <div>
                <h3 style={{ margin: '10px' }}>SearchBarWidget: </h3>
                <SearchBarWidget
                    api="https://www.ebi.ac.uk/ols4/api/"
                    parameter="collection=nfdi4health"
                    query="*"
                    selectionChangedEvent={function dye(){}}
                />
                </div>


                {/* When you click the pagination, it takes a while to load because the data has to be fetched. It’s better to show a loading icon.*/}
                {/*I searched "vein" and in the results, one of them was odd*/}
                {/*it has css/ui issue: dots on the pagination numbers*/}
                <div>
                <h3 style={{ margin: '10px' }}>SearchResultsListWidget: </h3>
                <SearchResultsListWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    initialItemsPerPage={10}
                    itemsPerPageOptions={[
                        10,
                        25,
                        50,
                        100
                    ]}
                    onNavigateToOntology={function dye(){}}
                    parameter="fieldList=description,label,iri,ontology_name,type,short_form"
                    preselected={[]}
                    query="*"
                    targetLink=""
                />
                </div>



                <div style={{ gap: '20px', width: '300px', margin: '50px' }}>
                    <h3 style={{ margin: '10px' }}>DataContentWidget: </h3>
                    <DataContentWidget api="https://semanticlookup.zbmed.de/ols/api/" />
                </div>



                <EntityDefinedByWidget
                    api="https://www.ebi.ac.uk/ols4/api/"
                    entityType="term"
                    iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                    onNavigateToOntology={function dye() {}}
                    ontologyId="efo"
                    parameter=""
                />

                <div style={{ gap: '20px', width: '200px', margin: '50px' }}>
                    <h3 style={{ margin: '10px' }}>BreadcrumbWidget: </h3>
                    <BreadcrumbWidget
                        api="https://semanticlookup.zbmed.de/ols/api/"
                        iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                    />
                </div>








            </QueryClientProvider>
        </div>
    )
}
