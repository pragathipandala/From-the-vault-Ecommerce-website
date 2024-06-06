import speaknow from "../assets/images/speaknow.png";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const options = [
    "Taylor Swift",
    "Fearless",
    "Speak Now",
    "Red",
    "1989",
    "Reputation",
    "Lover",
    "Folklore",
    "Evermore",
    "Midnights",
    "TTPD",
    "All",
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    switch (option) {
      case "Taylor Swift":
        import("../assets/images/speaknow.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "Fearless":
        import("../assets/images/fearless.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "Speak Now":
        import("../assets/images/speaknow.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "Red":
        import("../assets/images/red.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;

      case "1989":
        import("../assets/images/1989.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;

      case "Reputation":
        import("../assets/images/reputation.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "Lover":
        import("../assets/images/lover.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "Folklore":
        import("../assets/images/folklore.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "Evermore":
        import("../assets/images/evermore.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "Midnights":
        import("../assets/images/red.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "TTPD":
        import("../assets/images/ttpd.png").then((image) =>
          setSelectedImage(image.default)
        );
        break;
      case "All":
        setSelectedImage(null);
        setSelectedOption(null);
        break;

      default:
        setSelectedImage(null);
        break;
    }
  };

  return (
    <div className="app">
      {selectedImage && (
        <div className="relative">
          <img
            className=" w-full  h-[350px]  object-cover"
            src={selectedImage}
            alt="Selected Image"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-25"></div>
        </div>
      )}
      {!selectedImage && (
        <div>
          <img
            className=" w-full  h-[350px]  object-cover"
            src={speaknow}
            alt="Default Image"
          />
        </div>
      )}
      <div className="text-center">
        <p className="m-4 text-text text-2xl ">Choose your Era:</p>
        <Dropdown options={options} onSelect={handleSelect} />
      </div>
      <div className="p-16">
      <div className="grid lg:grid-cols-4 px-6 gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {options.includes(selectedOption) 
            ? products
                .filter((product) => product.era === selectedOption)
                .map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))
            : products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;
