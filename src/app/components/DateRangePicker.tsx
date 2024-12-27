import React from "react";

/* <div >
      <DateRangePicker />
    </div> 
*/

const DateRangePicker: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
      <div>
        <input
          type="date"
          id="start-date"
          className="w-[330px] h-[55px] border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>        
    </div>
  );
};

export default DateRangePicker;
