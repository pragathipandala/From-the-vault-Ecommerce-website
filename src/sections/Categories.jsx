import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import Button_1 from '../components/Button_1';

const Categories = () => {
  return (
    <section className='py-[60px]  bg-white'>
      <p className=' font-tenor text-[32px] text-text pb-6 text-center'>Categories</p>
    <div className='flex  gap-[50px] justify-center pb-4 '>
      <div>
      <img className='' src ={img1}></img>
      <Button_1 label = 'SHOP NOW'/>
      </div>
      <div>
      <img className='' src ={img2}></img>
      <Button_1 label = 'SHOP NOW'/>
      </div>
      <div>
      <img className='' src ={img1}></img>
      <Button_1 label = 'SHOP NOW'/>
      </div>
    </div>
    
    </section>
  )

}

export default Categories;