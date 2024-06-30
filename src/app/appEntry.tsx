import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { StoreProvider } from './providers/store';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('The root element is required!');
}

ReactDOM.createRoot(rootElement).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
