import { ReactNode } from 'react';

const ColumnContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`mt-5 ${className ?? ''}`}>{children}</div>;
};

export default ColumnContainer;
