import { Bookmark } from "lucide-react";
import React from "react";

const SaveButton = () => {
  return (
    <div>
      <button className="btn-outline flex items-center gap-1 ">
        <span><Bookmark size={17} /></span>
        Save For Later</button>
    </div>
  );
};

export default SaveButton;
