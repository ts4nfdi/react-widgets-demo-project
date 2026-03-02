import {AutocompleteWidget, SearchBarWidget, SearchResultsListWidget} from "@ts4nfdi/terminology-service-suite";
import "../style.css"

export default function SearchWidgets() {
    return(
        <div className="widgets-style">

            <section className="widget-section">
                <h3>AutocompleteWidget: </h3>
                <AutocompleteWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    selectionChangedEvent={(
                        selectedOptions: Array<{
                            label: string
                            iri?: string
                            type?: string
                            ontology_name?: string
                        }>
                    ) => {
                        if (selectedOptions.length == 0) return
                    }}
                    placeholder="Search"
                />
            </section>


            <section className="widget-section">
                <h3 style={{ margin: '10px' }}>SearchBarWidget: </h3>
                <SearchBarWidget
                    api="https://www.ebi.ac.uk/ols4/api/"
                    parameter="collection=nfdi4health"
                    query="*"
                    selectionChangedEvent={function dye(){}}
                />
            </section>



            {/* When you click the pagination, it takes a while to load because the data has to be fetched. It’s better to show a loading icon.*/}
            {/*I searched "vein" and in the results, one of them was odd*/}
            {/*it has css/ui issue: dots on the pagination numbers*/}
            <section className="widget-section">
                <h3 style={{ margin: '10px' }}>SearchResultsListWidget: </h3>
                <SearchResultsListWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    initialItemsPerPage={10}
                    itemsPerPageOptions={[
                        10,
                        25,
                        50,
                        100
                    ]}
                    onNavigateToOntology={function dye(){}}
                    parameter="fieldList=description,label,iri,ontology_name,type,short_form"
                    preselected={[]}
                    query="*"
                    targetLink=""
                />
            </section>




        </div>
    )

}