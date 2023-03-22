export const Logo = ({ size, color }) => {
  return (
    <div
      id="logo"
      className={`font-WorkSans text-black ${
        size === "sm" ? "text-xl p-1" : "text-3xl p-3"
      } font-extrabold rounded-md hover:bg-base-300 transition-all  cursor-pointer ${color}`}
    >
      *fantastic
    </div>
  );
};
