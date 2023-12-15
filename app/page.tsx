'use client';

import { EuiProvider } from "@elastic/eui";
import { AutocompleteWidget } from '@nfdi4health/semlookp-widgets'
import { QueryClient, QueryClientProvider } from "react-query";
import "@elastic/eui/dist/eui_theme_light.css";

export default function Home() {
    const queryClient = new QueryClient();
    return (
        <EuiProvider>
            <QueryClientProvider client={queryClient}>
                <AutocompleteWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    hasShortSelectedLabel
                    parameter="collection=nfdi4health"
                    placeholder="Search for Term"
                    selectionChangedEvent={function noRefCheck() {
                    }}
                    allowCustomTerms={false}/>
            </QueryClientProvider>
        </EuiProvider>
    )
}
