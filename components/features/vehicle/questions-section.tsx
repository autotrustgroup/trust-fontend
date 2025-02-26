import { Button } from "@/components/ui/button";

interface QuestionSectionProps {
  onContactClick: () => void;
}

export function QuestionSection({ onContactClick }: QuestionSectionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="relative mb-3">
        <h2 className="text-2xl font-bold">Have a question?</h2>
        <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-black"></div>
      </div>
      <p className="text-[15px] text-gray-600 mb-4 max-w-[500px]">
        Get answers, see the car, or find a good time for a test drive. Take the
        next step and contact the seller.
      </p>
      <Button
        onClick={onContactClick}
        className="w-[160px] bg-black hover:bg-black/90 text-white rounded-full"
      >
        Contact seller
      </Button>
    </div>
  );
}
