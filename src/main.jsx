import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import IndexData from './MainComp/IndexData.jsx'
import DocsMain from './Docs/DocsMain.jsx'
import NavBarDocs from './Docs/ComponentsDocs.jsx/NavBarDocs.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<IndexData/>}/>
            <Route path='docs' element={<DocsMain/>}>
                <Route path='NavCompDocs' element={<NavBarDocs/>} />
            </Route>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)