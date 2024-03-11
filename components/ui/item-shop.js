import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function ItemShop({ image, title, price, description, category }) {
    const [selectedVersion, setSelectedVersion] = useState("download");

    const handleVersionChange = (version) => {
        setSelectedVersion(version);
    };

    return (
        <div className="flex flex-wrap align-center items-center space-x-4 mb-6">
            <img
                alt={title}
                className="w-16 h-16 bg-gray-200 rounded"
                height="120"
                src={image}
                style={{ aspectRatio: "1/1", objectFit: "contain" }}
                width="200"
            />
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="text-sm text-gray-500">{category}</div>
                <div className="text-sm text-gray-500">{description}</div>
                <div className="text-lg font-semibold mt-1">${price}</div>
                <ProductVersionSelector
                    selectedVersion={selectedVersion}
                    onVersionChange={handleVersionChange}
                />
            </div>
            <div className="flex items-center space-x-2">
                <Button variant="ghost">-</Button>
                <span>1</span>
                <Button variant="ghost">+</Button>
            </div>
            <XIcon className="text-gray-500 h-6 w-6" />
        </div>
    );
}

function ProductVersionSelector({ selectedVersion, onVersionChange }) {
    return (
        <div className="mt-2 flex items-center">
            <span className="mr-2 text-sm font-semibold">Version:</span>
            <div className="flex items-center space-x-2">
                <button
                    className={`px-2 py-1 rounded-md text-sm ${selectedVersion === "download"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => onVersionChange("download")}
                >
                    Download
                </button>
                <button
                    className={`px-2 py-1 rounded-md text-sm ${selectedVersion === "cd"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => onVersionChange("cd")}
                >
                    CD
                </button>
            </div>
        </div>
    );
}

function XIcon(props) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}