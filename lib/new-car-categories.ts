export const categories = [
  "EVs",
  "SUVs",
  "Sedans",
  "Pickup trucks",
  "Coupes",
  "Hatchbacks",
  "Wagons",
  "Convertibles",
  "Vans",
] as const;

export type Category = (typeof categories)[number];

export interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const categoryData: Record<Category, Car[]> = {
  EVs: [
    {
      id: 1,
      name: "2025 Tesla Model 3",
      price: 42990,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 Chevrolet Bolt EUV",
      price: 37500,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 Ford Mustang Mach-E",
      price: 45995,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Hyundai IONIQ 5",
      price: 41450,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 Kia EV6",
      price: 42600,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Volkswagen ID.4",
      price: 38995,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
  SUVs: [
    {
      id: 1,
      name: "2025 Volkswagen Atlas",
      price: 38200,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 Ford Expedition Max",
      price: 61150,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 Jeep Grand Wagoneer",
      price: 84945,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Mercedes-Benz GLS",
      price: 178450,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 Toyota RAV4",
      price: 44265,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Honda CR-V",
      price: 61850,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
  Sedans: [
    {
      id: 1,
      name: "2025 Toyota Camry",
      price: 26420,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 Honda Accord",
      price: 27295,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 BMW 3 Series",
      price: 43300,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Mercedes-Benz C-Class",
      price: 44900,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 Lexus ES",
      price: 41400,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Audi A4",
      price: 40300,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
  "Pickup trucks": [
    {
      id: 1,
      name: "2025 Ford F-150",
      price: 34585,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 Chevrolet Silverado",
      price: 35600,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 RAM 1500",
      price: 37410,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Toyota Tundra",
      price: 38965,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 GMC Sierra 1500",
      price: 36910,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Nissan Titan",
      price: 39700,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
  Coupes: [
    {
      id: 1,
      name: "2025 BMW 4 Series",
      price: 47400,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 Mercedes-Benz C-Class",
      price: 49550,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 Audi A5",
      price: 46200,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Lexus RC",
      price: 45800,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 Infiniti Q60",
      price: 43300,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Porsche 911",
      price: 106100,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
  Hatchbacks: [
    {
      id: 1,
      name: "2025 Volkswagen Golf GTI",
      price: 30530,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 Honda Civic Type R",
      price: 42895,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 Hyundai Veloster N",
      price: 32925,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Toyota GR Corolla",
      price: 35900,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 Mazda 3",
      price: 22550,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Mini Cooper",
      price: 25800,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
  Wagons: [
    {
      id: 1,
      name: "2025 Volvo V60",
      price: 41900,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 Audi A4 allroad",
      price: 45500,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 Mercedes-Benz E-Class",
      price: 68400,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Porsche Panamera Sport",
      price: 99000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 Subaru Outback",
      price: 28895,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Volvo V90",
      price: 51800,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
  Convertibles: [
    {
      id: 1,
      name: "2025 Porsche 911",
      price: 114000,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 BMW 4 Series",
      price: 54200,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 Mercedes-Benz C-Class",
      price: 55400,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Chevrolet Corvette",
      price: 69200,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 Mazda MX-5 Miata",
      price: 28400,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Audi A5",
      price: 51900,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
  Vans: [
    {
      id: 1,
      name: "2025 Honda Odyssey",
      price: 37340,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 2,
      name: "2025 Toyota Sienna",
      price: 35385,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 3,
      name: "2025 Chrysler Pacifica",
      price: 37020,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 4,
      name: "2025 Kia Carnival",
      price: 32900,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 5,
      name: "2025 Mercedes-Benz Sprinter",
      price: 38300,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
    {
      id: 6,
      name: "2025 Ford Transit",
      price: 45200,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-26%20at%2000.34.23-Exq7fOmR7C9gx0j9zyvVgnPB7vAx73.png",
    },
  ],
};
