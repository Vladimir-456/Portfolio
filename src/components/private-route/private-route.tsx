import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';


const PrivateRoute = ({ children }: { children: React.ReactNode}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute