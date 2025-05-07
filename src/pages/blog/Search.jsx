import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
      <div className="search">
          <input type="search" name="" id="" placeholder='search...'/>
          <div className='searchsvg'>
              <CiSearch />
          </div>
      </div>
  );
}
