interface SocialIconProps {
  children: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ children, href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
