import { axiosInstance } from '@/lib/axios';
import type { LenderFormData, MatchingResponse } from '../types';

export const createMatchingEngine = async (data: LenderFormData) => {
  const response = await axiosInstance.post<MatchingResponse>('/api/v1/matching-engine', data);
  return response.data;
};
