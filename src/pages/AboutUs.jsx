import tay from '../assets/images/tay.png';
const AboutUs = () => {
  return(
    <div className=" flex justify-around gap-[20px] bg-hero px-[150px] py-[50px]">
      <div className=' w-[300px]'>
        <div className= "relative w-[325px] h-[325px] border-[12px] mt-[100px] border-white">
          <img className='absolute top-[310px] left-1/2 transform -translate-x-1/2 -translate-y-full w-[475px] h-[475px] pt-[10px]' src={tay}/>
        </div>

      </div>
      <div className=" w-[600px] flex flex-col justify-center items-start">
          <h2 className=" font-tenor text-[40px]  text-left text-text leading-[45px] pb-3">GIFTS THAT <br></br> LASTS LONGER</h2>
      
        <p className=" font-twentieth text-[20px] text-text">Swiftie bracelet gifts are a delightful way to celebrate the passion and enthusiasm of Taylor Swift fans. Each bracelet is crafted with care, featuring intricate designs inspired by Taylor&rsquo;s iconic lyrics, albums, and symbols. Whether it&rsquo;s a subtle nod to a favorite song or a bold statement piece showcasing Taylor&rsquo;s vibrant personality, these bracelets are sure to bring joy to any Swiftie&rsquo;s heart. With a variety of styles and materials to choose from, there&rsquo;s a perfect bracelet for every occasion, making it a cherished gift that will be treasured for years to come.</p>
      </div>

    </div>
  )

}

export default AboutUs;