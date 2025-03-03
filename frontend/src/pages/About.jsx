import { assets } from "../assets/assets";
import NeswletterBox from "../components/NeswletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 items-center flex flex-col md:flex-row gap-16">
        <img src={assets.about} className=" w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:h-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            beatae libero sapiente magni. Veniam quia voluptates eligendi
            perferendis sit! Optio illum in nisi temporibus illo, deleniti,
            maxime aliquam voluptas architecto culpa iste est at, praesentium
            minima nihil! Iure, sed. Magni vel dignissimos non animi natus
            asperiores eos veritatis deleniti quaerat.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            voluptatibus omnis impedit error laborum, iusto explicabo asperiores
            nam, ad recusandae rem mollitia veritatis, excepturi eos quo quidem
            minima ratione! Nemo reprehenderit distinctio quasi, delectus alias
            harum animi! Doloribus, quidem est?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            veritatis quae ad cumque odit ducimus! Tenetur quibusdam voluptate
            eos consequatur quidem iste fuga necessitatibus, quam nihil, dolores
            consectetur earum cum.
          </p>
          <b className="text-gray-800"> Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eaque epiciatis natus dignissimos corporis. Voluptatum nesc
            repellendus. Corrupti pariatur nisi suscipit eaque. Cum, corporis.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurence : </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
            a, exercitationem beatae aliquid illum odio cumque nesciunt sequi
            excepturi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convience :</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
            a, exercitationem beatae aliquid illum odio cumque nesciunt sequi
            excepturi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Excceptional Customer Service :</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
            a, exercitationem beatae aliquid illum odio cumque nesciunt sequi
            excepturi!
          </p>
        </div>
      </div>

      <NeswletterBox />
    </div>
  );
};

export default About;
