import { useState } from "react";

const CategoryFilter = ({ categories, onFilterChange }) => {
    // Initialize all categories as selected by default
    const [selectedCategories, setSelectedCategories] = useState(
      categories.reduce((acc, category) => ({ ...acc, [category]: true }), {})
    );
  
    // Handle checkbox change for individual categories
    const handleCheckboxChange = (category) => {
      const updatedCategories = {
        ...selectedCategories,
        [category]: !selectedCategories[category],
      };
  
      setSelectedCategories(updatedCategories);
  
      // Determine whether to filter or show all based on selection state
      const selectedCount = Object.values(updatedCategories).filter(Boolean).length;
      const shouldShowAll = selectedCount === 0 || selectedCount === categories.length;
  
      // If all selected or none selected, show all; otherwise, filter
      onFilterChange(shouldShowAll ? {} : updatedCategories);
    };
  
    return (
      <div className="py-1" role="none">
        {categories.map(category => (
          
            <label key={category} className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-1"
                checked={selectedCategories[category]}
                onChange={() => handleCheckboxChange(category)}
              />
               {/* {category.charAt(0).toUpperCase() + category.slice(1)}  */}
               {category}
            </label>
          
        ))}
      </div>
    );
  };
  
  

export default CategoryFilter;
