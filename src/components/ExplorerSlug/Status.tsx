// ApplicationStatus.tsx
import React from 'react';

const ApplicationStatus: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md text-center mt-8">
      <p>Applications close in 1 day, 7 hours, 26 minutes</p>
      <button className="bg-green-500 text-white mt-2 px-6 py-2 rounded-md">Apply now!</button>
    </div>
  );
};

export default ApplicationStatus;
