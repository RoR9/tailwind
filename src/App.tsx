import "./index.css";
import styles from "./style";
import { Navbar, Hero } from "./components";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} `}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
