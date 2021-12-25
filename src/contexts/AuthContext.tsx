import React from "react";

interface IAuth {
  userId: string;
  isLoggedIn: boolean;
}

export interface IAuthContext {
  auth: IAuth;
  setAuth: (state: IAuth) => void;
}

export const AuthContext: React.Context<IAuthContext> =
  React.createContext<IAuthContext>({ 
    auth: {userId: "", isLoggedIn: false}, 
    setAuth: () => {} 
  });

export const AuthContextProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [auth, setAuth] = React.useState({ userId: "", isLoggedIn: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
