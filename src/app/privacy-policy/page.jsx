import StructuredData, {
  createBreadcrumbData,
  organizationData,
} from "@/components/StructuredData";
import { policyMeta, policySections } from "@/content/privacyPolicyData";

export const metadata = {
  title: policyMeta.title,
  description:
    "Read the full privacy policy for Mindefy Technologies Pvt. Ltd., including data collection, permissions, security, and grievance redressal details.",
  alternates: {
    canonical: "https://mindefy.tech/privacy-policy",
  },
  openGraph: {
    title: policyMeta.title,
    description:
      "Mindefy Technologies outlines its privacy practices, lawful bases, data rights, and security standards.",
    url: "https://mindefy.tech/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const complianceBadges = [
  "DPDP (India)",
  "GDPR (EU/UK)",
  "CCPA (California)",
  "Zero-Cloud-Storage (YourHour)",
];

function parseTitle(title) {
  const match = title.match(/^(\d+(?:\.\d+)?)[\s.]+(.*)$/);
  return {
    number: match ? match[1] : null,
    text: match ? match[2] : title,
  };
}

function SectionCard({ section, children }) {
  const [lead, ...rest] = section.points;
  const { number, text } = parseTitle(section.title);

  return (
    <div
      id={section.id}
      className="relative rounded-2xl border border-[#e5e7eb] bg-white p-6 sm:p-7 shadow-md transition hover:-translate-y-[2px] hover:shadow-lg"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#332771] text-center text-sm font-semibold leading-10 text-white">
            {number ?? section.title}
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#1f2a44]">
            {text}
          </h3>
        </div>

        {lead && (
          <p className="text-sm sm:text-base leading-relaxed text-[#374151]">
            {lead}
          </p>
        )}

        {rest.length > 0 && (
          <ul className="space-y-2 text-sm sm:text-base text-[#4b5563]">
            {rest.map((item, idx) => (
              <li key={idx} className="relative pl-5 leading-relaxed">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#edbaad] shadow-[0_0_0_4px_rgba(237,186,173,0.35)]" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Privacy Policy", url: "https://mindefy.tech/privacy-policy" },
  ]);

  // Group subsections (e.g., 3.1, 3.2) under their parent (e.g., 3)
  const groupedSections = [];
  const parentIndexByBase = new Map();

  policySections.forEach((section) => {
    const { number } = parseTitle(section.title);
    const base = number ? number.split(".")[0] : null;
    const isChild = number ? number.includes(".") : false;

    if (!isChild) {
      groupedSections.push({ ...section, children: [] });
      if (base) parentIndexByBase.set(base, groupedSections.length - 1);
    } else {
      const parentIdx = parentIndexByBase.get(base);
      if (parentIdx !== undefined) {
        groupedSections[parentIdx].children.push(section);
      } else {
        groupedSections.push({ ...section, children: [] }); // fallback
      }
    }
  });

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#1f2a44]">
      <StructuredData data={organizationData} />
      <StructuredData data={breadcrumbData} />

      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
        <div className="space-y-6">
          <h1 className="text-[#FF5225] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {policyMeta.title}
          </h1>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            {groupedSections.map((section) => (
              <SectionCard
                key={section.id}
                section={section}
                children={
                  section.children.length > 0 && (
                    <div className="mt-5 space-y-4">
                      {section.children.map((child) => {
                        const { number, text } = parseTitle(child.title);
                        const [childLead, ...childRest] = child.points;
                        return (
                          <div
                            key={child.id}
                            id={child.id}
                            className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="h-8 w-8 rounded-lg bg-[#332771] text-center text-sm font-semibold leading-8 text-white">
                                {number ?? child.title}
                              </div>
                              <h4 className="text-lg font-semibold text-[#1f2a44]">
                                {text}
                              </h4>
                            </div>
                            {childLead && (
                              <p className="text-sm sm:text-base leading-relaxed text-[#374151]">
                                {childLead}
                              </p>
                            )}
                            {childRest.length > 0 && (
                              <ul className="mt-2 space-y-2 text-sm sm:text-base text-[#4b5563]">
                                {childRest.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="relative pl-5 leading-relaxed"
                                  >
                                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#edbaad] shadow-[0_0_0_4px_rgba(237,186,173,0.35)]" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
