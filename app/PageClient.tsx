'use client'

import React from 'react'
const BreadcrumbWidget = dynamic(
    () => import("@ts4nfdi/terminology-service-suite").then((mod) => mod.BreadcrumbWidget),
    { ssr: false }
);

const AutocompleteWidget = dynamic(
    () => import("@ts4nfdi/terminology-service-suite").then((mod) => mod.AutocompleteWidget),
    { ssr: false }
);

const DataContentWidget = dynamic(
    () => import("@ts4nfdi/terminology-service-suite").then((mod) => mod.DataContentWidget),
    { ssr: false }
);import {QueryClient, QueryClientProvider} from "react-query";
import dynamic from "next/dynamic";


export function PageClient() {
    const queryClient = new QueryClient();

    const containerStyle = {
        display: "grid",
        gap: "20px",
        width: "800px",
        margin: "50px auto",
    };

    return (
        <div className="grid-container" style={{gap: "20px", width: "800px", margin: "50px"}}>

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
