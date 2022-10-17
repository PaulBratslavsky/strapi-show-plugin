/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from 'react';
import strapiShowRequests from "../../api/strapi-show";
import { toCammelCase } from '../../utils/toCammelCase';

import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import DataAccordion from '../../components/DataAccordion';
import DataModal from '../../components/DataModal';
import { GetContentType } from '../../components/GetContentType';
import { GetControllerCode } from '../../components/GetControllerCode';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState({});
  const [data, setData] = useState({})

  const fetchData = async (key) => {
    if (loading === false) setLoading(true);
    return await strapiShowRequests.getItemKeys(key);
  }

  function openModal(data) {
    setSelected(data)
    setShowModal(true)
  }

  function getComponent(data) {
    switch (toCammelCase(data.type)) {
      case 'contentTypes':
        return <GetContentType data={data} />
      case 'controllers': 
        return <GetControllerCode data={data} />
      default:
        return null;
    }
  }

  useEffect(async () => {
    const data = await Promise.all([
      fetchData("controllers"),
      fetchData("services"),
      fetchData("policies"),
      fetchData("middlewares"),
      fetchData("content-types"),
      fetchData("routes"),
    ])

    setData(data.reduce((acc, cur) => ({ ...acc, ...cur }), {}))
    setLoading(false);

  }, [])

  if (loading) return <LoadingIndicatorPage />;

  return (
    <div>
      <DataAccordion
        name="Middlewares"
        data={data['middlewares']}
        onClick={openModal}
      />
      <DataAccordion
        name="Policies"
        data={data['policies']}
        onClick={openModal}
      />
      <DataAccordion
        name="Routes"
        data={data['routes']}
        onClick={openModal}
      />
      <DataAccordion
        name="Content Types"
        data={data['content-types']}
        onClick={openModal}
      />
      <DataAccordion
        name="Services"
        data={data['services']}
        onClick={openModal}
      />
      <DataAccordion
        name="Controllers"
        data={data['controllers']}
        onClick={openModal}
      />

      {showModal && <DataModal setShowModal={setShowModal} name={selected.type.toUpperCase()}>
        {getComponent(selected)}
      </DataModal>}

    </div>
  );
};

export default HomePage;
