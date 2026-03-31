import Layout from "@/components/Layout";
import { Home, Phone, User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <Layout>
      {/* Banner */}
      <div className="bg-[#dfb15b] text-white py-12 relative overflow-hidden">
        {/* Abstract background effect elements simulating screenshot */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(45deg, #f2c879 25%, transparent 25%, transparent 50%, #f2c879 50%, #f2c879 75%, transparent 75%, transparent)" }}></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-3xl font-bold mb-2 uppercase tracking-wide flex items-center gap-4">
            CONTACT US
            <div className="w-12 h-0.5 bg-white opacity-80 mt-1"></div>
          </h1>
          <nav className="text-xs flex items-center gap-1.5 opacity-90 font-medium mt-4 uppercase">
            <Link to="/" className="hover:underline flex items-center">
              <Home size={12} className="mb-0.5 mr-1" />
            </Link>
            <span>&gt;</span>
            <span className="cursor-pointer hover:underline">CONTACT US</span>
            <span>&gt;</span>
            <span className="font-semibold cursor-pointer hover:underline">CONTACT US</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="bg-[#f5f5f5] p-6 lg:p-8 flex flex-col items-center text-center rounded-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-6 uppercase tracking-wider">ADDRESS</h3>
            <div className="flex justify-center w-full">
              <div className="flex gap-3 text-[13px] text-gray-700 font-medium items-center">
                <div className="bg-[#756658] text-white p-1.5 rounded-full shrink-0 flex items-center justify-center">
                  <Home size={14} />
                </div>
                <p className="text-left leading-relaxed">
                  7th Floor, Mayur Bhawan,<br/>
                  Shankar Market, Connaught<br/>
                  Circus, New Delhi -110001
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Telephone */}
          <div className="bg-[#f5f5f5] p-6 lg:p-8 flex flex-col items-center text-center rounded-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-6 uppercase tracking-wider">TELEPHONE</h3>
            <p className="text-[13px] text-gray-700 font-medium mt-2">
              +91 11 2346 2900
            </p>
          </div>

          {/* Card 3: Office Hours */}
          <div className="bg-[#f5f5f5] p-6 lg:p-8 flex flex-col items-center text-center rounded-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4 uppercase tracking-wider">OFFICE HOURS</h3>
            <p className="text-[13px] text-gray-700 font-medium leading-relaxed mb-1">
              09:30 AM to 06:00 PM<br/>
              (Monday to Friday),<br/>
              except closed holidays
            </p>
            <a href="#" className="text-[13px] text-blue-600 hover:underline">Closed Holidays</a>
          </div>

          {/* Card 4: RTI */}
          <div className="bg-[#f5f5f5] p-6 flex flex-col items-center rounded-sm relative pb-10">
            <h3 className="text-[13px] font-bold text-gray-800 mb-4 uppercase tracking-wider text-center">RIGHT TO INFORMATION</h3>
            <p className="text-[13px] text-gray-700 font-medium mb-3 text-center">
              Central Public Information Officer
            </p>
            <div className="w-full pl-2 space-y-3">
              <div className="flex gap-3 items-center text-[12px] text-gray-700 font-medium">
                <div className="bg-[#756658] text-white p-1.5 rounded-full flex items-center justify-center shrink-0">
                  <User size={14} />
                </div>
                <div className="leading-tight text-left">
                  <div>Shri Rajesh Kumar,</div>
                  <div>General Manager</div>
                </div>
              </div>
              <div className="flex gap-3 items-center text-[12px] text-gray-700 font-medium">
                 <div className="bg-[#756658] text-white p-1.5 rounded-full flex items-center justify-center shrink-0">
                   <Phone size={14} />
                 </div>
                 <div className="text-left">011-23462878</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-5">
              <a href="#" className="text-[12px] text-blue-700 font-bold hover:underline">More</a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 w-full h-[450px] bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.06746869503!2d77.213279!3d28.629342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd330545f4df%3A0x6e9c40294978be2!2sInsolvency%20and%20Bankruptcy%20Board%20of%20India!5e0!3m2!1sen!2sin!4v1711612000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="IBBI Location Map"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
