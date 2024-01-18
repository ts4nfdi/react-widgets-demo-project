# SemLookP Widgets Demonstration
A simple Next.js project to demonstrate the integration of a SemLookP widget.

For this demo, a Next.js app was set up in Pycharm with `Node.js v18.17.0` and `React ^18`. 
The package and peer dependencies in this example project were installed with the 
`--legacy-peer-deps` flag which may lead to problems. To ensure the expected 
behavior, following package versions should be used: 
```
"peerDependencies": {
    "@elastic/datemath": "^5.0.3",
    "@elastic/eui": "^62.1.0",
    "@emotion/react": "^11.10.0",
    "axios": "^1.1.2",
    "moment": "^2.29.4",
    "prop-types": "^15.8.1",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-query": "^3.39.2"
  }
```
## Start the demo application

Before starting the application the first time please execute the steps 1.-3. 
from the installation instructions.

To run the development server:
```bash
npm run dev
```

## Install instructions

To use a widget in an application follow these steps:

1) Create an .npmrc file in root directory with your PAT (TOKEN)
```
//npm.pkg.github.com/:_authToken=TOKEN
@nfdi4health:registry=https://npm.pkg.github.com
```
2) Install peer dependencies
```
npm install @elastic/eui @elastic/datemath @emotion/react moment prop-types react-query react-query axios
```
3) Install the package
```
npm install @nfdi4health/semlookp-widgets
```
4) Wrap components with the Elastic UI Provider (required for the ElasticUI design library)
```
import {EuiProvider} from "@elastic/eui";
<EuiProvider>YOUR COMPONENTS</EuiProvider>
```
5) Wrap the components in a QueryClientProvider (required for the react-query library)
```
import {QueryClient, QueryClientProvider} from "react-query";
const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}>YOUR COMPONENTS</QueryClientProvider>
```
6) Import light theme (styling)
```
import "@elastic/eui/dist/eui_theme_light.css";
```
7) Add widget
```
<AutocompleteWidget
api="https://semanticlookup.zbmed.de/ols/api/"
hasShortSelectedLabel
parameter="ontology=mesh,efo&type=class&collection=nfdi4health"
placeholder="Search for Term"
selectionChangedEvent={function noRefCheck() {
}}
allowCustomTerms={false}/>
```





