# Design Decisions & Trade-offs

This document outlines the key decisions made during the development of the Lender Frontend application, considering the 48-hour submission timeline.

## 🎯 Prioritized Requirements

Given the time constraints, I focused on delivering a high-quality, functional core experience that demonstrates the value of the matching engine immediately.

1.  **Visual Polish & UX**:

    - **Decision**: Prioritized a premium, modern design using Glassmorphism and Tailwind CSS over standard Bootstrap-like components.
    - **Why**: In fintech, trust is often established through design quality. A polished UI demonstrates attention to detail and professional standards.
    - **Implementation**: Custom gradients, backdrop blurs, and smooth transitions were implemented to make the form feel responsive and alive.

2.  **Core Matching Logic Integration**:

    - **Decision**: Focused heavily on the successful integration of the `POST /matching-engine` endpoint.
    - **Why**: The "Matching Engine" is the core value proposition. Ensuring that inputs are correctly sent and results are clearly visualized (especially the Fit Score and Rejection Reasons) was critical.

3.  **Result Visualization**:
    - **Decision**: Instead of just dumping JSON or a table, I created a visual representation of the results (Fit Score ring, color-coded cards).
    - **Why**: Users need to quickly scan which lenders they are eligible for. Visual cues (Green = Yes, Red = No) are faster to process than text.

## ⚡ Simplifications Made

To meet the deadline while ensuring a stable application, several simplifications were made:

1.  **State Management**:

    - **Decision**: Used React's local `useState` instead of a global store (Redux/Zustand).
    - **Why**: For a single-feature application (one main form flow), global state management adds unnecessary boilerplate and complexity. React state lifting was sufficient.

2.  **Form Validation**:

    - **Decision**: Relied primarily on HTML5 built-in validation (types, required attributes) and basic handling.
    - **Why**: Implementing a full schema validation library (like Zod + React Hook Form) would have consumed significant time. The current setup ensures data integrity for the API without over-engineering.

3.  **Environment Configuration**:

    - **Decision**: Hardcoded the API base URL in `axios.ts` for the prototype.
    - **Why**: To speed up the "clone and run" process for reviewers without needing to set up `.env` files.

4.  **Testing Strategy**:
    - **Decision**: Prioritized Manual Verification and Linting over writing comprehensive unit/E2E test suites.
    - **Why**: In a hackathon/rapid prototype scenario, visible functionality and UI often take precedence. The build pipeline ensures type safety (TypeScript) and code quality (ESLint).

## 🚀 Future Improvements

With more time, I would invest in the following areas to take this application from a prototype to production-grade:

1.  **Comprehensive Testing**:

    - Implement **Vitest** for unit testing utility functions and components.
    - Add **Cypress** or **Playwright** for End-to-End testing of the form submission flow.

2.  **Enhanced Form Experience**:

    - Integrate **React Hook Form** with **Zod** schema validation for robust, real-time error feedback and dirty state management.
    - Add step-by-step "Wizard" mode for longer forms to improve completion rates.

3.  **Infrastructure & Security**:

    - Move API endpoints to environment variables (`.env`).
    - Implement an API Gateway or Proxy to handle CORS properly in production.
    - Add authentication checks if the API requires it.

4.  **Accessibility (a11y)**:
    - Conduct a full audit using Lighthouse or Axe.
    - Ensure full keyboard navigation support and ARIA labels for all interactive elements.
