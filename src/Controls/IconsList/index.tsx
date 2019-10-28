import React from 'react';

interface Props {
    icons: string[]
    addPatternIcon: (icon: string) => void
}


const IconsList:React.FC<Props> = ({icons, addPatternIcon}) => (
    <ul>
        {icons.map((icon, index) => <li><img onClick={() => addPatternIcon(icon)} key={icon} src={icon} alt={`icon ${index}`}/></li>)}
    </ul>
);

export default IconsList
