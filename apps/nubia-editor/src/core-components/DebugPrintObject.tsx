interface DebugPrintObjectProps {
  className?: string;
  children?: any;
}

function DebugPrintObject(props: DebugPrintObjectProps) {
  const className = props.className
    ? props.className
    : 'text-sm italic text-gray-500';
  return <p className={className}>{JSON.stringify(props.children, null, 2)}</p>;
}

export default DebugPrintObject;
