import {WrappedMappingListWidget} from "@ts4nfdi/terminology-service-suite";
import "../../styles/widgets-layout.css"

export default function Mapping(){
    return(
        <div className="widgets-style">
            <section className="widget-section">
                <h3>OntologyInfoWidget:</h3>
                <WrappedMappingListWidget
                    MappingDetailBackgroundColor="#efebee"
                    api="https://coli-conc.gbv.de/api/"
                    iri="https://openenergyplatform.org/ontology/oeo/OEO_00000150"
                    rowColor="#fff5fa"
                />
            </section>
        </div>
    )
}