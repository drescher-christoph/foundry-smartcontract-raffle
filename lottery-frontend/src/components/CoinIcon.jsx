const CoinIcon = ({ src, alt, className }) => (
    <img 
      src={src} 
      alt={alt} 
      className={`
        absolute 
        transform 
        transition-all 
        duration-300 
        hover:scale-110 
        hover:rotate-6 
        z-5
        ${className}
      `}
    />
  );

  export default CoinIcon;