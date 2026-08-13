export const messages = {
    validation: {
        general: {
            fullNameRequired:"Full Name is required",
            maxLength: (label: string, max: number) => `${label} must be at most ${max} characters`,
            minLength: (label: string, min: number) => `${label} must be at least ${min} characters`,
            invalidEmail: 'Invalid email address',
            invalidUrl: 'Invalid URL format',
            websiteUrlRequired: 'Website URL is required',
            phoneNumberRequired: 'Phone Number is required',
            emailRequired: 'Email is required',
        },
        demoRequest: {
            selectSolution: 'Please select a solution',
            instituteRequired: 'Institute is required',
        },
        unknownFormType: 'Unknown form type',
        formValidationFailed: 'Form validation failed',
    },
}