# Lender Frontend Application

A modern, responsive web application for lender matching and eligibility assessment. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Local Development Setup

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:

    ```bash
    cd lender-frontend
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Start the development server**:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

4.  **Build for production**:

    ```bash
    npm run build
    ```

5.  **Lint the codebase**:
    ```bash
    npm run lint
    ```

## 🏗️ Architecture Overview

This project follows a feature-based architecture to ensure scalability and maintainability.

### Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Folder Structure

```
src/
├── features/           # Feature-based modules
│   └── lender/         # Lender matching feature
│       ├── api/        # API integration logic
│       ├── components/ # React components (LenderForm, MatchingResults)
│       └── types/      # TypeScript interfaces
├── components/         # Shared/Common components
├── lib/                # Library configurations (Axios, utils)
├── App.tsx             # Main application entry point
└── main.tsx            # Application bootstrap
```

### Key Components

- **`LenderForm`**: The primary input form for user data. Handles state, validation, and API submission.
- **`MatchingResults`**: Displays the eligibility results, fit scores, and rejection reasons in a visual format.

## 📡 API Documentation

The application integrates with a backend Matching Engine API.

### Endpoint

**POST** `http://127.0.0.1:8000/api/v1/matching-engine`

### Request Body (`LenderFormData`)

The API expects a JSON object with the following fields:

```json
{
  "business_name": "Acme Corp",
  "geographic_location": "New York, NY",
  "industry_type": "Manufacturing",
  "revenue": 500000.0,
  "equipment_type": "Excavator",
  "business_duration": 4,
  "paynet_score": 680,
  "personal_guarantor_name": "John Doe",
  "fico_score": 720,
  "trade_lines": 10,
  "credit_history_flags": "None",
  "loan_amount": 10000
}
```

### Response Format (`MatchingResponse`)

The API returns a JSON object containing the matching results:

```json
{
  "status": "success",
  "message": "",
  "data": [
    {
      "id": 11,
      "eligibility": "NO",
      "matching_tier": null,
      "rejection_reason": "App only up to $150,000...",
      "fit_score": 0,
      "lender_policy_id": 41,
      "business_name": "Acme Corp",
      "personal_guarantor_name": "John Doe",
      ...
    },
    {
      "id": 13,
      "eligibility": "YES",
      "matching_tier": null,
      "rejection_reason": null,
      "fit_score": 100,
      "lender_policy_id": 43,
       ...
    }
  ]
}
```
