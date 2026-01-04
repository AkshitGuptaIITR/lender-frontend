import type { MatchingResult } from "../types";
import { cn } from "@/lib/utils";

interface MatchingResultsProps {
  results: MatchingResult[];
  onReset: () => void;
}

export function MatchingResults({ results, onReset }: MatchingResultsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
            Matching Results
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Based on your application, here are the lender eligibility results.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/50 p-6 sm:p-8">
          <div className="grid gap-6">
            {results.map((result) => (
              <div
                key={result.id}
                className={cn(
                  "flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border transition-all duration-200",
                  result.eligibility === "YES"
                    ? "bg-green-50/50 border-green-200 hover:shadow-md hover:border-green-300"
                    : "bg-red-50/50 border-red-200 hover:shadow-md hover:border-red-300"
                )}
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <span
                      className={cn(
                        "px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide",
                        result.eligibility === "YES"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      )}
                    >
                      Lender Policy #{result.lender_policy_id}
                    </span>
                    {result.matching_tier && (
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {result.matching_tier}
                      </span>
                    )}
                  </div>

                  {result.eligibility === "NO" && result.rejection_reason && (
                    <div className="mt-2 text-sm text-red-700 space-y-1">
                      <p className="font-semibold text-xs uppercase text-red-400">
                        Rejection Reasons:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-1">
                        {result.rejection_reason
                          .split(",")
                          .map((reason, idx) => (
                            <li key={idx} className="leading-snug">
                              {reason.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col items-end min-w-[120px]">
                  <span className="text-xs font-medium text-gray-500 uppercase mb-1">
                    Fit Score
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          className="text-gray-200"
                          strokeWidth="4"
                          stroke="currentColor"
                          fill="transparent"
                          r="20"
                          cx="24"
                          cy="24"
                        />
                        <circle
                          className={cn(
                            "transition-all duration-1000 ease-out",
                            result.fit_score > 70
                              ? "text-green-500"
                              : result.fit_score > 40
                              ? "text-yellow-500"
                              : "text-red-500"
                          )}
                          strokeWidth="4"
                          strokeDasharray={2 * Math.PI * 20}
                          strokeDashoffset={
                            2 * Math.PI * 20 * (1 - result.fit_score / 100)
                          }
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="20"
                          cx="24"
                          cy="24"
                        />
                      </svg>
                      <span className="absolute text-sm font-bold text-gray-700">
                        {result.fit_score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onReset}
              className="px-6 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Submit New Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
