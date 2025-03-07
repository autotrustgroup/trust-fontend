"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get prequalified on Cars.com?",
    answer: "Getting prequalified on Cars.com is a simple process...",
  },
  {
    question: "Can I use my prequalified offer to purchase the car?",
    answer: "Yes, you can use your prequalified offer...",
  },
  {
    question:
      "What is the difference between pre-qualification and pre-approval?",
    answer: "Pre-qualification and pre-approval are similar but...",
  },
  {
    question: "Where can I see my prequalified status on Cars.com?",
    answer: "You can view your prequalified status...",
  },
  {
    question: "When does my prequalification status expire?",
    answer: "Your prequalification status typically expires...",
  },
  {
    question:
      "Where can I find my prequalified offers on the cars I am interested in?",
    answer: "You can find your prequalified offers...",
  },
  {
    question:
      "What should I expect at the dealer after being prequalified on a car?",
    answer: "When you visit the dealer...",
  },
  {
    question:
      "What if the car I am prequalified for is not available at the dealer?",
    answer: "If the car you're prequalified for...",
  },
  {
    question: "What lenders participate in prequalification on Cars.com?",
    answer: "Cars.com partners with various lenders...",
  },
  {
    question:
      "Will your in-network lenders finance all cars that are on Cars.com?",
    answer: "Our network of lenders...",
  },
  {
    question: "Which lender is my rate from?",
    answer: "Your prequalified rate comes from...",
  },
];

export function FinanceFAQ() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Auto financing FAQ</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + Math.ceil(faqs.length / 2)}`}
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <p className="text-xs text-gray-500 mt-8">
        Not all customers will qualify. All decisions related to submission of
        consumer's credit application, assignment of financing agreement, and
        available lenders are at sole discretion of the dealer. Cars.com is not
        an automobile dealer or a lender, and will not make a credit decision.
      </p>
    </section>
  );
}
