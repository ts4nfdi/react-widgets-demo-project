import ClientWrapper from "./ClientWrapper";
import React from 'react'
import {entityObject, getBreadcrumbData} from "@ts4nfdi/terminology-service-suite/server";


export async function PageServer() {
    const widgetData: entityObject = await getBreadcrumbData({
        api: "https://semanticlookup.zbmed.de/ols/api/",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        useLegacy: false,
    })

    return (
        <ClientWrapper widgetData={widgetData}/>
    )
}
