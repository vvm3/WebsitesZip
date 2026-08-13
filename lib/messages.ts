export const messages = {
    response: {
        tooManyRequests: 'Too many requests',
        originForbidden: 'Forbidden origin',
        refererForbidden: 'Forbidden referer',
        invalidRequest: 'Invalid request shape',
        methodNotAllowed: 'Method not allowed',
    },

    validation: {
        general: {
            fullNameRequired:"Full Name is required",
            maxLength: (label: string, max: number) => `${label} must be at most ${max} characters`,
            minLength: (label: string, min: number) => `${label} must be at least ${min} characters`,
            invalidEmail: 'Invalid email address',
            invalidUrl: 'Invalid URL format',
        },
        unknownFormType: 'Unknown form type',
        formValidationFailed: 'Form validation failed',
    },

    zeptoMail: {
        mailSendError: 'Failed to send email',
        tokenNotSet: `ZEPTO_SEND_MAIL_TOKEN not set`
    }
}