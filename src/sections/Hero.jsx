import banner from "../assets/images/banner.png";
import { Link } from "react-router-dom";

const Hero = () => {
 const scrollToTop = () => {
  window.scrollTo(
    {top: 0,
      behavior: 'smooth'
    }
  )
 }

  return (
    <section className="flex justify-around px-[150px] py-[55px] items-center bg-hero">
      <div className="">
        <h1 className="font-italiana text-[64px] text-quote  leading-[73px]">
          &ldquo;Wear Your Love <br />
          for Taylor Swift <br /> in Style!&rdquo;
        </h1>
        <div className="">
          <Link to= '/shop' onClick={scrollToTop}>
          <button className=" font-twentieth text-[18px] mt-[24px] px-[46px] py-[14px] bg-white border-[1px] border-black border-opacity-40 text-text">
            SHOP NOW
          </button>
          </Link>
        </div>
      </div>
      <div>
        <img className="" src={banner} />
      </div>
    </section>
  );
};
export default Hero;


