import React, { useState } from "react";

const sizes = ["sm", "md", "xl", "2xl", "3xl", "4xl"];

interface ParaProps {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Size: React.FC<ParaProps> = ({ setFormData }) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSizeButtonClick = (size: string) => {
    setSelectedSizes((prevSelectedSize) => {
      if (prevSelectedSize.includes(size)) {
        return prevSelectedSize.filter((s) => s !== size);
      } else {
        return [...prevSelectedSize, size];
      }
    });
  };

  const handleSubmit = () => {
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      size: selectedSizes.join(","),
    }));
  };

  return (
    <div>
      {sizes.map((size) => (
        <button
          key={size}
          className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4 mb-5 mr-5 
                ${selectedSizes.includes(size) ? "bg-gray-500 text-white" : ""}`}
          onClick={() => handleSizeButtonClick(size)}
        >
          {size}
        </button>
      ))}
      <button
        onClick={handleSubmit}
        className="hover:bg-slate-500 hover:text-white py-1 px-3 cursor-pointer rounded transition"
      >
        Apply sizes
      </button>
    </div>
  );
};

export default Size;
