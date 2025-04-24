type PackPricePropsType = {
  price: number;
  old_price?: number;
};

const PackPrice: React.FC<PackPricePropsType> = ({ price, old_price }) => (
  <div data-test-id="pack_price" className="flex items-center justify-center">
    <p className="mb-10 text-5xl font-extrabold tracking-normal text-price">
      {price}€
      {old_price && (
        <span
          className="relative px-1 text-2xl text-primary
          after:absolute after:top-1/2 after:left-1/2 after:w-full after:-translate-y-[50%] after:-translate-x-[50%] after:-rotate-[20deg] after:border-b-2 after:border-primary after:content-['']"
        >
          {old_price}€
        </span>
      )}
    </p>
  </div>
);

export default PackPrice;
