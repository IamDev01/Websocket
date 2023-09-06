import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;

    if (pathname === '/') {
      // Redireciona para a rota do cliente se a URL for '/'
      router.push('/cliente');
    } else if (pathname === '/operador') {
      // Renderiza a página do operador
      return <Operador />;
    }
  }, []);

  return <></>;
}