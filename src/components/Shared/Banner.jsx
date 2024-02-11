const Banner = () => {
  return (
    <div className="hero h-[400px] bg-cover"  style={{ backgroundImage: 'url(https://i.ibb.co/dcVDTPQ/volunteer-bg.jpg)' }}>
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-center text-black">
          <h1 className="mb-5 text-4xl font-bold ">
            I grow by helping people in need.
          </h1>
          <div className="items-center">
            <input
              type="text"
              className="border rounded-l-md border-gray-300 p-2 px-4 w-1/2 mx-auto"
              placeholder="Enter text"
            />
            <button
              className="bg-blue-500 text-white p-2 px-4 rounded-r-md "
              type="button "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
