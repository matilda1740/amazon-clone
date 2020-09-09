import React from "react";
import "./Home.css";
import Product from "../components/Product";

export default function Home() {
  return (
    <section className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id="12321"
          title="The Vanishing Half: Sunday Times Bestseller"
          price={10.99}
          image="https://m.media-amazon.com/images/I/41tkOiFcPwL.jpg"
          rating={5}
        />
        <Product
          id="12321"
          title="Sony Noise Cancelling Headphones: Wireless Bluetooth Over the Ear Headset with Mic for phone-call and Alexa Voice Control -  Silver"
          price={348.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51mPLqxRWvL._AC_SX355_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="12321"
          title="Apple Watch Series 5 (GPS, 40mm) - Gold Aluminum Case with Pink Sport Band"
          price={499.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._AC_SX342_.jpg"
          rating={2}
        />
        <Product
          id="12321"
          title="Smart Wifi Wireless Essential Oil Aromatherapy 400ml Ultrasonic Diffuser & Humidifier"
          price={39.95}
          image="https://images-na.ssl-images-amazon.com/images/I/713%2BykRgTIL._SY355_.jpg"
          rating={5}
        />
        <Product
          id="12321"
          title="Zevro Indispensable SmartSpace Wall Mount Triple Dry-Food Dispenser"
          price={59.95}
          image="https://images-na.ssl-images-amazon.com/images/I/814in1myOYL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="12321"
          title="Braun 3-in-1 Immersion Hand Blender, Powerful 400W Stainless Steel Stick Blender, 21-Speed + 1.5-Cup Food Processor, Whisk, Beaker, High Quality, Easy to Clean, MultiQuick MQ5025"
          price={69.95}
          image="https://images-na.ssl-images-amazon.com/images/I/61H-NAhzfmL._AC_SX522_.jpg"
          rating={4}
        />
      </div>
    </section>
  );
}
