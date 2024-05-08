import TravelForm from "./TravelForm";
const Home = () => {
  return (
    <div
      id="HOME"
      style={{
        backgroundImage: `url(
          "https://res.cloudinary.com/enchanting/q_90,f_auto,c_lfill,w_800,h_400,x_w_mul_0.38,y_h_mul_0.41,g_xy_center/enchanting-web/2024/04/Kilchurn-castle-on-Loch-Awe-Scotland-1.jpg"
        )`,
      }}
      className="bg-cover bg-center w-full h-[500px] flex justify-center items-center bg-hero-image"
    >
      <TravelForm />
    </div>
  );
};

export default Home;
