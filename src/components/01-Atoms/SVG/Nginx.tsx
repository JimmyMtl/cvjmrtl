type Props = {
    className?: string
}

const Nginx = ({className}: Props) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.56 170.81">
            <path
                d="M74.23,0H75c2.7.52,4.88,2.15,7.19,3.47q19,10.91,38,21.84l26.08,15c.42.25.83.51,1.23.79a4.44,4.44,0,0,1,2.1,4q0,40.2,0,80.41A4.79,4.79,0,0,1,147,130c-3,1.79-6.1,3.55-9.17,5.31q-17.48,10-34.92,20.1c-8.41,4.83-16.8,9.7-25.22,14.52a5.74,5.74,0,0,1-5.93,0q-28.15-16.11-56.26-32.32c-4.26-2.45-8.49-4.94-12.78-7.34-1.91-1.08-2.91-2.5-2.66-4.72V45.12a4.34,4.34,0,0,1,2.55-4.53Q15.79,33,29,25.42q19-11,38.09-21.93c1.47-.86,3-1.64,4.44-2.53A15,15,0,0,1,74.23,0Z"
                fill="#009828"/>
            <path
                d="M97.78,99.75A2,2,0,0,0,98,98.39q0-23,0-46.06a9.57,9.57,0,1,1,19.13,0c0,21.73-.06,43.46.06,65.18a9.7,9.7,0,0,1-8.47,9.89c-6.39.79-11.8-1.09-16-6.13q-14.25-17-28.54-34C59.78,82,55.42,76.78,51.05,71.55c-.28-.33-.59-.64-.92-1A2,2,0,0,0,50,71.9q0,22.78,0,45.57c0,3.47-1.09,6.36-4,8.42-5.41,3.86-13.34,1.14-15-5.16a13.25,13.25,0,0,1-.34-3.5c0-21.24.06-42.48,0-63.72,0-6.2,3.94-10.64,10.38-10.84,6.13-.18,10.9,2.41,14.77,7q13.76,16.5,27.59,32.93l13.46,16C97.11,99,97.43,99.37,97.78,99.75Z"
                fill="#fefefe"/>
        </svg>
    );
};

export default Nginx;