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
import { accordionData, Content, Faqs, Section } from "./types";

export default function CustomAccordion({ data }: accordionData) {
  return (
    <Accordion type="multiple" className="space-y-2 px-4">
      {data.map((section) => (
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

function renderSectionContent(section: Section) {
  if (Array.isArray(section.primary) && Array.isArray(section.additional)) {
    return <MoreContent section={section} />;
  }

  if (
    Array.isArray(section.content) &&
    section.content.length > 0 &&
    typeof section.content[0] === "object" &&
    section.content[0].subTitle
  ) {
    return renderSubHeaders(section.content as Content[]);
  }

  if (Array.isArray(section.content)) {
    return renderFlatList(section.content as string[]);
  }

  if (Array.isArray(section.faqs)) {
    return renderFaqs(section.faqs);
  }

  return null;
}

function renderSubHeaders(subCategories: Content[]) {
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

function renderFaqs(faqs: Faqs[]) {
  return (
    <div>
      {faqs.map((faq, idx) => (
        <div key={faq.question}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold mb-2">{faq.question}</h3>
              <div
                className="text-sm mb-2  "
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>

            {faq.relatedArticles && faq.relatedArticles?.length > 0 && (
              <div className="text-sm">
                <p className="font-semibold">Related articles:</p>
                <ul className="list-disc pl-6 text-sm leading-5 marker:text-2xl marker:leading-[1]">
                  {faq.relatedArticles.map((article) => (
                    <li key={article.label} className="pt-4">
                      <Link
                        href={article.href}
                        className="underline hover:decoration-primary-600 hover:decoration-2 font-bold"
                      >
                        {article.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {idx < faqs.length - 1 && (
            <hr className="mt-6 mb-6 border-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
}

function MoreContent({ section }: { section: Section }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-2">
        {section.primary &&
          section.primary.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm underline hover:decoration-primary-600 hover:decoration-2 font-semibold"
            >
              {item}
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
          {section?.additional &&
            section.additional.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm underline hover:decoration-primary-600 hover:decoration-2 font-semibold"
              >
                {item}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
