import { useContext } from 'react';
import AuthContext from '../components/context/AuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
