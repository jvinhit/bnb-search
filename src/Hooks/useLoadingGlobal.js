import { useContext } from 'react';
import { LoadingContext } from '../Context/LoadingContext';

export default function useLoadingGlobal() {
  return useContext(LoadingContext);
}
