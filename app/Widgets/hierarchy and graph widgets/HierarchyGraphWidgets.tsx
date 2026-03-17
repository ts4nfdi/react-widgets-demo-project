import "../../styles/widgets-layout.css"
import {GraphViewWidget, HierarchyWidget} from "@ts4nfdi/terminology-service-suite";

export default function HierarchyGraphWidgets(){
    return(
        <div className="widgets-style">
            <section className="widget-section">
                <h3>GraphViewWidget:</h3>
                <GraphViewWidget
                    api="https://api.terminology.tib.eu/api/"
                    iri="http://purl.obolibrary.org/obo/CHEBI_24870"
                    onNavigateTo={function dye(){}}
                    onNodeClick={function dye(){}}
                    ontologyId="chebi"
                    targetIri=""
                />
            </section>

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