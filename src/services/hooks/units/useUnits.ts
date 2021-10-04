import { useQuery } from 'react-query';
import { Unit } from '../../../models/Unit';
import { api } from '../../api';

export async function getUnits(): Promise<Unit[]> {
  const { data } = await api.get<Unit[]>('/units');

  return data;
}

export function useUnits() {
  return useQuery('units', getUnits, {
    staleTime: 1000 * 60 * 5, //5 minutes
  });
}
