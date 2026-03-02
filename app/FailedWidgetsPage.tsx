import {
    EntityDefinedByWidget,
    // BreadcrumbPresentation,
    EntityRelationsWidget, GraphViewWidget, HierarchyWidget, OntologyInfoWidget, ResourcesWidget,
    SearchResultsListWidget, TabWidget
} from "@ts4nfdi/terminology-service-suite";
import React from "react";

export default function FailedWidgetsPage(){
    return(
        <div>

            {/* dots on the numbers, pagination*/}
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




            {/*nothing was shown even I tried different controls but in the stories sth was created but in the default state nothing was shown :( */}
            <EntityDefinedByWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                entityType="term"
                iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                onNavigateToOntology={function dye(){}}
                ontologyId="efo"
                parameter=""
            />




            {/*we have an error*/}
            {/*<GraphViewWidget*/}
            {/*    api="https://api.terminology.tib.eu/api/"*/}
            {/*    iri="http://purl.obolibrary.org/obo/CHEBI_24870"*/}
            {/*    onNavigateTo={function dye(){}}*/}
            {/*    onNodeClick={function dye(){}}*/}
            {/*    ontologyId="chebi"*/}
            {/*    targetIri=""*/}
            {/*/>*/}



            {/* everything is the same as the tss website, except the color of the Ontology IRI link.*/}
            <OntologyInfoWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                hasTitle
                onNavigateToDisambiguate={function dye(){}}
                onNavigateToEntity={function dye(){}}
                onNavigateToOntology={function dye(){}}
                ontologyId="atc"
                parameter=""
                showBadges
                useLegacy
            />


            {/*bad ui */}
            <ResourcesWidget
                actions={[]}
                api="https://semanticlookup.zbmed.de/ols/api/"
                initialEntriesPerPage={100}
                initialSortDir="asc"
                initialSortField="config.preferredPrefix"
                onNavigate={function dye(){}}
                pageSizeOptions={[
                    10,
                    25,
                    50,
                    100
                ]}
                parameter="collection=nfdi4health"
                useLegacy
            />



        </div>
    )
}
