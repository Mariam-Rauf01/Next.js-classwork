import React from 'react'
import Card from "../cards/page";

function Cold() {
  return (
    <div
        className="relative flex flex-col items-center justify-start h-full min-h-screen"
        style={{ backgroundColor: "#C0A874" }}
      >
         {/* Cold Brew Lovers Section */}
      <div
        className="relative flex flex-col items-center justify-start h-full min-h-screen"
        style={{ backgroundColor: "#C0A874" }}
      >
        <h1
          className="absolute top-14 left-1/2 transform -translate-x-1/2 font-aclonica text-5xl text-center"
          style={{
            color: "#3D1403",
            textShadow: "2px 2px 4px #FFF8DB",
          }}
        >
          For Cold Brew Lovers!
        </h1>
        <div className="flex flex-wrap gap-12 justify-center mt-40">
          <Card
            title={["Traditional Cold Brew", "Bold, smooth, and effortlessly cool."]}
            description="Our traditional cold brew is steeped to perfection, delivering a rich, robust flavor with a smooth finish and lower acidity. Served over ice, it’s the ultimate refreshing coffee experience, ideal for those who appreciate a pure and straightforward coffee."
            imageUrl="/images/istockphoto-1209718260-612x612.jpg"
          />
          <Card
            title={["Cold Brew Lemonade","A bold twist on refreshment." ]}
            description="Experience the unexpected blend of bold cold brew coffee and zesty lemonade. This unique combination delivers a refreshing, tangy kick with the smooth richness of coffee, perfect for those looking to try something adventurous and energizing."
            imageUrl="/images/lemon-juice-iced-coffee-600nw-2032018268.webp"
          />
          <Card
            title={["Cold Brew with Milk", "Smooth, refreshing, and perfectly chilled."]}
            description="Our cold brew is steeped for hours to unlock deep, bold flavors and low acidity. When blended with creamy milk, it creates a smooth, mellow coffee that’s both refreshing and rich. Served over ice, it’s the perfect pick-me-up for warm days."
            imageUrl="/images/istockphoto-1366850534-612x612.jpg"
          />
        </div>
          {/* Button Container */}
          <div className="flex space-x-4 mt-10">
          {/* First Button */}
          <button className="text-2xl font-outfit font-bold text-white py-4 px-14 bg-black flex items-center rounded shadow-lg hover:bg-white hover:text-red-600 transition-colors duration-200 ease-in-out">
            Get A Coffee
          </button>

      </div>

      
    </div>
    </div>
  )
}

export default Cold
