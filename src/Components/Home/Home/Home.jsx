import Image from "next/image";
import Category from "../Category/Category";
import HomeAddBanner from "../HomeAddBanner/HomeAddBanner";
import HomeBestSeal from "../HomeBestSeal/HomeBestSeal";
import HomeBestSealSlider from "../HomeBestSealSlider/HomeBestSealSlider";
import HomeSlider from "../HomeSlider/HomeSlider";
import HomeAddCard from "../HomeAddCard/HomeAddCard";
import PlayWithWrite from "../PlayWithWrite/PlayWithWrite";
import AllInOneCategory from "../AllInOne/AllInOneCategory";
import { BookStoreBannerOne } from "@/src/Assets";

const Home = () => {

  return (
    <section className="container">
      <HomeSlider />
      {/* ====== Home Slider ======= */}
      <h1 className="text-2xl text-center mt-8 font-semibold">Popular Category</h1><br />
      <Category />

      <div className="mt-8 grid md:grid-cols-4 grid-cols-1">
        <div className="col-span-3">
          <HomeBestSealSlider />
        </div>
        <div className="">
          <Image src={BookStoreBannerOne} className="md:w-full w-full md:h-full h-full" width={400} height={500} />
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-start mt-8 font-semibold">Our Best Seal</h1>
        <HomeBestSeal />
      </div>
      <br />
      <HomeAddCard />
      <div className="my-4">
        <PlayWithWrite />
      </div>
      <br />
      <HomeAddBanner />
      <div className="my-4">
        <AllInOneCategory />
      </div>
    </section>
  );
};

export default Home;