interface FeaturesProps {
  features: {
    convenience: string[];
    entertainment: string[];
    safety: string[];
    additional: string[];
  };
}

export function Features({ features }: FeaturesProps) {
  const sections = [
    { title: "Convenience", items: features.convenience },
    { title: "Entertainment", items: features.entertainment },
    { title: "Safety", items: features.safety },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-[28px] font-bold mb-6">Features </h2>

      <div className="divide-y border-t border-gray-200">
        {sections.map((section) => (
          <div key={section.title} className="py-4">
            <div className="grid grid-cols-[200px,1fr] gap-4">
              <dt className="text-[15px] text-gray-900 font-medium">
                {section.title}
              </dt>
              <dd className="text-[15px] text-gray-900">
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </div>
        ))}
      </div>

      {features.additional.length > 0 && (
        <div className="mt-6">
          <h3 className="text-[15px] font-medium mb-2">
            Additional popular features:
          </h3>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            {features.additional.join(", ")}
          </p>
        </div>
      )}

      <a
        href="#"
        className="inline-block mt-6 text-[15px] text-gray-900 hover:underline font-medium"
      >
        View all features
      </a>
    </div>
  );
}
