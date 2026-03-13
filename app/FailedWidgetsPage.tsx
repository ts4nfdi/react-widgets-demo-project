import {
    EntityDefinedByWidget, EntityOntoListWidget,
    // BreadcrumbPresentation,
    EntityRelationsWidget, GraphViewWidget, HierarchyWidget, OntologyInfoWidget, ResourcesWidget,
    SearchResultsListWidget, TabWidget
} from "@ts4nfdi/terminology-service-suite";
import React from "react";

export default function FailedWidgetsPage(){
    return(
        <div>


            {/*nothing was shown even I tried different controls but in the stories sth was created but in the default state nothing was shown :( */}
            <EntityDefinedByWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                entityType="term"
                iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                onNavigateToOntology={function dye(){}}
                ontologyId="efo"
                parameter=""
            />


        {/*Update the document and write the perimeter useLegacy is necessary to be written in the code*/}
            <section className="widget-section">
                <h3>EntityOntoListWidget:</h3>
                <EntityOntoListWidget
                    api="https://www.ebi.ac.uk/ols4/api/"
                    entityType="term"
                    iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                    onNavigateToOntology={function dye(){}}
                    ontologyId="efo"
                    parameter=""
                    useLegacy   // this parameter is necessary
                />
            </section>



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



            {/*the last three parameters should be commented out*/}
            <section className="widget-section">
                <h3>HierarchyWidget:</h3>
                <HierarchyWidget
                    apiKey=""
                    apiUrl="https://www.ebi.ac.uk/ols4/api/"
                    backendType="ols"
                    entityType="class"
                    iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                    onNavigateToEntity={function dye(){}}
                    onNavigateToOntology={function dye(){}}
                    ontologyId="efo"
                    parameter=""
                    // showComparisonTitleInHeader
                    // showHeader
                    // targetIri=""
                />
            </section>



        </div>
    )
}
