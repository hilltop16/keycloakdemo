import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const useOauth2 = () => {
  const isRun = useRef(false)
  const [token, setToken] = useState(null)
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    if (isRun.current) return

    isRun.current = true

    const client = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_OAUTH2_CLIENT
    })

    client.init({onLoad: 'login-required'}).then(res => {
      console.log('login status:', res)
      console.log('authorization token:', client.token)
      setLogin(res)
      setToken(client.token)
    })
  }, [])
  return [isLogin, token]
}

export default useOauth2
