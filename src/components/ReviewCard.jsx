import star from "../assets/icons/star.svg"
const ReviewCard = ({customerName, rating, feedback}) => {
  return (
    <section>
      <div className=" text-center font-sans mb-4">
      <p className="">{feedback}</p>
      <h3 className=""> -{customerName}</h3>
      <div className="flex justify-center">
        <img className="w-[18px] h-[18px]  fill-current" src={star} />
      <p>({rating})</p>
      </div>
      </div>
    </section>
  )
}
export default ReviewCard;