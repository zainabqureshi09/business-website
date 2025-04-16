
const ZynithbyteLogo = () => {
    return (
      <div className="flex items-center space-x-2">
        {/* SVG Icon */}
        <svg
          className="w-10 h-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="#008070" strokeWidth="8" />
          <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="#008080" />
        </svg>
  
        {/* Logo Text */}
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-teal-900">Zynithbyte</span>
          <span className="text-sm text-teal-500">Technologies</span>
        </div>
      </div>
    );
  };
  
  export default ZynithbyteLogo;
  