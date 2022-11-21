import { useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("AuthUsers")) || [];
  };

  const authReducer = (state, action) => {
    switch (
      action.type // si la action es case '.....' return XXXX
    ) {
      case "[UPDATEUSER] UpdateUser": // lo que tengo que regresar es un nuevo state.
        return [...state, action.payload.username]; // con el action.payload tenemos el nuevo username. Yo disparo una action, esta action es del tipo ChangeUsername y tiene que tener el payload que quiero insertar.
        
      case "Login":
        return {
          auth: true,
          username: action.payload.username,
          password: action.payload.password,
        };
      case "Logout":
        return {
          auth: false,
          username: "",
          password: "",
        };

      default:
        return state;
    }
  };

  const [auth, dispatch] = useReducer(authReducer, init);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};