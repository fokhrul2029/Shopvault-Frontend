import React from "react";

const Pending: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Pending;
