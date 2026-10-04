import './index.css';

const rootElement = document.getElementById('root');
if (rootElement && rootElement.children.length === 0) {
  // Only mount if empty root element exists
  import('react-dom/client').then(({createRoot}) => {
    import('./App.tsx').then(({default: App}) => {
      createRoot(rootElement).render(<App />);
    });
  });
}
