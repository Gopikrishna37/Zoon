import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from './context/globalstorage.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<StoreContextProvider>
			<BrowserRouter basename="/zoon">
				<App />
			</BrowserRouter>
		</StoreContextProvider>
	</>
);

reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// export default function RootLayout({ children }) {
//   return (
//     <AppProvider>
//     <div>
//       {children}
//       Hello
//     </div>
//     </AppProvider>
//   );
// }

