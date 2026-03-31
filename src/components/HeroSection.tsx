import { Calendar, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import img1 from "@/assets/home page images/image_1.jpeg";
import img2 from "@/assets/home page images/image_2.jpeg";
import img3 from "@/assets/home page images/image_3.jpeg";
import img4 from "@/assets/home page images/image_4.jpeg";
import img5 from "@/assets/home page images/image_5.jpeg";
import img6 from "@/assets/home page images/image_6.jpeg";
import img7 from "@/assets/home page images/image_7.jpg";

// Fallback hardcoded news items for when the database table is not yet created or returns an error
const fallbackNewsItems = [
  {
    date: "30th March, 2026",
    title: "Appointment of Ms. Aparna Sinha as ex-officio member in the Insolvency and Bankruptcy Board of India",
    size: "319.91 KB",
    file_url: "#"
  },
  {
    date: "27th March, 2026",
    title: "Approval of Resolution Plan - Shubhada Tool Industries Private Limited",
    size: "559.26 KB",
    file_url: "#"
  },
  {
    date: "27th March, 2026",
    title: "Approval of Resolution Plan - Renaissance Indus Infra Private Limited",
    size: "523.07 KB",
    file_url: "#"
  },
  {
    date: "19th March, 2026",
    title: "Approval of Resolution Plan - Jaiprakash Associates Limited",
    size: "2.03 MB",
    file_url: "#"
  },
  {
    date: "19th March, 2026",
    title: "Research study on 'Effectiveness of the resolution process: Firm outcomes in the post-IBC period'",
    size: "140.06 KB",
    file_url: "#"
  },
  {
    date: "06th March, 2026",
    title: "The Insolvency and Bankruptcy Board of India celebrates International Women's Day 2026",
    size: "275.4 KB",
    file_url: "#"
  },
  {
    date: "06th March, 2026",
    title: "Circular - Filing Forms to monitor insolvency resolution processes for Personal Guarantors",
    size: "532.42 KB",
    file_url: "#"
  },
  {
    date: "05th March, 2026",
    title: "Approval of Resolution Plan - Doshi Holdings Private Limited",
    size: "816.88 KB",
    file_url: "#"
  },
];

const carouselImages = [
  { src: img1, caption: "Eighth Annual Day 2024" },
  { src: img2, caption: "IBBI-NeSt Colloquium" },
  { src: img3, caption: "International Conclave" },
  { src: img4, caption: "Women's Day Celebration" },
  { src: img5, caption: "IBBI Seminar" },
  { src: img6, caption: "Conference meeting" },
  { src: img7, caption: "Recent Event" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch news items with their PDF files from your Local Node.js Backend connected to MySQL
  const { data: dbNewsItems, isLoading, error } = useQuery({
    queryKey: ["newsItems"],
    queryFn: async () => {
      // Connects to the local server running on port 5000
      const response = await fetch("http://localhost:5000/api/news");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  // Use database items if available, else use fallback
  const displayNews = dbNewsItems && dbNewsItems.length > 0 ? dbNewsItems : fallbackNewsItems;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="gov-hero py-4 md:py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* What's New */}
        <div className="bg-background rounded-lg shadow-md p-4 md:p-5">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-[28px] font-extrabold flex items-center">
              <span className="text-[#1e3a8a]">Whats</span> <span className="text-[#fcb900] ml-1.5">New</span>
            </h2>
            <div className="flex gap-3">
              <a href="#" className="px-5 py-1.5 text-xs font-bold rounded-full bg-[#fcb900] text-gray-900 hover:bg-[#e0a500] transition-colors">
                Subscribe
              </a>
              <a href="#" className="px-5 py-1.5 text-xs font-bold rounded-full bg-[#fcb900] text-gray-900 hover:bg-[#e0a500] transition-colors">
                Company Specific Subscription
              </a>
            </div>
          </div>

          <div className="whats-new-scroll relative h-[350px] overflow-y-auto pr-3 border-t-2 border-dotted border-gray-300">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gov-saffron"></div>
              </div>
            )}
            {error && (
              <p className="text-xs text-red-500 mb-2">Error connecting to database. Showing offline data.</p>
            )}
            {displayNews.map((item, i) => (
              <a
                key={i}
                href={item.file_url || "#"}
                target={item.file_url && item.file_url !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block border-b-2 border-dotted border-gray-300 py-5 hover:bg-gray-50 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 text-gray-600 mb-1.5">
                  <Calendar size={15} className="text-gray-500" />
                  <span className="font-bold text-[14px] text-gray-700">{item.date}</span>
                </div>
                <p className="text-[14px] text-blue-600 font-normal leading-relaxed hover:underline mb-2">
                  {item.title}
                </p>
                <div className="flex items-center gap-1.5 text-[14px] text-red-500 font-normal">
                  <FileText size={15} className="text-red-500" />
                  <span>({item.size})</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-right mt-5">
            <a href="#" className="text-[16px] text-[#0f172a] font-extrabold hover:underline">
              View All
            </a>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="rounded-lg overflow-hidden shadow-md relative bg-gov-navy h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center group border-[4px] border-white">
          <img
            src={carouselImages[currentSlide].src}
            alt={carouselImages[currentSlide].caption}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 py-3 bg-gradient-to-t from-black/80 to-transparent flex justify-center z-10 px-4 text-center">
            <p className="text-white text-xs md:text-sm font-medium tracking-wide">
              {carouselImages[currentSlide].caption}
            </p>
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black rounded-full w-8 h-8 flex items-center justify-center text-white z-20 border-2 border-white transition-opacity hidden group-hover:flex"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black rounded-full w-8 h-8 flex items-center justify-center text-white z-20 border-2 border-white transition-opacity hidden group-hover:flex"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors border border-white/50 ${i === currentSlide ? "bg-white" : "bg-black/50"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
