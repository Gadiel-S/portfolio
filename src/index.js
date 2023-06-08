import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home.js";
import { Projects } from "./projects.js";
import { Skills } from "./skills.js";
import { Contacts } from "./contacts.js";

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
