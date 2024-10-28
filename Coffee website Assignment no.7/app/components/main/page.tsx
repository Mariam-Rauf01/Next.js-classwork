import React from "react";
import Card from "../cards/page";

function HomePage() {
  return (
    <>
      {/* Espresso Lovers Section */}
      <div
        className="relative flex flex-col items-center justify-start h-full min-h-screen"
        style={{ backgroundColor: "#C0A874" }}
      >
        <h1
          className="absolute top-28 left-1/2 transform -translate-x-1/2 font-aclonica text-6xl text-center"
          style={{
            color: "#FFF8DB",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
          }}
        >
          Explore Our Coffees
        </h1>
        <h1
          className="absolute top-56 left-1/2 transform -translate-x-1/2 font-aclonica text-5xl text-center"
          style={{
            color: "#3D1403",
            textShadow: "2px 2px 4px #FFF8DB",
          }}
        >
          For Espresso Lovers!
        </h1>
        <div className="flex flex-wrap gap-12 justify-center mt-80">
          <Card
            title={["Espresso Shot", "A bold and intense classic, a pure shot."]}
            description="Our signature espresso is crafted from ethically-sourced, finely roasted beans, delivering a rich and concentrated flavor. Perfect for a quick burst of energy, this shot packs a punch with its deep aroma and smooth finish. Sip, savor, and feel the buzz."
            imageUrl="/images/Hot-CoffeeEspresso-Shot.jpg"
          />
          <Card
            title={["Americano", "Smooth and rich, a perfect balance."]}
            description="Our Americano combines a robust espresso shot with hot water, creating a full-bodied flavor that’s less intense but equally satisfying. Enjoy the bold essence of espresso with a lighter, smooth finish—ideal for those who love a longer coffee experience."
            imageUrl="/images/images (15).jfif"
          />
          <Card
            title={["Cappuccino", "Creamy frothy perfection, every time"]}
            description="Our cappuccino is a classic blend of rich espresso, steamed milk, and a generous layer of frothy foam. Whether you enjoy it plain or with a sprinkle of cocoa, it’s the ultimate indulgence for coffee lovers. Treat yourself to a velvety-smooth experience."
            imageUrl="/images/images (18).jfif"
          />
        </div>
      </div>

     
    </>
  );
}

export default HomePage;
