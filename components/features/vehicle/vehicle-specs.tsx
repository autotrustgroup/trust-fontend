export interface VehicleSpecsProps {
  specs: {
    mileage: string;
    transmission: string;
    drivetrain: string;
    engine: string;
    vin: string;
    stock: string;
    exterior: string;
    interior: string;
    mpg: {
      city: number;
      highway: number;
    };
  };
}

export function VehicleSpecs({ specs }: VehicleSpecsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Vehicle details</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">Mileage</p>
          <p className="font-medium">{specs.mileage}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Transmission</p>
          <p className="font-medium">{specs.transmission}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Drivetrain</p>
          <p className="font-medium">{specs.drivetrain}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Engine</p>
          <p className="font-medium">{specs.engine}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">VIN</p>
          <p className="font-medium">{specs.vin}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Stock #</p>
          <p className="font-medium">{specs.stock}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Exterior</p>
          <p className="font-medium">{specs.exterior}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Interior</p>
          <p className="font-medium">{specs.interior}</p>
        </div>
      </div>

      {/* MPG Information */}
      <div>
        <p className="text-sm text-gray-600 mb-2">EPA Mileage</p>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-2xl font-bold">{specs.mpg.city}</p>
            <p className="text-sm text-gray-600">City</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{specs.mpg.highway}</p>
            <p className="text-sm text-gray-600">Highway</p>
          </div>
        </div>
      </div>
    </div>
  );
}
