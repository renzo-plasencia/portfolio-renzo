import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Project from './pages/Projects';
import Experience from './pages/Experience_Page';
import DashboardVentasPage from './pages/Dashboard_avance_ventas';
import AutomatizacionMacroVba from './pages/AutomatizacionMacrosVBA';
import EditorPdf from './pages/EditorPdf';
import Portfolio from './pages/Portfolio';
import ScrappingTC from './pages/ScrappingTC';
import SuperKuromi from './pages/SuperKuromi';
import EncriptacionPython from './pages/EncriptacionPython';
import PowerApps from './pages/PowerApps';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Project /> },
      { path: '/experience', element: <Experience /> },
      { path: '/projects/dashboard-ventas', element: <DashboardVentasPage /> },
      { path: '/projects/automatizacion-vba', element: <AutomatizacionMacroVba /> },
      { path: '/projects/editor-pdf', element: <EditorPdf /> },
      { path: '/projects/scrapping-tc', element: <ScrappingTC /> },
      { path: '/projects/encriptacion-python', element: <EncriptacionPython /> },
      { path: '/projects/super-kuromi', element: <SuperKuromi /> },
      { path: '/projects/portfolio', element: <Portfolio /> },
      { path: '/projects/power-apps', element: <PowerApps /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
