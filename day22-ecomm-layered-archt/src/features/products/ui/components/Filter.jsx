import React from "react";
import { useAllCategories } from "../../hooks/useProductHook";

const FilterComponent = ({search,setSearch,category,setCategory}) => {

  let {data,isPending} = useAllCategories();

  
  if(isPending) return <h1>Loading categories..</h1>

  return (
    <div className="mb-8 flex w-full flex-col gap-4 rounded-2xl  p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">

      {/* Search */}
      <div className="relative w-full sm:w-2/3">
        <input
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black "
        />
      </div>

      {/* Category */}
      <div className="w-full sm:w-1/3">
        <select
          value={category} onChange={(e)=>setCategory(e.target.value)}
          className="w-full cursor-pointer rounded-xl border border-gray-300 bg-black  px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-white "
        >
          <option  value="all">All Categories</option>

          {data.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default FilterComponent;