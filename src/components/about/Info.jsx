import React from 'react';

const Info = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex flex-col items-center text-center bg-gray-100 p-5 rounded-lg shadow-md w-48">
                <i className="fa-regular fa-lightbulb text-3xl text-blue-600"></i>
                <h2 className="text-lg font-semibold mt-2">Experience</h2>
                <p className="text-gray-600">2+ years</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100 p-5 rounded-lg shadow-md w-48">
                <i className="fa-solid fa-briefcase text-3xl text-blue-600"></i>
                <h2 className="text-lg font-semibold mt-2">Completed</h2>
                <p className="text-gray-600">5 projects</p>
            </div>
        </div>
    );
}

export default Info;
