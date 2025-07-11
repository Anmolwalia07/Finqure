export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#C1DAED] to-[#dddddda7] px-6 md:px-20 lg:px-40 py-15" id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">
        {/* Text Section */}
        <div className="w-full md:max-w-[70%] text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight text-[#1A3C5D]">
            <span className="text-[#3072B8]">Online Loan And Insurance</span> to Achieve <br className="hidden sm:block" />
            Your Goals and Future <br className="hidden sm:block" />
            for Change.
          </h1>

          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Making financial goals a priority is very important. By ensuring a user-friendly
            experience and individuals can comfortably work towards their dreams and achieve set goals.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#1A3C5D] text-white font-semibold rounded-md hover:bg-[#15405e] transition">
            Schedule a Meet
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full hidden md:flex justify-center">
          <img
            src="/img1.png"
            alt="Business man"
            className="w-[300px] md:w-[380px] object-contain ml-15"
          />
        </div>
      </div>
    </section>
  );
}
