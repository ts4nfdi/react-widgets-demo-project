'use client'

import React, {Suspense} from 'react'
import {
    BreadcrumbPresentation,
    BreadcrumbWidget,
    AutocompleteWidget,
    DataContentWidget
} from "@ts4nfdi/terminology-service-suite";
import {QueryClient, QueryClientProvider} from "react-query";

export function WidgetPage({widgetData}: { widgetData: any }) {
    const queryClient = new QueryClient();

    const containerStyle = {
        display: "grid",
        gap: "20px",
        width: "800px",
        margin: "50px auto",
    };

    return (
        <div className="grid-container" style={{gap: "20px", width: "800px", margin: "50px"}}>

            <div style={{gap: "20px", width: "500px", margin: "50px"}}>
                <h3 style={{margin: "10px"}}>BreadcrumbPresentation with data input: </h3>
                <Suspense fallback={<div>Loading...</div>}>
                    <BreadcrumbPresentation entity={widgetData} ontologyId={"test"}/>
                </Suspense>
            </div>

            <QueryClientProvider client={queryClient}>


            <div style={{gap: "20px", width: "200px", margin: "50px"}}>
                <h3 style={{margin: "10px"}}>BreadcrumbWidget: </h3>
                <BreadcrumbWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    iri="http://purl.obolibrary.org/obo/NCIT_C2985"/>
            </div>

            <div style={{gap: "20px", width: "800px", margin: "50px"}}>
                <h3 style={{margin: "10px"}}>AutocompleteWidget: </h3>
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
            </div>

            <div style={{gap: "20px", width: "300px", margin: "50px"}}>
                <h3 style={{margin: "10px"}}>DataContentWidget: </h3>
                <DataContentWidget api="https://semanticlookup.zbmed.de/ols/api/"/>
            </div>

            </QueryClientProvider>
        </div>
    );
}

