// Site-wide feature flags.

// Lead form. Set to true to start collecting driver information.
// Before enabling:
//   1. Publish a privacy policy (the form collects name, phone, email)
//   2. Confirm where submissions go (Netlify Forms dashboard, or a Formspree endpoint)
//   3. Define the qualified-lead standard so you know what you're selling
export const LEAD_FORM_ENABLED = false;
