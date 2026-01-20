import { navigationItems } from "./data";

export default function NavigationSidebar({ headerHeight, activeSection, onNavClick }) {
  return (
    <div className="hidden lg:block w-80 shrink-0 mr-0 lg:mr-5 mb-6 lg:mb-0">
      <div className="sticky" style={{ top: `${headerHeight}px` }}>
        <div className="py-8 bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.2)] h-full">
          <nav className="space-y-1.5">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`w-full text-left p-5 hover:font-semibold transition-colors duration-200 cursor-pointer border-l-4 ${
                  activeSection === item.id
                    ? "bg-[#FAFFFA] text-[#2B7575] font-semibold text-base border-[#2B7575]"
                    : "text-[#52B7B7] bg-[#FAFFFA] font-medium text-base border-[#52B7B7]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
