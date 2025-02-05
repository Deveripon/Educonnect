function LoadingSpinner() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <circle
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                stroke-width='4'
                opacity='0.3'
            />
            <circle
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                stroke-width='4'
                stroke-linecap='round'
                stroke-dasharray='31.4 31.4'
                stroke-dashoffset='31.4'>
                <animate
                    attributeName='stroke-dashoffset'
                    values='31.4;0;31.4'
                    dur='1s'
                    repeatCount='indefinite'
                />
                <animateTransform
                    attributeName='transform'
                    type='rotate'
                    from='0 12 12'
                    to='360 12 12'
                    dur='1s'
                    repeatCount='indefinite'
                />
            </circle>
        </svg>
    );
}

export default LoadingSpinner;
