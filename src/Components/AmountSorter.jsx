import React from "react";

const AmountSorter =({onSortChange}) =>{
  
  return (
    <div className="py-1" role="none">
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onSortChange('asc'); }}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0"
      >
        Low to High
      </a>
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onSortChange('desc'); }}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0"
      >
        High to Low
      </a>
    </div>
  );
}
export default AmountSorter;