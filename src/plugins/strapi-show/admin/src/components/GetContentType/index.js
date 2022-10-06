import React, { useEffect, useState } from 'react'
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import strapiShowRequests from "../../api/strapi-show";

export function GetContentType({ data: { key, type }  }) {
  const [loading, setLoading] = useState()
  const [data, setData] = useState({})

  
  async function fetchData(key)  {
    if (loading === false) setIsLoading(true);
    return await strapiShowRequests.getContentType(key);
  } 

  useEffect(async () => {
    const responese = await fetchData(key)
    setData(responese);
    setLoading(false);
  },[key])

  if (loading) return <LoadingIndicatorPage />;

  return <div>
    <pre>
      <code>
       {JSON.stringify(data, null, 2)}
      </code>
    </pre>
  </div>
}