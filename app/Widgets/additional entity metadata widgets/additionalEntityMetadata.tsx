import "../../styles/widgets-layout.css"
import {
    BreadcrumbPresentation,
    BreadcrumbWidget, CrossRefTabWidget, EntityDefinedByWidget,
    EntityInfoWidget, EntityOntoListWidget,
    EntityRelationsWidget, TabWidget, TermDepictionWidget
} from "@ts4nfdi/terminology-service-suite";
export default function AdditionalEntityMetadata(){
    return(
        <div className="widgets-style">
            <section className="widget-section">
                <h3>AutocompleteWidget: </h3>
                <EntityInfoWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
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
            </section>


            <section className="widget-section">
                <h3>EntityRelationsWidget:</h3>
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
            </section>


            <section className="widget-section">
                <h3>BreadcrumbPresentation:</h3>
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
            </section>


            <section className="widget-section">
                <h3>BreadcrumbWidget:</h3>
                <BreadcrumbWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    iri="http://purl.obolibrary.org/obo/NCIT_C2985"
                />
            </section>


            {/*nothing was shown even I tried different controls but in the stories sth was created but in the default state nothing was shown :( */}
            <section className="widget-section">
                <h3>EntityDefinedByWidget:</h3>
                <EntityDefinedByWidget
                    api="https://www.ebi.ac.uk/ols4/api/"
                    entityType="term"
                    iri="http://www.ebi.ac.uk/efo/EFO_0000400"
                    onNavigateToOntology={
                        (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {
                            console.log('Triggered onNavigateToOntology()' + (entityType ? ` for ${entityType || "entity"}` : '') + ((entity && entity.label) ? ` "${entity.label}"` : '') + ((entity && entity.iri) ? ` (iri="${entity.iri}")` : '') + ` for ontologyId "${ontologyId}".`);
                        }
                    }
                    ontologyId="ons"
                    parameter=""
                />
                <p> noting is here hahahaha :)</p>
            </section>


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


            <section className="widget-section">
                <h3>CrossRefTabWidget:</h3>
                <CrossRefTabWidget
                    api="https://www.ebi.ac.uk/ols4/api/"
                    entityType="term"
                    iri="http://purl.obolibrary.org/obo/RXNO_0000138"
                    ontologyId="rxno"
                    parameter=""
                />
            </section>


            <section className="widget-section">
                <h3>TabWidget:</h3>
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
            </section>


            <section className="widget-section">
                <h3>TermDepictionWidget:</h3>
                <TermDepictionWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    iri="http://purl.obolibrary.org/obo/UBERON_0001443"
                    ontologyId="uberon"
                    useLegacy
                />
            </section>



        </div>
    )
}