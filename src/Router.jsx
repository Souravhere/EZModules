// router.jsx
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import IndexData from './MainComp/IndexData.jsx';
import DocsMain from './Docs/DocsMain.jsx';
import DefaultDocsContent from './Docs/DefaultDocsContent.jsx';
import TooltipDocs from './Docs/ComponentsDocs.jsx/TooltipDocs.jsx';
import BreadcrumbDocs from './Docs/ComponentsDocs.jsx/BreadcrumbDocs.jsx';
import TabsDocs from './Docs/ComponentsDocs.jsx/TabsDocs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexData />} />
      <Route path="docs" element={<DocsMain />}>
        <Route index element={<DefaultDocsContent />} />
        <Route path="TooltipDocs" element={<TooltipDocs />} />
        <Route path="BreadcrumbDocs" element={<BreadcrumbDocs />} />
        <Route path='TabsDocs' element={<TabsDocs/>}/>
      </Route>
    </Route>
  )
);

export default router;
