interface BasicInfoProps {
  specs: {
    exteriorColor: string;
    interiorColor: string;
    mileage: string;
    transmission: string;
    drivetrain: string;
    engine: string;
    vin: string;
    stock: string;
  };
}

export function BasicInfo({ specs }: BasicInfoProps) {
  const specsList = [
    { key: "Exterior color", value: specs.exteriorColor },
    { key: "Interior color", value: specs.interiorColor },
    { key: "Drivetrain", value: specs.drivetrain },
    // { key: "MPG", value: specs.mpg },
    // { key: "Fuel type", value: specs.fuelType },
    { key: "Transmission", value: specs.transmission },
    { key: "Engine", value: specs.engine },
    { key: "VIN", value: specs.vin },
    { key: "Stock #", value: specs.stock },
    { key: "Mileage", value: specs.mileage },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Basics</h2>

      <div className="divide-y border-t border-gray-200">
        {specsList.map(({ key, value }) => (
          <div key={key} className="py-4 grid grid-cols-2 gap-4">
            <dt className="text-[15px] text-gray-700">{key}</dt>
            <dd className="text-[15px] text-gray-900">{value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}
