"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does selling to Instant Offer work?",
    answer: "Our process is simple and straightforward...",
  },
  {
    question: "What does the 5-Day Guarantee mean?",
    answer: "The 5-Day Guarantee ensures that...",
  },
  {
    question: "What is the physical vehicle inspection and who conducts it?",
    answer: "A thorough inspection is conducted by...",
  },
  {
    question:
      "How accurate do I need to be on the inspection to receive a Valid Offer?",
    answer: "It's important to be as accurate as possible...",
  },
  {
    question:
      "Can I maintain my Instant Offer without having a replacement vehicle?",
    answer: "Yes, you can maintain your offer without...",
  },
];

export function FAQ() {
  return (
    <section className="py-16 bg-[#F3F3F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Have more questions?</h2>
        <p className="text-gray-600 mb-8">We have the answers.</p>

        <div className="max-w-2xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
