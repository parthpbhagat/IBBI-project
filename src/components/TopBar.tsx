import { Home } from "lucide-react";

const topLinks = ["Home", "Sitemap"];
const accessLinks = ["Skip to Main Content", "Screen Reader Access"];

const TopBar = () => {
  return (
    <div className="gov-top-bar">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {topLinks.map((link) => (
            <a key={link} href={link === "Home" ? "/" : "#"} className="hover:underline">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          {accessLinks.map((link) => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
          <div className="flex items-center gap-1">
            <button className="px-1 text-xs">A-</button>
            <button className="px-1 text-sm font-bold">A</button>
            <button className="px-1 text-base font-bold">A+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
