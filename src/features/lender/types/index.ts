export interface LenderFormData {
  business_name: string;
  geographic_location: string;
  industry_type: string;
  revenue: number;
  equipment_type: string;
  business_duration: number;
  paynet_score: number;
  personal_guarantor_name: string;
  fico_score: number;
  trade_lines: number;
  credit_history_flags: string;
  loan_amount: number;
}

export interface MatchingResult {
  id: number;
  eligibility: "YES" | "NO";
  matching_tier: string | null;
  rejection_reason: string | null;
  fit_score: number;
  lender_policy_id: number;
  business_name: string;
  personal_guarantor_name: string;
  business_id: number;
  personal_guarantor_id: number;
}

export interface MatchingResponse {
  status: string;
  message: string;
  data: MatchingResult[];
}
