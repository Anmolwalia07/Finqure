export default function Features() {
  const items = [
    {
      title: "Home Purchase",
      image: "/home.jpg", 
      description:
        "We have hundreds of loan product to help on your home purchase. We are making home buying simple and fast. Ask for fast pre-approval letter!!",
    },
    {
      title: "Refinance",
      image: "/refinance.jpeg",
      description:
        "We’re offering comparative interest rates for conforming and non-conforming and lite documents mortgage loans. Apply online today!",
    },
    {
      title: "Declined by a Lender",
      image: "/decline.webp",
      description:
        "Have you been declined by a local bank or broker? We have experienced team to help on complicated loans. Contact us today!",
    },
  ];

  return (
    <div className="py-16 px-6 bg-white text-center">
      <div className="flex justify-center flex-wrap gap-12 max-w-8xl mx-auto pt-5 ">
        {items.map((item, idx) => (
          <div key={idx} className="w-[350px]">
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 w-full h-66 object-cover shadow"
            />
            <h3 className="text-xl font-semibold text-[#1A3C5D]">{item.title}</h3>
            <p className="text-gray-700 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
