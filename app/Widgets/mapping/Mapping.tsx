import {WrappedMappingListWidget} from "@ts4nfdi/terminology-service-suite";
import "../../styles/widgets-layout.css"

export default function Mapping(){
    return(
        <div className="widgets-style">
            <section className="widget-section">
                <h3>OntologyInfoWidget:</h3>
            <WrappedMappingListWidget
                api="https://coli-conc.gbv.de/api/"
                source="https://openenergyplatform.org/ontology/oeo/OEO_00000150"
            />
            </section>
        </div>
    )
}