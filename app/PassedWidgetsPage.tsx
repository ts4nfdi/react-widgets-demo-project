import React from "react";
import {
    AutocompleteWidget,
    BreadcrumbWidget, CrossRefTabWidget,
    EntityInfoWidget,
    SearchBarWidget, TermDepictionWidget
} from "@ts4nfdi/terminology-service-suite";

export default function PassedWidgetsPage(){
    return(
        <div>

            <AutocompleteWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                className=""
                hasShortSelectedLabel
                parameter="fieldList=description,label,iri,ontology_name,type,short_form,synonym"
                placeholder="Type to search..."
                preselected={[]}
                selectionChangedEvent={function dye(){}}
                showApiSource
                singleSelection
                useLegacy
            />


            <SearchBarWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                parameter="collection=nfdi4health"
                query="*"
                selectionChangedEvent={function dye(){}}
            />




            <EntityInfoWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                entityType="term"
                hasTitle
                iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                onNavigateToDisambiguate={function dye(){}}
                onNavigateToEntity={function dye(){}}
                onNavigateToOntology={function dye(){}}
                ontologyId="ncit"
                parameter=""
                showBadges
                useLegacy
            />


            <BreadcrumbWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                colorFirst=""
                colorSecond=""
                entityType="term"
                iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                onNavigateToOntology={function dye(){}}
                ontologyId="ncit"
                parameter="collection=nfdi4health"
                useLegacy
            />


            <CrossRefTabWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                entityType="term"
                iri="http://purl.obolibrary.org/obo/RXNO_0000138"
                ontologyId="rxno"
                parameter=""
                useLegacy
            />


            <TermDepictionWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                iri="http://purl.obolibrary.org/obo/UBERON_0001443"
                ontologyId="uberon"
            />









        </div>
    )
}
