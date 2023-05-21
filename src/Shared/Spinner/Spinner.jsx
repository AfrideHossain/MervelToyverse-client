const Spinner = () => {
  return (
    <>
      <div className="bg-black h-28 w-28 p-6 flex items-center justify-center rounded absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-red-600 motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
        </div>
        <p className="text-white absolute text-sm left-0 bottom-0 text-center w-full">Please wait...</p>
      </div>
    </>
  );
};

export default Spinner;
