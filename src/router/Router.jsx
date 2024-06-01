import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import React from "react";

import PageNotFound from "src/Pages/404";
import AdminPage from "src/Pages/AdminPage";
import AuthPage from "src/Pages/AuthPage";
import DashboardPage from "src/Pages/DashboardPage";
import HomePage from "src/Pages/HomePage";
import getProfile from "src/Services/user";

function Router() {
  const { data, isLoading, error } = useQuery(
    ["profile"],
    getProfile
  );
  console.log({ data, isLoading, error });

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
