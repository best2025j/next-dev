const Carousel = () => {
  const staffData = [
    "/Rectangle 3.png",
    "/Rectangle 4.png",
    "/Rectangle 5.png",
    "/Rectangle 6.png",
    "/Rectangle 7.png",
  ];

  // Define the range of indices to display (excluding first and last indices)
  const startIndex = 1; // Exclude the first image
  const endIndex = staffData.length - 2; // Exclude the last image

  // Get the subset of images to display
  const visibleImages = staffData.slice(startIndex, endIndex + 1);

  return (
    <section>
      <div className="h-full mx-auto sm:mx-0 w-full">
        <div className="h-[33px] rounded-[50%] relative top-[18px] md:top-[76px] bg-[#FBFCFF] md:h-[117px] w-full flex-shrink-0" />

        <div className="hidden lg:grid lg:grid-cols-5">
          {staffData.map((image, index) => (
            <div
              key={index}
              className="justify-center items-center hover:bg-slate-100 rounded-3xl p-2 sm:flex  dark:bg-slate-800 flex-col"
            >
              <img
                className="h-48 w-96 md:h-full md:w-full"
                src={image}
                alt={`Image ${index + 5}`}
              />
            </div>
          ))}
        </div>

        <div className="lg:hidden grid grid-cols-3 lg:grid-cols-5">
          {visibleImages.map((image, index) => (
            <div
              key={index + startIndex} // Adjust the key to account for the subset
              className="justify-center items-center hover:bg-slate-100 rounded-3xl md:p-2 sm:flex dark:bg-slate-800 flex-col"
            >
              <img
                className="h-48 w-96 md:h-full md:w-full"
                src={image}
                alt={`Image ${index + startIndex + 1}`} // Adjust the alt text
              />
            </div>
          ))}
        </div>

        <div className="h-[30px] rounded-[50%] relative -top-[16px] md:-top-[76px] bg-[#FBFCFF] md:h-[117px] w-full flex-shrink-0" />
      </div>
    </section>
  );
};

export default Carousel;

