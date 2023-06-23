import React, { useState, useEffect, useRef } from "react";

const Protected = ({token}) => {
  const isRun = useRef(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    fetch('/api/auth/oauth2', options).then(res => res.json()).then(user => setData(user))
  }, [])

  return data ? <div>protected {data.email}</div> : <div>protected no data</div>
}

export default Protected