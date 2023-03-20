export const Icon = ({ icon, className, ...props }) => (
  <span className={`material-symbols-outlined ${className}`} {...props}>
    {icon}
  </span>
);
