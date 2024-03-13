import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

export function SearchInput() {
    const [isInputOpen, setInputOpen] = useState(false);

    return (
        <div className="relative">
            <div className={`flex items-center space-x-2 ${isInputOpen ? 'w-64' : 'w-12'} transition-all duration-300 ease-out`}>
                <SearchIcon className="absolute left-4 text-black h-6 w-6" />
                <Input
                    placeholder="Search..."
                    className={`pl-10 ${isInputOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-out`}
                    onFocus={() => setInputOpen(true)}
                    onBlur={() => setInputOpen(false)}
                />
            </div>
        </div>
    );
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}

export default SearchInput;