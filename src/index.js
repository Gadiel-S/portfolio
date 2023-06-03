import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Projects, Skills, Contacts } from "./App.js";

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <HashRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/projetos" element={<Projects />} />
         <Route path="/habilidades" element={<Skills />} />
         <Route path="/contatos" element={<Contacts />} />
       </Routes>
     </HashRouter>
)
