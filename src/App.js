import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ProSidebarProvider } from "react-pro-sidebar";

import { ColorModeContext, useMode } from "./theme";

/* Import MUI component starts */
import { CssBaseline, ThemeProvider } from "@mui/material";
/* Import MUI component ends */

/* Import local pages and component starts */
// Components
import Header from "./global/Header";
import SideNavBar from "./global/SideNavBar";

// Pages
import Dashboard from "./views/dashboard";
import Team from "./views/team";
import Contacts from "./views/contacts";
import Invoices from "./views/invoices";
import Form from "./views/form";
import Calendar from "./views/calendar";
import FAQ from "./views/faq";
import BarGraph from "./views/bar-graph";
import PieGraph from "./views/pie-graph";
import LineGraph from "./views/line-graph";
import GeographyGraph from "./views/geo-graph";
/* Import local pages and component ends */

function App() {
  /* Component states declaration starts */
  /* Component states declaration ends */

  /* Other hooks declaration starts */
  const [theme, toggleColorMode] = useMode();
  /* Other hooks declaration ends */

  /* ************* Component rendering. JSX code ************* */

  return (
    <ColorModeContext.Provider value={{toggleColorMode}}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <SideNavBar />
            <main className="content">
              <Header />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<BarGraph />} />
                <Route path="/pie" element={<PieGraph />} />
                <Route path="/line" element={<LineGraph />} />
                <Route path="/geography" element={<GeographyGraph />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
