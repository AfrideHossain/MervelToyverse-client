import Hero from "./Hero/Hero";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import spiderBg from "../../assets/images/spiderPosterBg.jpg";

const Homepage = () => {
  const divStyle = {
    backgroundImage: `url(${spiderBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
  };
  return (
    <>
      <div style={divStyle}>
        <Hero />
        <PhotoGallery />
      </div>
    </>
  );
};

export default Homepage;
