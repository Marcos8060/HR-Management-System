import React,{ useEffect } from 'react'
import { useAuth } from '@/assets/hooks/use-auth'
import { useRouter } from 'next/router';


type Props = {
    children: React.ReactNode
}

const AuthGuard = ({ children }:Props) => {
    const user = useAuth();
    const router = useRouter();


    useEffect(() => {
        const initialize = async () => {
          if (!router.isReady) {
            // Wait for the router to be ready
            return;
          }
    
          if (!user) {
            // Redirect unauthenticated users to the login page
            await router.replace("/");
          }
        };
    
        initialize();
      }, [user, router]);

  return (
    <div>{children}</div>
  )
}


export default AuthGuard