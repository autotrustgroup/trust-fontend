"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function PopularSearch({ data }: any) {
  return (
    <Accordion type="multiple" className="space-y-2 px-4">
      {data.map((section: any) => (
        <AccordionItem key={section.title} value={section.title}>
          <AccordionTrigger className="text-sm font-semibold">
            {section.title}
          </AccordionTrigger>
          <AccordionContent>{renderSectionContent(section)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function renderSectionContent(section: any) {
  if (Array.isArray(section.primary) && Array.isArray(section.additional)) {
    return <Section section={section} />;
  }

  if (
    Array.isArray(section.content) &&
    section.content.length > 0 &&
    typeof section.content[0] === "object" &&
    section.content[0].subTitle
  ) {
    return renderSubHeaders(section.content);
  }

  if (Array.isArray(section.content)) {
    return renderFlatList(section.content);
  }

  if (Array.isArray(section.faqs)) {
    return renderFaqs(section.faqs);
  }

  return null;
}

function renderSubHeaders(subCategories: any[]) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {subCategories.map((subCat) => (
        <div key={subCat.subTitle}>
          <h3 className="mb-2 text-gray-900">{subCat.subTitle}</h3>
          <ul>
            {subCat.items.map((item: string) => (
              <li key={item} className="mb-2">
                <Link
                  href="/"
                  className="text-sm underline hover:decoration-primary-600 hover:decoration-2 font-semibold"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// For a flat list of strings
function renderFlatList(items: string[]) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item}
          href="/"
          className="text-sm underline hover:decoration-primary-600 hover:decoration-2 font-semibold"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

// **FAQ** rendering
function renderFaqs(faqs: any[]) {
  return (
    <div>
      {faqs.map((faq, idx) => (
        <div key={faq.question} className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold mb-1">{faq.question}</h3>
            <p className="text-sm mb-2">{faq.answer}</p>
          </div>

          {faq.relatedArticles?.length > 0 && (
            <div className="text-sm">
              <p className="font-semibold">Related articles:</p>
              <ul className="list-disc pl-5">
                {faq.relatedArticles.map((article: any) => (
                  <li key={article.label}>
                    <Link
                      href={article.href}
                      className="underline hover:decoration-primary-600 hover:decoration-2 font-semibold"
                    >
                      {article.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {idx < faqs.length - 1 && (
            <hr className="mt-4 mb-4 border-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
}

// For the "Used Cars by Price" toggle
function Section({ section }: { section: any }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-2">
        {section.primary.map((priceRange: any) => (
          <Link
            key={priceRange}
            href="#"
            className="text-sm underline hover:decoration-primary-600 hover:decoration-2 font-semibold"
          >
            {priceRange}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setShowMore((prev) => !prev)}
        className="text-sm underline hover:decoration-primary-600 hover:decoration-2 font-semibold py-4"
      >
        <div className="flex items-center gap-1">
          {showMore ? "Less details" : "More details"}
          <ChevronDown className="w-3 h-3" />
        </div>
      </button>

      {showMore && (
        <div className="flex flex-wrap gap-4 mb-2">
          {section.additional.map((priceRange: any) => (
            <Link
              key={priceRange}
              href="#"
              className="text-sm underline hover:decoration-primary-600 hover:decoration-2 font-semibold"
            >
              {priceRange}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
