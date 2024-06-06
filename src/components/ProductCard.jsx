import star_icon from "../assets/icons/star_icon.svg";

const ProductCard = ({ imgURL, rating, reviews, name, price }) => {
  return (
    <section className="shadow-[0px_7px_26px_6px_#edf2f7] rounded-md">
      <div className="flex flex-col text-center font-twentieth text-text text-[18px]">
        <div className="relative">
          <img className="" src={imgURL} alt={name} />
          <div className="flex items-center absolute bottom-[5px] left-[4px]  text-[12px] rounded-full bg-white bg-opacity-75 text-text px-3 py-[2px]">
            <p>{rating}</p>
            <img className="w-[13px] h-[13px] ml-[1px] fill-text" src={star_icon}/>
            <p> | {reviews}</p>

            {/* <span className="text-sm">{rating}  | {reviews}</span> */}
        
          </div>
        </div>
        <h3 className="pt-[3px]">{name}</h3>
        <h3 className="pt-[3px]">{price}</h3>
        <button className="bg-primary px-3 py-2 mx-2 my-1">Add to cart</button>
      </div>
    </section>
  );
};

export default ProductCard;
