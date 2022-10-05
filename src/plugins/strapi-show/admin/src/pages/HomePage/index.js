/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from 'react';
import strapiShowRequests from "../../api/strapi-show"
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import DataAccordion from '../../components/DataAccordion';
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

  }, [])

  if (isLoading) return <LoadingIndicatorPage />;
  return (
    <div>
      <DataAccordion
        name="Middlewares"
        data={data['middlewares']}
      />
      <DataAccordion
        name="Policies"
        data={data['policies']}
      />
      <DataAccordion
        name="Content Types"
        data={data['content-types']}
      />
      <DataAccordion
        name="Services"
        data={data['services']}
      />
      <DataAccordion
        name="Controllers"
        data={data['controllers']}
      />
    </div>
  );
};

export default HomePage;
