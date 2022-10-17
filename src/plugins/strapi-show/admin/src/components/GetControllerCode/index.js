import React, { useEffect, useState } from 'react'
import strapiShowRequests from "../../api/strapi-show";

export function GetControllerCode({ data: { key, type } }) {
  const [loading, setLoading] = useState()
  const [data, setData] = useState({})

  async function fetchData(key) {
    if (loading === false) setIsLoading(true);
    return await strapiShowRequests.getControllerCode(key);
  }

  useEffect(async () => {
    const responese = await fetchData(key)
    setData(responese);
    setLoading(false);
  }, [key])

  if (loading) return <LoadingIndicatorPage />;

  console.log(data);

  return (
    <div>Show controller Code</div>
  )
}
