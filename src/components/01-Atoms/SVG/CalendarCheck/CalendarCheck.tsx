type Props = {
    className: string
}
const CalendarCheck = ({className}: Props) => {
    return (
        <svg width="32" height="37" className={className} viewBox="0 0 32 37" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M31.1429 11.5625H0.857143C0.383786 11.5625 0 11.1742 0 10.6953V8.09375C0 6.17799 1.535 4.625 3.42857 4.625H6.85714V0.867188C6.85714 0.388283 7.24093 0 7.71429 0H10.5714C11.0448 0 11.4286 0.388283 11.4286 0.867188V4.625H20.5714V0.867188C20.5714 0.388283 20.9552 0 21.4286 0H24.2857C24.7591 0 25.1429 0.388283 25.1429 0.867188V4.625H28.5714C30.465 4.625 32 6.17799 32 8.09375V10.6953C32 11.1742 31.6162 11.5625 31.1429 11.5625ZM0.857143 13.875H31.1429C31.6162 13.875 32 14.2633 32 14.7422V33.5312C32 35.447 30.465 37 28.5714 37H3.42857C1.535 37 0 35.447 0 33.5312V14.7422C0 14.2633 0.383786 13.875 0.857143 13.875ZM24.664 20.8087L22.6519 18.7565C22.3186 18.4165 21.7759 18.4142 21.4398 18.7516L13.8657 26.3527L10.5814 23.0031C10.2481 22.6631 9.70529 22.6608 9.36922 22.9982L7.34086 25.0339C7.00479 25.3712 7.00257 25.9202 7.336 26.2602L13.2361 32.2777C13.5694 32.6177 14.1121 32.62 14.4482 32.2826L24.6591 22.035C24.9952 21.6978 24.9974 21.1487 24.664 20.8087Z"
                />
        </svg>

    );
};

export default CalendarCheck;