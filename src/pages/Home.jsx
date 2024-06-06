import Categories from "../sections/Categories";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Reviews from "../sections/Reviews";
import Promises from "../sections/Promises";
import About from "../sections/About";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <About/>
      <Products/>
      <Promises/>
      <Reviews/>
    </div>
  )
}
export default Home;