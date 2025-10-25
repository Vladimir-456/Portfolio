import { Navigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';


const PrivateRoute = ({ children }: { children: React.ReactNode}) => {
  const user = useUserStore((state) => state.user);
  console.log(user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute