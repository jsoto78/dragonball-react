import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const ManScreen = lazy(() => import("../pages/ManScreen"));
const WomanScreen = lazy(() => import("../pages/WamanScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const CharterScreen = lazy(() => import("../pages/CharterScreen"));
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route end path="/mans" element={<ManScreen />} />
          <Route end path="/womans" element={<WomanScreen />} />
          <Route end path="/search" element={<SearchScreen />} />
          <Route end path="/caracter/:id" element={<CharterScreen />} />
          <Route end path="*" element={<Navigate to="/mans" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
