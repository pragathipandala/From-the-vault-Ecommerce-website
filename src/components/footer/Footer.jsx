import whatsapp from "/src/assets/icons/whatsapp.svg";
import pinterest from "/src/assets/icons/pinterest.svg";
import instagram_2 from "/src/assets/icons/instagram_2.svg";
const Footer = () => {
  return (
    <>
    <div className=" w-full grid grid-cols-3 gap-6 items-center justify-items-center py-10 bg-footer text-text">
      <div className=" font-italiana text-[32px]">
        <p>
          FROM <br />
          THE <br /> VAULT
        </p>
      </div>
      <div className=" font-tenor text-[24px]">
        <p>Stay Connected</p>
        <div className="flex flex-row gap-2 justify-center items-center pt-4">
          <img className="w-[26px] h-[26px]" src={instagram_2} />
          <img className="w-[28px] h-[28px]" src={whatsapp} />
          <img className="w-[23px] h-[23px]" src={pinterest} />
        </div>
      </div>
      <div className=" font-tenor text-[24px]">
        <p>Newsletter</p>
        <form className="items-center">
          <input className="text-[16px] py-2 px-4" placeholder="Your mail" ></input>
          <button className=" bg-primary text-[16px] py-[8px] px-3 font-twentieth text-text">SUBSCRIBE</button>
        </form>

      </div>
    </div>
    <div className="bg-primary w-full font-twentieth text-center text-[18px] text-text py-2">
    &copy; copyright 2024- Made with &#9829; using React
    </div>
    </> 
  );
};

export default Footer;
