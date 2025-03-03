import { RiCustomerService2Fill, RiExchangeFundsFill } from "react-icons/ri";
import { MdOutlineGppGood } from "react-icons/md";

const OurPolicy = () => {
  return (
    <div className="text-gray-700 flex flex-col sm:flex-row justify-around md:text-base sm:text-sm text-xs py-20 text-center sm:gap-2 gap-12">
      <div className="">
        <RiExchangeFundsFill size={40}  className="w-12 m-auto mb-5"/>  
        <p className="font-semibold"> Easy Exchange Policy</p>
        <p className="text-gray-400"> We offer hassle free Exchange Policy</p>
      </div>
      <div className="">
        <MdOutlineGppGood size={40}  className="w-12 m-auto mb-5"/>  
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400"> We provide 7 days free return Policy</p>
      </div>
      <div className="">
        <RiCustomerService2Fill  size={40}  className="w-12 m-auto mb-5"/>  
        <p className="font-semibold">Bast Customer Support</p>
        <p className="text-gray-400"> We provide 24/7 cusrtomer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
