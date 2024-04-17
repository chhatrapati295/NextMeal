import React from "react";

const loading = () => {
  return (
    <div className="w-full h-[40vh] flex justify-center items-center loading text-xs text-orange-700">
      <span>Preparing meals...</span>
    </div>
  );
};

export default loading;
