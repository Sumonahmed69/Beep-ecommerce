import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title";
import ProductItem from "../ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10">
      <div className=" text-center py-8 text-3xl ">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque autem
          nisi, aut, nobis obcaecati consequuntur minus ducimus beatae harum
          repudiandae quae totam facilis corrupti cum? Fugit nihil iure ad
          quidem!
        </p>
      </div>
      {/* product */}
      <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
       {
        latestProducts.map((item,idx) => (
            <ProductItem  key={idx} id={item._id}  image={item.image} name={item.name} price={item.price}/>
        ))
       }
      </div>
    </div>
  );
};

export default LatestCollection;
