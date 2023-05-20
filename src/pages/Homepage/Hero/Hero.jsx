import spiderBg from "../../../assets/images/spiderPosterBg.jpg";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${spiderBg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg bg-black px-12 py-10 rounded-xl bg-opacity-70">
          <h1 className="mb-5 text-5xl font-bold text-[#ed1d24]">
            Marvel{"'"}s Toy Assemble
          </h1>
          <p className="mb-5">
            Where Marvel toys come alive, and imagination knows no bounds. Enter
            a realm where childhood dreams take shape, and epic battles between
            heroes and villains unfold in your hands.
          </p>
          <button className="btn bg-[#ed1d24] hover:bg-red-700 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
