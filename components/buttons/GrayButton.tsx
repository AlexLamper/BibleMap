import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface GrayButtonProps {
  title: string;
  width?: string;
  height?: string;
  fontSize?: string;
  url?: string;
  onClick?: () => void;
}

const GrayButton: React.FC<GrayButtonProps> = ({
  title,
  width = 'w-full max-w-[12rem] min-w-[8rem]',
  height = 'h-[2.8rem] p-4',
  fontSize = 'text-[1.2rem]',
  url,
  onClick,
}) => {
  const buttonContent = (
    <div
      className={clsx(
        "bg-[#d9d9d921] text-white transition-colors duration-300 hover:bg-[#d9d9d94f] text-center cursor-pointer shadow-md shadow-[#00000050] rounded-[0.5rem] flex items-center justify-center border dark:bg-[#508D4E] dark:text-white dark:border-none dark:hover:bg-opacity-80",
        width,
        height
      )}
      onClick={onClick}
    >
      <h2
        className={clsx(
          fontSize,
          "mx-auto font-roto font-medium"
        )}
        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {title}
      </h2>
    </div>
  );

  return url ? (
    <Link href={url} passHref>
      <div className="block w-full">
        {buttonContent}
      </div>
    </Link>
  ) : (
    buttonContent
  );
};

export default GrayButton;