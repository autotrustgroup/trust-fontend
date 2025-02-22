import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import CarListings from "./components/car-listings"
import CategoryNav from "./components/category-nav"
import NewsSection from "./components/news-section"
import CompareSection from "./components/compare-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=300&width=1920"
          alt="White SUV on city street"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent">
          <div className="container mx-auto h-full relative">
            <h1 className="text-2xl font-semibold text-white absolute top-8 left-4">Imagine the possibilities</h1>

            {/* Search Form */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-6">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Make</label>
                    <Select>
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="All makes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Model</label>
                    <Select>
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="All models" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="camry">Camry</SelectItem>
                        <SelectItem value="civic">Civic</SelectItem>
                        <SelectItem value="mustang">Mustang</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Price</label>
                    <Select>
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-20000">$0 - $20,000</SelectItem>
                        <SelectItem value="20000-40000">$20,000 - $40,000</SelectItem>
                        <SelectItem value="40000+">$40,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">&nbsp;</label>
                    <Button className="w-full bg-[#6C47FF] hover:bg-[#5A3CD9] text-white h-10">
                      Start your selection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Back Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Welcome back!</h2>
            <div className="flex gap-2">
              <Button variant="outline">Create preference</Button>
              <Button>Recent searches</Button>
            </div>
          </div>
          <CarListings />
        </section>

        {/* Popular Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Popular categories</h2>
          <CategoryNav />
        </section>

        {/* All new EVs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">All new EVs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Electric Vehicle"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">Tesla Model {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">Shop now</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Your Garage */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Your Garage</h2>
            <p className="text-muted-foreground mb-4">Add your car. Track its value.</p>
            <Button variant="outline">Get started</Button>
          </div>
          <div className="bg-purple-100 rounded-lg p-8 relative overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Purple car illustration"
              width={300}
              height={200}
              className="absolute bottom-0 right-0"
            />
          </div>
        </section>

        {/* Compare Vehicles */}
        <CompareSection />

        {/* News & Reviews */}
        <NewsSection />
      </main>
    </div>
  )
}

