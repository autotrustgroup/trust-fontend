"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronLeft,
  Heart,
  Share2,
  MapPin,
  Star,
  Phone,
  MessageSquare,
  ArrowRight,
  Check,
  Info,
  AlertTriangle,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { VehicleListing } from "@/features/vehicle-search/types/search-results";
import { mockListings } from "@/features/vehicle-search/data/mock-listings";

export default function VehicleDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [vehicle, setVehicle] = useState<VehicleListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  // Fetch vehicle details based on ID
  useEffect(() => {
    const vehicleId = params.id;
    if (!vehicleId) return;

    // In a real app, this would be an API call
    // For now, we'll use our mock data
    const foundVehicle = mockListings.find(
      (listing) => listing.id.toString() === vehicleId
    );

    if (foundVehicle) {
      setVehicle(foundVehicle);
    }
    setLoading(false);
  }, [params.id]);

  // Handle back navigation
  const handleBack = () => {
    router.back();
  };

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-b-blue-300 border-l-blue-300 border-r-blue-300 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold">Loading vehicle details...</h2>
        </div>
      </div>
    );
  }

  // Not found state
  if (!vehicle) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen">
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to search results
        </button>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-6">
            The vehicle you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/shopping/results">
            <Button>Return to search results</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Images array (in a real app, would come from the API)
  const images = [
    vehicle.imageUrl,
    "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1619405399517-a7d5d24b7b43?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1619980822406-ffa8418e262d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617814076668-8dfc6572a822?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca?q=80&w=1200&auto=format&fit=crop",
  ];

  // Generate estimated payment (just for display purposes)
  const monthlyPayment =
    vehicle.estimatedPayment ||
    Math.round((typeof vehicle.price === "number" ? vehicle.price : 0) * 0.018);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to search results
            </button>
            <div className="flex gap-3">
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
                onClick={() => setIsSaved(!isSaved)}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isSaved ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                <span className="text-sm">Save</span>
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <Share2 className="h-5 w-5" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Vehicle Title Section */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold">
                {vehicle.title}
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline">{vehicle.condition}</Badge>
                {vehicle.fuelType && (
                  <Badge variant="outline">{vehicle.fuelType}</Badge>
                )}
                {vehicle.fairDeal && (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    Good Deal
                  </Badge>
                )}
              </div>
            </div>

            {/* Main Image Gallery */}
            <div className="mb-8 rounded-lg overflow-hidden bg-white shadow-md">
              <div className="relative aspect-[16/9]">
                <Image
                  src={images[currentImageIndex]}
                  alt={vehicle.title}
                  fill
                  className="object-cover"
                />
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70"
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev - 1 + images.length) % images.length
                    )
                  }
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70"
                  onClick={() =>
                    setCurrentImageIndex((prev) => (prev + 1) % images.length)
                  }
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex p-2 gap-2 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`w-20 h-16 relative flex-shrink-0 rounded overflow-hidden ${
                      currentImageIndex === index
                        ? "ring-2 ring-blue-500"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Information Tabs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <Tabs defaultValue="overview">
                <TabsList className="w-full justify-start border-b border-gray-200 rounded-none bg-white px-4">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-white"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="data-[state=active]:bg-white"
                  >
                    Features
                  </TabsTrigger>
                  <TabsTrigger
                    value="specifications"
                    className="data-[state=active]:bg-white"
                  >
                    Specifications
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-lg mb-4">Key Details</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Price</span>
                          <span className="font-semibold">
                            $
                            {typeof vehicle.price === "number"
                              ? vehicle.price.toLocaleString()
                              : vehicle.price}
                          </span>
                        </li>
                        {vehicle.msrp && (
                          <li className="flex justify-between pb-2 border-b border-gray-100">
                            <span className="text-gray-600">MSRP</span>
                            <span>${vehicle.msrp.toLocaleString()}</span>
                          </li>
                        )}
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Est. Payment</span>
                          <span>${monthlyPayment}/mo*</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Mileage</span>
                          <span>{vehicle.mileage.toLocaleString()} mi</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Fuel Type</span>
                          <span>{vehicle.fuelType || "N/A"}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Transmission</span>
                          <span>{vehicle.transmission || "N/A"}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Exterior Color</span>
                          <span>{vehicle.exteriorColor || "N/A"}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Interior Color</span>
                          <span>{vehicle.interiorColor || "N/A"}</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-4">
                        Dealer Information
                      </h3>
                      <div className="flex items-start mb-4">
                        <div className="flex-1">
                          <div className="font-medium">
                            {vehicle.dealer.name}
                          </div>
                          <div className="flex items-center text-sm mt-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                            <span className="font-medium">
                              {vehicle.dealer.rating}{" "}
                              <span className="text-gray-500">
                                ({vehicle.dealer.reviews.toLocaleString()}{" "}
                                reviews)
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{vehicle.dealer.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mt-6">
                        <Button className="w-full">
                          <Phone className="h-4 w-4 mr-2" /> Call Dealer
                        </Button>
                        <Button variant="outline" className="w-full">
                          <MessageSquare className="h-4 w-4 mr-2" /> Email
                          Dealer
                        </Button>
                      </div>

                      <div className="mt-8">
                        <h3 className="font-medium text-lg mb-4">
                          Additional Info
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <ShieldCheck className="h-5 w-5 text-green-600" />
                            <span>Vehicle history report available</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Truck className="h-5 w-5 text-blue-600" />
                            <span>Home delivery available</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-5 w-5 text-green-600" />
                            <span>Virtual appointments available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="p-6">
                  <h3 className="font-medium text-lg mb-4">Vehicle Features</h3>
                  {vehicle.features && vehicle.features.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-600 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {/* Add some common features that might not be in our mock data */}
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span>Bluetooth Connectivity</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span>Backup Camera</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span>Keyless Entry</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span>Cruise Control</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span>Climate Control</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      No feature information available for this vehicle.
                    </p>
                  )}
                </TabsContent>

                <TabsContent value="specifications" className="p-6">
                  <h3 className="font-medium text-lg mb-4">
                    Vehicle Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">General Information</h4>
                      <ul className="space-y-3">
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Make</span>
                          <span>{vehicle.make}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Model</span>
                          <span>{vehicle.model}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Year</span>
                          <span>{vehicle.year}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Body Style</span>
                          <span>{vehicle.bodyStyle || "N/A"}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Stock Number</span>
                          <span>{vehicle.stockNumber || "N/A"}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">VIN</span>
                          <span>WDCGG8HB0AF462890</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Engine & Performance</h4>
                      <ul className="space-y-3">
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Engine Type</span>
                          <span>
                            {vehicle.fuelType === "Electric"
                              ? "Electric Motor"
                              : "V6"}
                          </span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Horsepower</span>
                          <span>
                            {vehicle.fuelType === "Electric"
                              ? "580 hp"
                              : "355 hp"}
                          </span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Transmission</span>
                          <span>{vehicle.transmission || "Automatic"}</span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Drivetrain</span>
                          <span>
                            {vehicle.features?.includes("AWD")
                              ? "All-Wheel Drive"
                              : "Front-Wheel Drive"}
                          </span>
                        </li>
                        <li className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Fuel Economy</span>
                          <span>
                            {vehicle.fuelType === "Electric"
                              ? "132 MPGe city / 120 MPGe hwy"
                              : "22 MPG city / 30 MPG hwy"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar - CTA and Similar Vehicles */}
          <div className="w-full lg:w-1/3">
            {/* Price Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-20">
              <div className="flex flex-col mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-2xl font-bold">
                    $
                    {typeof vehicle.price === "number"
                      ? vehicle.price.toLocaleString()
                      : vehicle.price}
                  </span>
                  {vehicle.priceDrop && (
                    <Badge variant="outline" className="text-green-600">
                      Price dropped: ${vehicle.priceDrop.toLocaleString()}
                    </Badge>
                  )}
                </div>
                {vehicle.msrp && (
                  <div className="text-gray-600 text-sm">
                    MSRP: ${vehicle.msrp.toLocaleString()}
                  </div>
                )}
                <div className="text-gray-600 text-sm mt-2">
                  Est. ${monthlyPayment}/mo*
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  *Est. payment with %3.9 APR for 72 mo.
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <Button size="lg" className="w-full">
                  Check Availability
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Start Purchase Online
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <MapPin className="h-4 w-4" />
                <span>{vehicle.location}</span>
              </div>

              <div className="flex justify-between text-sm">
                <button
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isSaved ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                  <span>Save</span>
                </button>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Similar Vehicles */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">Similar Vehicles</h3>
              <div className="space-y-4">
                {mockListings
                  .filter(
                    (listing) =>
                      listing.id !== vehicle.id && listing.make === vehicle.make
                  )
                  .slice(0, 3)
                  .map((similarVehicle) => (
                    <Link
                      href={`/shopping/vehicle/${similarVehicle.id}`}
                      key={similarVehicle.id}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-24 h-20 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={similarVehicle.imageUrl}
                          alt={similarVehicle.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium group-hover:text-blue-600 line-clamp-2">
                          {similarVehicle.title}
                        </h4>
                        <p className="text-sm font-semibold mt-1">
                          $
                          {typeof similarVehicle.price === "number"
                            ? similarVehicle.price.toLocaleString()
                            : similarVehicle.price}
                        </p>
                        <div className="flex items-center text-xs text-gray-600 mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{similarVehicle.location}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link href="/shopping/results" className="block mt-6">
                <Button variant="outline" size="sm" className="w-full">
                  View All Similar Vehicles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
