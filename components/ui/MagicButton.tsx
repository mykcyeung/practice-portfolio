import React from 'react'

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton = ({title, icon, position, handleClick, otherClasses}: ButtonProps) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full md:w-60 md:mt-10" onClick={handleClick}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7  text-sm font-medium text-white backdrop-blur-3xl ${otherClasses} gap-2`} >
    {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
  </span>
</button>
  )
}

export default MagicButton