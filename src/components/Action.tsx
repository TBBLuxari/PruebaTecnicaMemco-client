import React from 'react';

interface ActionButtonProps {
  onClick: (event: React.FormEvent) => void;
  iconSrc: string;
  altText: string;
  buttonText: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, iconSrc, altText, buttonText }) => {
  return (
    <button className='Action' onClick={onClick}>
      <img className='icon small' src={iconSrc} alt={altText} />
      <div>{buttonText}</div>
    </button>
  );
};

export default ActionButton;
