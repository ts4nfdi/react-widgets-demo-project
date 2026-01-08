import React from "react";
import {
    AlternativeNameTabWidget,
    AutocompleteWidget,
    BreadcrumbPresentation,
    BreadcrumbWidget,
    CrossRefTabWidget,
    DataContentWidget,
    DescriptionWidget,
    EntityInfoWidget,
    EntityOntoListWidget,
    EntityRelationsWidget,
    HierarchyWidget,
    IriWidget,
    JsonApiWidget,
    MetadataWidget,
    SearchBarWidget,
    TabWidget,
    TermDepictionWidget, TitleWidget
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



            <DataContentWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                parameter="collection=nfdi4health"
            />



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




            <BreadcrumbPresentation
                className=""
                colorFirst=""
                colorSecond=""
                entity={{
                    properties: {
                        iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',
                        ontologyId: 'ncit',
                        shortForm: 'NCIT_C2985'
                    }
                }}
                onNavigateToOntology={function dye(){}}
                ontologyId=""
                shortForm=""
            />


            <EntityOntoListWidget
                api="https://www.ebi.ac.uk/ols4/api/"
                className="dddd
"
                entityType="class"
                iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                onNavigateToOntology={function dye(){}}
                ontologyId="efo"
                parameter=""
                useLegacy
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
            />



            <JsonApiWidget
                apiQuery="https://semanticlookup.zbmed.de/ols/api/ontologies/atc"
                buttonSize="m"
                buttonText="show JSON"
            />



            <DescriptionWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                className=""
                color=""
                descText=""
                iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                ontologyId="ncit"
                parameter="collection=nfdi4health"
                thingType="term"
                useLegacy
            />



            <IriWidget
                className=""
                color="text"
                externalIcon
                iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                iriText=""
                urlPrefix=""
            />




            <MetadataWidget
                altNamesTab
                api="https://semanticlookup.zbmed.de/ols/api/"
                crossRefTab
                entityType="term"
                graphViewTab
                hierarchyTab
                hierarchyWrap
                iri="http://purl.obolibrary.org/obo/UBERON_0001443"
                onNavigateToDisambiguate={function dye(){}}
                onNavigateToEntity={function dye(){}}
                onNavigateToOntology={function dye(){}}
                ontologyId="uberon"
                parameter=""
                termDepictionTab
                termLink=""
                terminologyInfoTab
                useLegacy
            />




            <AlternativeNameTabWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                className=""
                entityType="term"
                iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                ontologyId="ncit"
                parameter="collection=nfdi4health"
                useLegacy
            />



            <TitleWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                className=""
                defaultValue=""
                iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                onNavigateTo={function dye(){}}
                ontologyId="ncit"
                parameter="collection=nfdi4health"
                thingType="term"
                titleText=""
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
