import "../../styles/widgets-layout.css"
import {OntologyInfoWidget, ResourcesWidget} from "@ts4nfdi/terminology-service-suite";

export default function OntologyMetadataWidget(){
    return(
        <div className="widgets-style">
            {/* everything is the same as the tss website, except the color of the Ontology IRI link.*/}
            <section className="widget-section">
                <h3>OntologyInfoWidget:</h3>
                <OntologyInfoWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    hasTitle
                    onNavigateToDisambiguate={function bge(){}}
                    onNavigateToEntity={function bge(){}}
                    onNavigateToOntology={function bge(){}}
                    ontologyId="ncit"
                    parameter=""
                    showBadges
                    useLegacy
                />
            </section>


            {/*Its ui seems strange*/}
            <section className="widget-section">
                <h3>ResourcesWidget:</h3>
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
            </section>

        </div>
    )
}