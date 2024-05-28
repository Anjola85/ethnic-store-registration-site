"use client";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import styles from "../styles/dropdown.module.css";

interface DropdownProps {
  onChange: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select your business type");

  const options = [
    "Grocery Store",
    "Restaurant",
    "Convenience",
    "Beauty Store",
    // "Independent Owner (under 5 employees)",
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_header} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <MdArrowDropDown fontSize={20} />
      </div>
      {isOpen && (
        <div className={styles.dropdown_list}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.dropdown_item}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
