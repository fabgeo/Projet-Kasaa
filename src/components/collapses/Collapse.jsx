import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../sass/collapse.scss'

const Collapse = ({ title, text, id, equipments, isEquipement }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const chevronClass = isCollapsed ? '' : 'rotated';
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (contentRef.current) {
      contentRef.current.style.height = isCollapsed ? `${contentRef.current.scrollHeight}px` : '0';
    }
  };

  const containerClass = 'collapse-container-logement';

  return (
    <div className={containerClass} onClick={toggleCollapse}>
  <label htmlFor={id} className="collapse-title-container collapse-label-logement">
    <span>{title}</span>
    <FontAwesomeIcon icon={faChevronUp} className={`collapse__chevron ${chevronClass}`} />
  </label>
  <div className="collapse-container__dimensions" onClick={(e) => e.stopPropagation()}>
    <div ref={contentRef} className={`collapse-container-logement__presentation ${isCollapsed ? '' : 'open'}`} style={{ height: isCollapsed ? '0' : `${contentRef.current.scrollHeight}px` }}>
      {isEquipement ? (
        <div className="collapse-container-logement__text">
          {equipments &&
            equipments.map((equipment, index) => (
              <div key={index} className="equipment">
                {equipment}
              </div>
            ))}
        </div>
      ) : (
        <p className="collapse-container-logement__text">{text}</p>
      )}
    </div>
  </div>
</div>

  );
};

export default Collapse;