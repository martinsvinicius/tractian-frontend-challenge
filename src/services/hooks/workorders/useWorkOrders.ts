import { useQuery } from 'react-query';
import { WorkOrder } from '../../../models/WorkOrder';
import { api } from '../../api';

export async function getWorkOrders(): Promise<WorkOrder[]> {
  const { data } = await api.get<WorkOrder[]>('/workorders');

  return data;
}

export function useWorkOrders() {
  return useQuery('workorders', getWorkOrders);
}
