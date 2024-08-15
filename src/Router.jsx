// router.jsx
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import IndexData from './MainComp/IndexData.jsx';
import DocsMain from './Docs/DocsMain.jsx';
import NavBarDocs from './Docs/ComponentsDocs.jsx/NavBarDocs.jsx';
import DefaultDocsContent from './Docs/DefaultDocsContent.jsx';
import TooltipDocs from './Docs/ComponentsDocs.jsx/TooltipDocs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexData />} />
      <Route path="docs" element={<DocsMain />}>
        <Route index element={<DefaultDocsContent />} />
        <Route path="NavCompDocs" element={<NavBarDocs />} />
        <Route path="TooltipDocs" element={<TooltipDocs />} />
      </Route>
    </Route>
  )
);

export default router;
