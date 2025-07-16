import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { Helmet } from "react-helmet";
import data from "./Data/Data.json";

export default function App() {
  return (
    <div className="App flex flex-col bg-light-white-third dark:bg-default font-sans tracking-tight">
      <BrowserRouter>
        <Helmet>
          <title>{data.app}</title>
          <meta name="description" content={data.intro}></meta>
        </Helmet>
        <Layout />
      </BrowserRouter>
    </div>
  );
}
