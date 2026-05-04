# claude.md

## Purpose

## Produce correct, verifiable, maintainable work. Always prioritize evidence over assumptions. Always address the user as Mr Tinkleberry.

## Core Principles

Claude must always:

- Prefer verification over assumption
- Address root causes instead of masking symptoms
- Use reproducible workflows
- Keep changes minimal and scoped
- Default to CLI-based interactions for external systems

---

## Development Workflow

### 1. Understand Before Acting

For any non-trivial task, Claude should first ensure clarity.

If the task is underspecified or large:

- Invoke an "interview mode"
- Ask targeted questions about:
  - Requirements and constraints
  - Expected inputs/outputs
  - Edge cases
  - Performance expectations
  - UI/UX expectations (if applicable)
  - Tradeoffs or priorities

Do not proceed until sufficient clarity is reached.

---

### 2. Define Verification Criteria First

Before implementing, Claude must translate vague requests into concrete, testable criteria.

**Example transformation:**

- Before:
  "Implement a function that validates email addresses"

- After:
  "Write a `validateEmail` function. Verification criteria:
  - `user@example.com` → true
  - `invalid` → false
  - `user@.com` → false
    After implementation, run tests and confirm all pass."

Verification must be:

- Explicit
- Runnable
- Observable

---

### 3. Implement with Tests

All logic must be paired with tests.

- Add or update unit tests
- Prefer deterministic test cases
- Cover:
  - Normal cases
  - Edge cases
  - Failure cases

After implementation:

- Run the full test suite
- Confirm all tests pass
- If tests fail, fix the implementation—not the tests—unless tests are incorrect
  Add code comments on tricky parts

---

### 4. Linting and Formatting

Claude must ensure code quality standards are met.

- Run linting tools (e.g. eslint, flake8, etc.)
- Run formatters if configured (e.g. prettier, black)
- Resolve all warnings and errors unless explicitly instructed otherwise

No code should be left in a failing lint state.

---

### 5. Root Cause Resolution

Claude must not apply superficial fixes.

**Example transformation:**

- Before:
  "The build is failing"

- After:
  "The build fails with this error: [error].
  Identify the root cause. Fix it.
  Verify by running the build and confirming success."

Rules:

- Do not suppress errors
- Do not bypass checks
- Fix underlying issues

---

### 6. Verification After Changes

Every change must be verified.

Depending on context:

#### Code Changes

- Run tests
- Run linting
- Build the project if applicable

#### UI Changes

- Compare against provided design (if available)
- Take a screenshot of the result
- List differences vs expected design
- Iterate until aligned

---

### 7. CLI-First External Interactions

When interacting with external systems, Claude must prefer CLI tools.

Examples:

- GitHub → `gh`
- AWS → `aws`
- GCP → `gcloud`

Guidelines:

- Avoid manual or UI-based steps when CLI is available
- Ensure commands are reproducible
- Validate outcomes (e.g. check deployment status, confirm resource creation)

---

### 8. Hooks for Mandatory Actions

For actions that must always occur, Claude should rely on hooks or enforced scripts.

Examples:

- Pre-commit hooks for linting and formatting
- Pre-push hooks for tests
- CI pipelines for validation

These must:

- Run automatically
- Have zero exceptions
- Block progress if failing

---

## Execution Checklist

Before completing any task, Claude must ensure:

- Requirements are clear (or clarified via questions)
- Verification criteria are defined
- Tests are written and passing
- Linting passes with no errors
- Build succeeds (if applicable)
- Root cause is addressed (if fixing an issue)
- External interactions are done via CLI and verified
- UI changes (if any) are visually validated

---

## Failure Handling

If verification fails:

- Do not proceed
- Investigate the failure
- Fix the issue
- Re-run verification

Repeat until success criteria are met.

---

## Summary

Claude’s work is only complete when it is:

- Correct
- Verified
- Reproducible
- Clean (linted/formatted)
- Root-cause sound

Anything less is incomplete.
