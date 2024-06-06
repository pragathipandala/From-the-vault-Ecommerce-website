import { products } from "../constants";
import ProductCard from "../components/ProductCard";
import Button_1 from "../components/Button_1";
import { Link } from "react-router-dom";

const Products = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Add smooth scrolling behavior
    });
  };

  return (
    <section className="p-16">
      <div>
        <h2 className=' font-tenor text-[32px] text-text pb-6 text-center'>Our Products</h2>
      </div>
      <div className="grid lg:grid-cols-4 px-6 gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  ">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      <div className="pt-4 ">
       <Link to = '/shop' onClick={scrollToTop}> 
       <Button_1 label={"VIEW ALL"}/> 
       </Link>
      </div>
    </section>
  );
};
export default Products;
