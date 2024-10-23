import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Navigation/Nav";
import Form from "./Components/FormComponent/Form";
import { HookFormDesc } from "./HookFormDesc";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Route for React-HookForm description */}
        <Route path="/" element={<HookFormDesc />} />
        
        {/* Route for Form page */}
        <Route path="/form" element={<Form />} />

        {/* You can add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
