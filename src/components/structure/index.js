import React from 'react';

const ArchitecturalLayout = () => {
    return (
        <div className="architectural-layout p-8 border border-black relative">
            {/* Dining Hall */}
            <div className="room bg-gray-300 w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Bedroom 1 */}
            <div className="room bg-gray-300 w-32 h-48 absolute top-0 left-0"></div>

            {/* Bedroom 2 */}
            <div className="room bg-gray-300 w-32 h-48 absolute top-0 right-0"></div>

            {/* Kitchen */}
            <div className="room bg-gray-300 w-48 h-32 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>

            {/* Extra Room */}
            <div className="room bg-gray-300 w-32 h-48 absolute bottom-0 left-0"></div>
        </div>
    );
}

export default ArchitecturalLayout;
