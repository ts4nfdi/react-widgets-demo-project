import {
    AlternativeNameTabWidget,
    DescriptionWidget,
    IriWidget,
    MetadataWidget, TitleWidget
} from "@ts4nfdi/terminology-service-suite";
import "../../styles/widgets-layout.css"

export default function EntityMetaDataWidget(){
    return(
        <div className="widgets-style">
            <section className="widget-section">
                <h3>DescriptionWidget:</h3>
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
            </section>


            <section className="widget-section">
                <h3>IriWidget:</h3>
                <IriWidget
                    className=""
                    color="danger"
                    externalIcon
                    iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                    iriText=""
                    urlPrefix=""
                />
            </section>


            <section className="widget-section">
                <h3>DescriptionWidget:</h3>
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
            </section>


            <section className="widget-section">
                <h3>AlternativeNameTabWidget:</h3>
                <AlternativeNameTabWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    className=""
                    entityType="term"
                    iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                    ontologyId="ncit"
                    parameter="collection=nfdi4health"
                    useLegacy
                />
            </section>


            <section className="widget-section">
                <h3>TitleWidget:</h3>
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
            </section>


        </div>
    )
}