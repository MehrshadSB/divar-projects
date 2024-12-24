import { useQuery } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";

import PageNotFound from "src/Pages/404";
import AdminPage from "src/Pages/AdminPage";
import AuthPage from "src/Pages/AuthPage";
import DashboardPage from "src/Pages/DashboardPage";
import HomePage from "src/Pages/HomePage";
import { getProfile } from "src/Services/user";
import Loader from "src/Components/modules/Loader";
import PostDetails from "src/Pages/PostDetails";

function Router() {
  const { data, isLoading, error } = useQuery(
    ["profile"],
    getProfile
  );
  
  console.log({ data, isLoading, error });

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/auth"
        element={
          data ? <Navigate to="/dashboard" /> : <AuthPage />
        }
      />
      <Route
        path="/dashboard"
        element={
          data ? <DashboardPage /> : <Navigate to="/Auth" />
        }
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
