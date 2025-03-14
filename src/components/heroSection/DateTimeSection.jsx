import { FaCalendarAlt, FaClock, FaVideo } from "react-icons/fa";
import { getNextSunday, getTime } from "../../utils/const.js";




const DateTimeSection = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-5 sm:gap-10">
      {/* Date Section */}
      <div className="flex items-center gap-2">
        <FaCalendarAlt className="text-green-500 text-xl" />
        <div>
          <p className="text-sm text-white">Date (Sun)</p>
          <p className="font-bold text-lg text-white">{getNextSunday()}</p>
        </div>
      </div>

      {/* Time Section */}
      <div className="flex items-center gap-2">
        <FaClock className="text-green-500 text-xl" />
        <div>
          <p className="text-sm text-white">Time</p>
          <p className="font-bold text-lg text-white">{getTime()} IST</p>
        </div>
      </div>

      {/* Duration Section */}
      <div className="flex items-center gap-2">
        <FaVideo className="text-green-500 text-xl" />
        <div>
          <p className="text-sm text-white">Duration</p>
          <p className="font-bold text-lg text-white">3 Hours</p>
        </div>
      </div>
    </div>
  );
};

export default DateTimeSection;
