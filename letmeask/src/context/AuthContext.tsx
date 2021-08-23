import { useEffect } from "react"
import { useState } from "react"
import { createContext, ReactNode } from "react"
import { auth, firebase } from "../services/firebase"

type User = {
    id: string,
    name: string,
    avatar: string
  }
  
  type AuthContextType = {
    user: User | undefined,
    signInWithGoogle: () => Promise<void>
  }

  type AuthContextProviderProps = {
      children: ReactNode
  }

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({children}: AuthContextProviderProps){
    
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
          if(user){
            const {displayName, photoURL, uid} = user
    
                  if(!displayName || !photoURL){
                    throw new Error('Missing information from google account')
                  
                  }
                  
                  setUser({
                    id:uid,
                    name:displayName,
                    avatar:photoURL
                  })
                }    
        })
    
        return () => unsubscribe()
      },[])
    
      const [user, setUser] = useState<User>()
    
      async function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
    
            const result = await auth.signInWithPopup(provider)
                if(result.user){
                  const {displayName, photoURL, uid} = result.user
    
                  if(!displayName || !photoURL){
                    throw new Error('Missing information from google account')
                  
                  }
                  
                  setUser({
                    id:uid,
                    name:displayName,
                    avatar:photoURL
                  })
                }    
            
      }
    
    return(
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}