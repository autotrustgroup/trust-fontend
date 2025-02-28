import { Button } from "@/components/ui/button";

export function CarsByOwner() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Cars for Sale by Owner</h2>
        <p className="text-lg mb-6">
          Find great deals on used cars sold directly by their owners. Cut out
          the middleman and negotiate directly.
        </p>
        <Button className="bg-[#8B45F7] hover:bg-[#7B3BE3] text-white">
          Browse Cars by Owner
        </Button>
      </div>
    </section>
  );
}
