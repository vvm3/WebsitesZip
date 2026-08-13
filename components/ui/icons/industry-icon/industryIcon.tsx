import { JSX, SVGProps } from "react"

/**
 * Logo Component
 *
 * Renders the application's logo as an SVG or image.
 *
 * @component
 * @example
 * return (
 *   <SeratekLogo width={120} height={40} alt="My App Logo" />
 * )
 *
 * @param {Object} props - Component props
 * @param {number} [props.width] - Width of the logo (optional)
 * @param {number} [props.height] - Height of the logo (optional)
 * @param {string} [props.alt] - Alternative text for the logo (optional)
 * @returns {JSX.Element} The rendered logo element
  */


export const IndustryIconEngineering = () => {
    return (
        <>

            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_7209_15928)">
                    <path d="M31.8017 63.6034C49.3653 63.6034 63.6034 49.3653 63.6034 31.8017C63.6034 14.2381 49.3653 0 31.8017 0C14.2381 0 0 14.2381 0 31.8017C0 49.3653 14.2381 63.6034 31.8017 63.6034Z" fill="#E4A963" />
                    <path d="M32.0002 38.1999L38.0826 41.8705C38.5296 42.1411 39.0826 41.7411 38.9649 41.2352L37.3532 34.3175L42.7179 29.6705C43.1061 29.3293 42.9061 28.6822 42.3767 28.6352L35.3061 28.0352L32.5414 21.5175C32.3414 21.0352 31.6591 21.0352 31.4591 21.5175L28.6944 28.0352L21.6238 28.6352C21.1061 28.6822 20.8944 29.3293 21.2944 29.6705L26.6591 34.3175L25.0473 41.2352C24.9297 41.7411 25.4826 42.1411 25.9297 41.8705L32.0002 38.1999Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_7209_15928">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>


        </>
    )
}

export const IndustryIconManagement = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <g clipPath="url(#clip0_7209_15935)">
                    <g clipPath="url(#clip1_7209_15935)">
                        <path d="M31.8017 63.6034C49.3653 63.6034 63.6034 49.3653 63.6034 31.8017C63.6034 14.2381 49.3653 0 31.8017 0C14.2381 0 0 14.2381 0 31.8017C0 49.3653 14.2381 63.6034 31.8017 63.6034Z" fill="#B9D95D" />
                        <path d="M32.0003 41.4119L30.9886 40.4001C29.6003 39.0119 29.6121 36.7531 31.0121 35.3884L32.0003 34.4237C31.5415 34.3766 31.2003 34.3531 30.8239 34.3531C27.6827 34.3531 21.4121 35.9296 21.4121 39.059V41.4119H32.0003ZM30.8239 32.0001C33.4239 32.0001 35.5298 29.8943 35.5298 27.2943C35.5298 24.6943 33.4239 22.5884 30.8239 22.5884C28.2239 22.5884 26.118 24.6943 26.118 27.2943C26.118 29.8943 28.2239 32.0001 30.8239 32.0001Z" fill="white" />
                        <path d="M36.9177 41.1532C36.4589 41.612 35.706 41.612 35.2472 41.1532L32.8119 38.6943C32.3648 38.2355 32.3648 37.5061 32.8119 37.059L32.8236 37.0473C33.2824 36.5885 34.0236 36.5885 34.4707 37.0473L36.0824 38.659L41.2942 33.412C41.753 32.9532 42.4942 32.9532 42.953 33.412L42.9648 33.4238C43.4119 33.8826 43.4119 34.612 42.9648 35.059L36.9177 41.1532Z" fill="white" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_7209_15935">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_7209_15935">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </>
    )
}

export const IndustryIconAutonomous = () => {
    return (
        <>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_7209_15945)">
                    <g clipPath="url(#clip1_7209_15945)">
                        <path d="M31.8017 63.6034C49.3653 63.6034 63.6034 49.3653 63.6034 31.8017C63.6034 14.2381 49.3653 0 31.8017 0C14.2381 0 0 14.2381 0 31.8017C0 49.3653 14.2381 63.6034 31.8017 63.6034Z" fill="#F29A9A" />
                        <path d="M33.5876 41.5648C32.6935 42.3766 31.317 42.3766 30.4229 41.5531L30.2935 41.4354C24.117 35.8472 20.0817 32.1884 20.2347 27.6237C20.3053 25.6237 21.3288 23.706 22.9876 22.5766C26.0935 20.459 29.9288 21.4472 31.9994 23.8707C34.07 21.4472 37.9053 20.4472 41.0111 22.5766C42.67 23.706 43.6935 25.6237 43.7641 27.6237C43.9288 32.1884 39.8817 35.8472 33.7053 41.459L33.5876 41.5648Z" fill="white" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_7209_15945">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_7209_15945">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </>
    )
}

export const IndustryIconUniversity = () => {
    return (
        <>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_7209_15953)">
                    <g clipPath="url(#clip1_7209_15953)">
                        <g clipPath="url(#clip2_7209_15953)">
                            <path d="M31.8017 63.6034C49.3653 63.6034 63.6034 49.3653 63.6034 31.8017C63.6034 14.2381 49.3653 0 31.8017 0C14.2381 0 0 14.2381 0 31.8017C0 49.3653 14.2381 63.6034 31.8017 63.6034Z" fill="#AA94DB" />
                            <mask id="mask0_7209_15953" maskUnits="userSpaceOnUse" x="20" y="20" width="24" height="24">
                                <path d="M43.2943 20.7061H20.7061V43.2943H43.2943V20.7061Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_7209_15953)">
                                <path d="M40.1417 42.6055C40.1417 42.9859 39.8334 43.2942 39.4531 43.2942H24.4861C24.1058 43.2942 23.7975 42.9859 23.7975 42.6055V41.1364C23.7975 40.756 24.1058 40.4477 24.4861 40.4477H39.4531C39.8334 40.4477 40.1417 40.756 40.1417 41.1364V42.6055ZM42.9038 20.774C42.6244 20.6402 42.2902 20.7088 42.0867 20.942L36.624 27.2042L32.5766 21.0177C32.4492 20.8233 32.2325 20.7061 32.0002 20.7061C31.7679 20.7061 31.5511 20.8232 31.4239 21.0177L27.3749 27.2066L21.9124 20.9827C21.7082 20.7502 21.3743 20.6821 21.0954 20.8166C20.8169 20.9511 20.662 21.2549 20.7171 21.5593L23.7472 38.3205C23.8065 38.6484 24.0918 38.8868 24.4249 38.8868H39.5754C39.9087 38.8868 40.1941 38.6482 40.2532 38.3203L43.2833 21.517C43.3384 21.2122 43.183 20.908 42.9038 20.774Z" fill="white" />
                            </g>
                        </g>
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_7209_15953">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_7209_15953">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                    <clipPath id="clip2_7209_15953">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </>
    )
}