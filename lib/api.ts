// MOCK DATA - Replace with real API calls
const vehicleData = {
  Electric: [
    {
      id: 1,
      name: "Tesla Model 3",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/tesla-model-3",
    },
    {
      id: 2,
      name: "Tesla Model S",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/tesla-model-s",
    },
    {
      id: 3,
      name: "Nissan Leaf",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/nissan-leaf",
    },
    {
      id: 4,
      name: "Tesla Model Y",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/tesla-model-y",
    },
    {
      id: 5,
      name: "Ford Mustang Mach-E",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/ford-mustang-mach-e",
    },
    {
      id: 6,
      name: "Ford F-150 Lightning",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/ford-f150-lightning",
    },
    {
      id: 7,
      name: "BMW i3",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/bmw-i3",
    },
    {
      id: 8,
      name: "Volkswagen ID.4",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/volkswagen-id4",
    },
    {
      id: 9,
      name: "What to know before purchasing an EV",
      image: "/placeholder.svg?height=200&width=300",
      href: "/ev101",
      isGuide: true,
    },
  ],
  SUV: [
    {
      id: 1,
      name: "Toyota RAV4",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/toyota-rav4",
    },
    {
      id: 2,
      name: "Honda CR-V",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/honda-cr-v",
    },
    {
      id: 3,
      name: "Ford Explorer",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/ford-explorer",
    },
    {
      id: 4,
      name: "Jeep Grand Cherokee",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/jeep-grand-cherokee",
    },
    {
      id: 5,
      name: "Subaru Forester",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/subaru-forester",
    },
    {
      id: 6,
      name: "Mazda CX-5",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/mazda-cx-5",
    },
    {
      id: 7,
      name: "Nissan Rogue",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/nissan-rogue",
    },
    {
      id: 8,
      name: "Hyundai Tucson",
      image: "/placeholder.svg?height=200&width=300",
      href: "/shop/hyundai-tucson",
    },
    {
      id: 9,
      name: "SUV Buying Guide",
      image: "/placeholder.svg?height=200&width=300",
      href: "/suv-guide",
      isGuide: true,
    },
  ],
  // Add more categories here...
};

export async function getVehiclesByCategory(category: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return vehicleData[category] || [];
}
