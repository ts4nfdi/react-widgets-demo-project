import "../style.css"
import {DataContentWidget} from "@ts4nfdi/terminology-service-suite";

export default function TerminologyServiceWidget(){
    return(
        <div className="widgets-style">
            <div style={{ width: '300px' }}>
                <h3 style={{ margin: '10px' }}>DataContentWidget: </h3>
                <DataContentWidget api="https://semanticlookup.zbmed.de/ols/api/" />
            </div>
        </div>
    )
}