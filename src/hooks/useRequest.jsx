import { useState } from "react";

const API_KEY = "YInf8MAdE4LBuXVkn_T0EwyOGxOlPYQ_YvKuVitw0clO7uIw7w";
const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (body, custom) => {
    setLoading(true);
    const res = await fetch(url || custom, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();
    setLoading(false);

    return data;
  };

  return { loading, sendRequest };
};

export default useRequest;
