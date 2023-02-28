import { useQuery } from 'react-query';
import { Asset } from '../../../models/Asset';
import { api } from '../../api';

export async function getAssetById(id?: number): Promise<Asset> {
  const { data } = await api.get<Asset>(`/assets/${id}`);

  return data;
}

export function useFindAsset(assetId?: number) {
  return useQuery('assets', () => getAssetById(assetId), {
    enabled: !!assetId,
  });
}
