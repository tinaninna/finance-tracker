import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Profile from "./pages/Profile";

// Contexts
import TransactionProvider from "./context/TransactionContext";
import ThemeProvider from "./context/ThemeContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <TransactionProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* Main Layout Wrapper */}
            <Route path="/" element={<MainLayout />}>
              {/* Pages */}
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="expense" element={<Expense />} />
              <Route path="profile" element={<Profile />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </TransactionProvider>
    
  );
}

export default App;
