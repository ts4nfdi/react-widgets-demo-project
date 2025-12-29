import {
    EntityDefinedByWidget, EntityOntoListWidget,
    // BreadcrumbPresentation,
    EntityRelationsWidget, GraphViewWidget, HierarchyWidget,
    SearchResultsListWidget, TabWidget
} from "@ts4nfdi/terminology-service-suite";
import React from "react";

export default function FailedWidgetsPage(){
    return(
        <div>

            {/*the dots on the numbers, paginations*/}
            <SearchResultsListWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                initialItemsPerPage={10}
                itemsPerPageOptions={[
                    10,
                    25,
                    50,
                    100
                ]}
                parameter="collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"
                preselected={[]}
                query="d*"
                targetLink=""
                useLegacy
            />


            {/*the ui difference , without css */}
            <EntityRelationsWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                entityType="term"
                hasTitle
                iri="http://purl.obolibrary.org/obo/AGRO_00000002"
                onNavigateToDisambiguate={function dye(){}}
                onNavigateToEntity={function dye(){}}
                onNavigateToOntology={function dye(){}}
                ontologyId="agro"
                parameter=""
                showBadges
            />



            {/*problem with importing*/}
            {/*<BreadcrumbPresentation*/}
            {/*    className=""*/}
            {/*    colorFirst=""*/}
            {/*    colorSecond=""*/}
            {/*    entity={{*/}
            {/*        properties: {*/}
            {/*            iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',*/}
            {/*            ontologyId: 'ncit',*/}
            {/*            shortForm: 'NCIT_C2985'*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    onNavigateToOntology={function dye(){}}*/}
            {/*    ontologyId=""*/}
            {/*    shortForm=""*/}
            {/*/>*/}


            {/*nothing was shown */}
            <EntityDefinedByWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                entityType="term"
                iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                onNavigateToOntology={function dye(){}}
                ontologyId="efo"
                parameter=""
            />


            {/*nothing was fetched*/}
            <EntityOntoListWidget
                api="https://terminology.services.base4nfdi.de/api/"
                entityType="class"
                iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                ontologyId="efo"
                onNavigateToOntology={() => {}}
            />


             {/*bad ui*/}
            <TabWidget
                altNamesTab
                api="https://semanticlookup.zbmed.de/ols/api/"
                crossRefTab
                entityType="term"
                hierarchyTab
                iri="http://purl.obolibrary.org/obo/HP_0000819"
                onNavigateToDisambiguate={function dye(){}}
                onNavigateToEntity={function dye(){}}
                onNavigateToOntology={function dye(){}}
                ontologyId="hp"
                parameter="collection=nfdi4health"
                terminologyInfoTab
                useLegacy
            />


            {/*bad ui and small error*/}
            {/*<GraphViewWidget*/}
            {/*    api="https://api.terminology.tib.eu/api/"*/}
            {/*    iri="http://purl.obolibrary.org/obo/CHEBI_24870"*/}
            {/*    onNavigateTo={function dye(){}}*/}
            {/*    onNodeClick={function dye(){}}*/}
            {/*    ontologyId="chebi"*/}
            {/*    targetIri=""*/}
            {/*/>*/}


            {/* bad ui */}
            <HierarchyWidget
                apiKey=""
                apiUrl="https://www.ebi.ac.uk/ols4/api/"
                backendType="ols"
                entityType="class"
                iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                onNavigateToEntity={function dye(){}}
                onNavigateToOntology={function dye(){}}
                ontologyId="efo"
                // parameter=""
            />



        </div>
    )
}
