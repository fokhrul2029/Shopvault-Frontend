interface InfoLineProps {
  label: string;
  value: string | number;
  className?: string;
}

const InfoLine: React.FC<InfoLineProps> = ({ label, value, className }) => {
  return (
    <p className={`text-sm text-gray-600 mb-1 ${className}`}>
      {label}: {value}
    </p>
  );
};

export default InfoLine;
