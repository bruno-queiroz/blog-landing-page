import phoneImg from "../assets/images/illustration-phones.svg";

export const StateOfTheArtSection = () => {
  return (
    <section className="flex flex-col relative text-white mb-24 lg:grid lg:grid-cols-2 max-w-[1440px] w-full mx-auto">
      <div className="absolute w-full h-[70%] bottom-0 rounded-tr-[10vh] rounded-bl-[10vh] state-of-art-bg-img z-[-1] lg:top-[50%] lg:translate-y-[-50%]" />
      <img
        src={phoneImg}
        alt=""
        className="mt-8 object-cover sm:w-[580px] mx-auto lg:w-full"
      />
      <article className="flex flex-col gap-6 text-center px-8 pb-24 text-md lg:justify-center lg:text-left">
        <h2 className="text-2xl font-semibold">
          State of the Art Infrastructure
        </h2>
        <p className="text-gray-300 max-w-[450px] w-full lg:max-w-full mx-auto lg:mx-0">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </article>
    </section>
  );
};
