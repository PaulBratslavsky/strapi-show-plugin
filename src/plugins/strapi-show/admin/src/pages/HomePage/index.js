/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from 'react';
import strapiShowRequests from "../../api/strapi-show"
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import DataTable from '../../components/DataTable';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({})

  const fetchData = async (key) => {
    if (isLoading === false) setIsLoading(true);
    return await strapiShowRequests.getItemKeys(key);
  }

  useEffect(async () => {
    const data = await Promise.all([
      fetchData("controllers"),
      fetchData("services"),
      fetchData("policies"),
      fetchData("middlewares"),
      fetchData("content-types"),
    ])

    setIsLoading(false);
    setData(data.reduce((acc, cur) => ({ ...acc, ...cur }), {}))

  },[])

  if (isLoading) return <LoadingIndicatorPage />;
  return (
    <div>
      <DataTable data={data['middlewares']} name="Middlewares"/>
      <DataTable data={data['policies']} name="Polocies" />
      <DataTable data={data['content-types']} name="Content Types" />
      <DataTable data={data['services']} name="Services" />
      <DataTable data={data['controllers']} name="Controllers" />
    </div>
  );
};

export default HomePage;
