import {createRoot} from 'react-dom/client';

// third party
import {BrowserRouter} from 'react-router-dom';

// project imports
import App from 'App';
import * as serviceWorker from 'serviceWorker';

// style + assets
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import 'assets/scss/style.scss';
import {RecoilRoot} from 'recoil';
import config from './config';

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const queryClient = new QueryClient();
root.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    </RecoilRoot>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
