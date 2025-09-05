import classNames from "classnames";
import React from "react";

function Separator({ noTop }: { noTop?: boolean }) {
  return (
    <div
      className={classNames(
        "grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] bg-transparent border-b border-gray-300 h-10",
        {
          "border-t": !noTop,
        }
      )}>
      <div className="bg-white"></div>

      <div className="border-x border-gray-300"></div>

      <div></div>

      <div className="border-x border-gray-300"></div>

      <div className="bg-white"></div>
    </div>
  );
}

export default Separator;
