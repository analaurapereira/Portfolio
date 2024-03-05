import { ReactNode } from 'react';

interface ContainerProps {
    customClass?: string;
    children: ReactNode;
}

function CustomContainer(props: ContainerProps) {
    return (
        <div>
            {props.children}  
        </div>            
    );
}

export default CustomContainer;