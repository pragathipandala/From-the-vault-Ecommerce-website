import custom from "../assets/icons/custom.svg";
import quality from "../assets/icons/quality.svg";
import bracelet_icon from "../assets/icons/bracelet_icon.svg";

const Promises = () => {
  return (
    <section>
      <div className="bg-hero py-12">
        <h2 className="font-tenor text-[32px] text-text pb-10 text-center">Our Promise</h2>
        <div className="flex justify-center  gap-20 items-center  font-sans">
          <div className="flex justify-center items-center flex-col">
            <img className="w-[50px] h-[50px] mb-4  text-text " src={custom} />
            <p className="text-center">Customization available</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img className="w-[50px] h-[50px] mb-4 " src={quality} />
            <p className="text-center">High quality craftsmanship</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img className="w-[50px] h-[50px] mb-4 " src={bracelet_icon} />
            <p className="text-center">Wide range of designs</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img className="w-[50px] h-[50px] mb-4 " src={custom} />
            <p className="text-center">Wide range of designs</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promises;
