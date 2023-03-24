export const InputGroup = ({ children, className }) => (
  <div
    className={`flex flex-col shadow flex-start p-3 gap-3 bg-white border border-solid border-[#C9C9C9] rounded-[.625rem] ${className}`}
  >
    {children}
  </div>
);
