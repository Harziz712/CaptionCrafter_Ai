
export const Glassmorphism = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
      <div className={`backdrop-blur-md shadow-md ${className}`}>{children}</div>
    )
  }
  export const GlassShadow = () => {
    return (
      <div className="w-[240px] h-[220px] bg-purple-700/50 absolute top-[4%] left-[42%] blur-3xl"></div>
    );
  };
