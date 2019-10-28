import React from 'react';

import './IconsList.scss'

interface Props {
    icons: string[]
    addPatternIcon: (icon: string) => void
}


const IconsList:React.FC<Props> = ({icons, addPatternIcon}) => (
    <ul className="pb__icons-list">
        {icons.map((icon, index) => <li key={icon} className="pb__icons-item"><img className="pb__icons-image" onClick={() => addPatternIcon(icon)} src={icon} alt={`icon ${index}`}/></li>)}
    </ul>
);

export default IconsList
