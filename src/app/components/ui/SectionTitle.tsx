// SectionTitle.tsx
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="py-16 flex flex-col items-center">
      <h2 className="text-h2-bold text-center text-light-primary dark:text-dark-primary">{title}</h2>
      <div className="w-full lg:w-[910px] h-[2px] bg-light-accent dark:bg-dark-accent mt-2" /> {/* Underline */}
      <div className="py-2" /> {/* Bottom padding */}
    </div>
  );
};

export default SectionTitle;
