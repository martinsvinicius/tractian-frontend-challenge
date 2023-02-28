import { useQuery } from 'react-query';
import { Asset } from '../../../models/Asset';
import { api } from '../../api';

export async function getAssets(): Promise<Asset[]> {
  const { data } = await api.get<Asset[]>('/assets');

  return data;
}

export function useAssets() {
  return useQuery('assets', getAssets);
}
