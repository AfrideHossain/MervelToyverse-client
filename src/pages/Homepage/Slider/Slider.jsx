import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  const images = [
    "https://i.ibb.co/pbbJgsR/wallpaperflare-com-wallpaper-1.jpg",
    "https://i.ibb.co/PG2T4cj/wallpaperflare-com-wallpaper-3.jpg",
    "https://i.ibb.co/0D6P10k/wallpaperflare-com-wallpaper-6.jpg",
    "https://i.ibb.co/YLSYs4J/wallpaperflare-com-wallpaper-7.jpg",
  ];

  const legends = [
    {
      name: "Tony Stark (Iron man)",
      story: `Tony Stark, the brilliant inventor and billionaire, sacrificed himself during the battle against Thanos in "Avengers: Endgame" (2019). He used the power of the Infinity Stones to snap his fingers and disintegrate Thanos and his army, but the immense energy proved fatal for Tony, leading to his death.`,
    },
    {
      name: "Natasha Romanoff (Black Widow)",
      story: `Natasha Romanoff, also known as Black Widow, made the ultimate sacrifice on Vormir in "Avengers: Endgame" (2019). In order to obtain the Soul Stone, she willingly sacrificed herself, allowing her dear friend Clint Barton (Hawkeye) to secure the stone and save the universe.`,
    },
    {
      name: "T'Challa (Black Panther)",
      story: `Chadwick Boseman portrayed the regal superhero Black Panther in the Marvel Cinematic Universe. His portrayal of T'Challa showcased intelligence, compassion, and unwavering commitment to justice. Boseman's performance left an indelible mark, inspiring and empowering audiences worldwide. Tragically, Chadwick Boseman passed away in August 2020 after a private battle with colon cancer. His portrayal of Black Panther remains a symbol of representation and inspiration, making an iconic contribution to the world of superheroes.`,
    },
    {
      name: "Vision",
      story: `Vision, the android created by Tony Stark and Bruce Banner, met his demise twice. In "Avengers: Infinity War" (2018), Vision was killed by Thanos when the Mind Stone was forcibly removed from his forehead. In "Avengers: Endgame" (2019), Thanos reversed time to retrieve the Mind Stone, causing Vision to die once again.`,
    },
  ];

  return (
    <>
      <div className="mx-auto w-full bg-black bg-opacity-95 p-6 mt-6">
        <h1 className="text-white text-3xl mb-4 text-center">
          Know Our Legends
        </h1>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          interval={3000}
          className="carousel max-w-3xl rounded-md mx-auto"
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item w-full">
              <img
                src={image}
                className="w-full object-cover"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 text-white flex justify-center items-center">
                <div className="flex flex-col justify-center items-center p-10">
                  <h1 className="text-3xl font-bold mb-5">
                    {legends[index].name}
                  </h1>
                  <p className="hidden md:block text-base">
                    {legends[index].story}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
