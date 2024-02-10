

const Banner = () => {
    return (
        <div className="hero h-[490px]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
      <h1 className="mb-5 text-5xl font-bold">I grow by helping people in need.</h1>
      <div className="flex items-center">
      <input
        type="text"
        className="border border-gray-300 p-2"
        placeholder="Enter text"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        type="button"
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