import { useQuery } from 'react-query';
import { User } from '../../../models/User';
import { api } from '../../api';

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<User[]>('/users');

  return data;
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 60 * 5, //5 minutes
  });
}
