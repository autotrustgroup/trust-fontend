export type Content = {
  subTitle: string;
  items: string[];
};

export type Faqs = {
  question: string;
  answer: string;
  relatedArticles?: { label: string; href: string }[];
};

export type Section = {
  title: string;
  content?: string[] | Content[];
  primary?: string[];
  additional?: string[];
  faqs?: Faqs[];
};

export interface accordionData {
  data: Section[];
}
