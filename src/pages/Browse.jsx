import { Page } from "../components/Page";
const SAMPLEDAPPS = [
  {
    name: "Fantastic007",
    description:
      "This Dapp was created by Fantastic007 to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gae/gkjh_QrFLpOfghLA25aUQfobMcCUS677iGTUVYCpxAfBENiKsNTZ9Ak2to4Kf96VewWmpCsfz7PhuAhQXaojhAcEUUZPcMMi0VhFfg?auto=format&w=1000",
    price: 0.007,
    remaining: 7,
  },
  {
    name: "HelloWorld",
    description:
      "This Dapp was created by HelloWorld to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gae/x9GKGUHFoKufY2ZN9sb-dBFub95V7O17X-FieSpcXUQNaxdRwjqV-e0ZBK6RgugiKci1BGItTPqlGVeX2pnS92I2bJKmDDdeRqqbKLE?auto=format&w=1000",
    price: 7,
    remaining: 0,
  },
  {
    name: "Fantastic008",
    description:
      "This Dapp was created by Fantastic008 to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gcs/files/635f6cb231b3c8973bd5ec154b016a13.jpg?auto=format&w=1000",
    price: 0.008,
    remaining: 8,
  },
  {
    name: "Fantastic007",
    description:
      "This Dapp was created by Fantastic007 to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gae/gkjh_QrFLpOfghLA25aUQfobMcCUS677iGTUVYCpxAfBENiKsNTZ9Ak2to4Kf96VewWmpCsfz7PhuAhQXaojhAcEUUZPcMMi0VhFfg?auto=format&w=1000",
    price: 0.007,
    remaining: 7,
  },
  {
    name: "HelloWorld",
    description:
      "This Dapp was created by HelloWorld to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gae/x9GKGUHFoKufY2ZN9sb-dBFub95V7O17X-FieSpcXUQNaxdRwjqV-e0ZBK6RgugiKci1BGItTPqlGVeX2pnS92I2bJKmDDdeRqqbKLE?auto=format&w=1000",
    price: 7,
    remaining: 0,
  },
  {
    name: "Fantastic008",
    description:
      "This Dapp was created by Fantastic008 to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gcs/files/635f6cb231b3c8973bd5ec154b016a13.jpg?auto=format&w=1000",
    price: 0.008,
    remaining: 8,
  },
  {
    name: "Fantastic007",
    description:
      "This Dapp was created by Fantastic007 to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gae/gkjh_QrFLpOfghLA25aUQfobMcCUS677iGTUVYCpxAfBENiKsNTZ9Ak2to4Kf96VewWmpCsfz7PhuAhQXaojhAcEUUZPcMMi0VhFfg?auto=format&w=1000",
    price: 0.007,
    remaining: 7,
  },
  {
    name: "HelloWorld",
    description:
      "This Dapp was created by HelloWorld to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gae/x9GKGUHFoKufY2ZN9sb-dBFub95V7O17X-FieSpcXUQNaxdRwjqV-e0ZBK6RgugiKci1BGItTPqlGVeX2pnS92I2bJKmDDdeRqqbKLE?auto=format&w=1000",
    price: 7,
    remaining: 0,
  },
  {
    name: "Fantastic008",
    description:
      "This Dapp was created by Fantastic008 to test if this is viable for the future. It is a test Dapp. And it is fantastic.",
    imgSrc:
      "https://i.seadn.io/gcs/files/635f6cb231b3c8973bd5ec154b016a13.jpg?auto=format&w=1000",
    price: 0.008,
    remaining: 8,
  },
];
export const Browse = () => {
  return (
    <Page>
      <div className="py-10 flex flex-col items-center w-full">
        <div className="text-black font-black text-center font-WorkSans text-5xl">
          Browse <span className="text-[#A597FD]">*fantastic</span> Dapps
        </div>
        <div className="flex flex-row flex-wrap gap-7 justify-center py-16">
          {SAMPLEDAPPS.map((dapp) => (
            <PreviewCard noAnimation {...dapp} />
          ))}
        </div>
        <div className="btn-group shadow-md rounded-xl w-fit">
          {Array.from({ length: 5 }, (_, i) => (
            <button className={`btn btn-sm ${i === 3 ? "btn-primary" : ""}`}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </Page>
  );
};

const PreviewCard = ({ name, link, imgSrc, price, remaining }) => (
  <a
    href={link}
    className="card card-compact w-72 bg-base-100 shadow-xl font-Inter hover:scale-105 transition-all cursor-pointer"
  >
    <figure className="aspect-w-4 aspect-h-3">
      <img className="object-cover" src={imgSrc} alt="Shoes" />
    </figure>
    <div className="card-body">
      <div className="font-extrabold text-base leading-none">{name}</div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="font-black text-xl leading-tight">
          {price}
          <sup>ETH</sup>
        </div>
        <div className="font-light text-sm">{remaining} remaining</div>
      </div>
    </div>
  </a>
);
