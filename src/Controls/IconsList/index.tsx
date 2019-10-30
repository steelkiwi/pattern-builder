import React from 'react';

interface Props {
  icons: string[];
  onIconClick: (icon: string) => void;
}

const IconsList: React.FC<Props> = ({icons, onIconClick}) => (
  <ul className="pb__icons-list">
    {icons.map((icon, index) => {
      const handleClick = () => {
        onIconClick(icon)
      };

      return (
        <li key={icon} className="pb__icons-item">
          <img className="pb__icons-image"
               onClick={handleClick}
               src={icon}
               alt={`icon-${index}`}/>
        </li>
      )
    })}
  </ul>
);

export default IconsList
