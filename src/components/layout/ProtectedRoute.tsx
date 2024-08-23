import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  logout,
  selectCurrentUser,
  TUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  role?: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  console.log(user);

  // const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  if (role !== undefined && role !== (user as TUser)?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  // console.log(user);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
