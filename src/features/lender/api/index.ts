import { axiosInstance } from '@/lib/axios';
import type { LenderFormData } from '../types';

export const createMatchingEngine = async (data: LenderFormData) => {
  const response = await axiosInstance.post('/api/v1/matching-engine', data);
  return response.data;
};
