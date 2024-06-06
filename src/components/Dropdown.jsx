import { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(true);
    onSelect(option); 
  };

  return (
    <div className="dropdown mb-7">
      {/* <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption || ''}
      </button> */}
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
           <li
           key={option}
           className={`p-2 px-3 cursor-pointer rounded-xl border-[1px] ${
             selectedOption === option ? 'bg-primary text-text' : 'border-primary text-text'
           }`}
           onClick={() => handleOptionClick(option)}
         >
           {option}
         </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
