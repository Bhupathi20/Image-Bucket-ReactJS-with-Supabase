import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ujdcmqlvcyftynjoyfor.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZGNtcWx2Y3lmdHluam95Zm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2NzI5MzIsImV4cCI6MTk5ODI0ODkzMn0.KOc2Uh5QsFcPwyNFxK72jXJM2qhoR0qL6T1_K38BluI"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
