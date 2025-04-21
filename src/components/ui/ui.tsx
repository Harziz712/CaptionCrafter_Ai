import { Button } from "./button";

export const Glassmorphism = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
      <div className={`backdrop-blur-md shadow-md ${className}`}>{children}</div>
    )
  }
  export const GlassShadow = () => {
    return (
      <div className="w-[240px] h-[220px] bg-primary absolute top-[48%] left-[42%] blur-3xl"></div>
    );
  };
  export const Homebtn = () => {
    return (
      // <div className='rounded-full py-2 px-4 border-3 items-center text-center border-primary w-[8%] -rotate-12 absolute -top-10'>Welcome</div>
      // <Button className='rounded-full py-2 px-4 border-3 items-center text-center border-primary -rotate-12 absolute -top-10'>Welcome</Button>
      <Button className={"animatedButton"}>
       <h2 className="animatedButtonText">Welcome</h2>
      </Button>
    )
  }