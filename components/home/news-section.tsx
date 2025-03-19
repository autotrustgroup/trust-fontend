import Link from "next/link";
import OverlayImage from "../common-components/OverlayImage/OverlayImage";
import { ARTICLES, TRENDING_NEWS } from "./constants/news";

const NewsSection: React.FC = () => {
  return (
    <section className="my-10">
      <h2 className="text-h2 font-bold mb-4 leading-8">News & Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 gap-4 md:col-span-2 sm:grid-cols-2 ">
          {ARTICLES.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="relative group"
            >
              <OverlayImage
                src={article.image}
                alt={article.title}
                text={article.title}
              />
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-h3 font-medium mb-2">Trending near you</h3>
          <ul className="space-y-2 divide-y divide-gray-300">
            {TRENDING_NEWS.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-bodylg font-regular py-3"
              >
                <span className="text-h3 pr-4 flex-shrink-0 self-start">
                  {index + 1}
                </span>
                <Link
                  href="#"
                  className="hover:underline hover:decoration-purple-600 hover:decoration-2"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t-2 border-gray-300 mt-2">
            <Link
              href="/news"
              className=" font-medium w-full block underline mt-3 hover:decoration-purple-600 hover:decoration-2"
            >
              See all news
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
