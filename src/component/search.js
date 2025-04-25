"use client"

import { Search, X } from "lucide-react"
import { useState } from "react"

const SearchDrawer = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  return (
    <>
      <Search
        size={22}
        className="cursor-pointer hover:text-red-500"
        onClick={() => setOpen(true)}
      />

      
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none text-sm"
          />
          <X
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="p-4">
          {query ? (
            <p className="text-gray-500">Showing results for: <span className="font-semibold">{query}</span></p>
          ) : (
            <p className="text-gray-400 text-center">Type to search...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchDrawer
