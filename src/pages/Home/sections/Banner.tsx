import img from "../../../assets/Blue Modern Gadget Banner.png";

const Banner: React.FC = () => {
  return (
    <div className="w-full h-[500px] bg-gray-700 relative overflow-hidden">
      <img
        src={img}
        alt="Banner Image"
        className="w-full h-full object-cover object-left"
      />
    </div>
  );
};

export default Banner;
