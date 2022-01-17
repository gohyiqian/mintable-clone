import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Categories />
      <ProductList />
    </div>
  );
};

export default HomePage;
