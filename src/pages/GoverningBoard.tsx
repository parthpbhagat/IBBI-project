import Layout from "@/components/Layout";

// Dummy placeholder for missing real images.
const placeholderImg = "https://via.placeholder.com/150";

const boardMembers = {
  chairperson: [
    { name: "Shri. Ravi Mital", title: "Chairperson", image: "/src/assets/giverning board/raviMital_chaiperson.jpg" }
  ],

  wholeTime: [
    { name: "Shri Jayanti Prasad", title: "", image: "/src/assets/giverning board/Shri_Jayanti_Prasad.jpeg" },
    { name: "Shri Sandip Garg", title: "", image: "/src/assets/giverning board/Shri-Sandip-Garg.jpg" },
    { name: "Dr. Bhushan Kumar Sinha", title: "", image: "/src/assets/giverning board/Dr_bhushan_Kumar_Sinha.jpg" }
  ],
  exOfficio: [
    { name: "Ms. Aparna Sinha", title: "Economic Adviser, Department of Economic Affairs, Ministry of Finance", image: placeholderImg },
    { name: "Smt. Anita Shah Akella", title: "Joint Secretary, Ministry of Corporate Affairs", image: "/src/assets/giverning board/Smt_Anita_Shah_Akella.jpg" },
    { name: "Shri Ashutosh Mishra", title: "Additional Secretary, Ministry of Law and Justice", image: "/src/assets/giverning board/AshutoshMishra.jpg" },
    { name: "Mr. Vaibhav Chaturvedi", title: "Chief General Manager, Reserve Bank of India", image: "/src/assets/giverning board/vaibhav_chaturvedi.jpg" }
  ],
  partTime: [
    { name: "Shri M. P. Ram Mohan", title: "Professor, Indian Institute of Management Ahmedabad", image: "/src/assets/giverning board/shri_Ram_Mohan.jpg" },
    { name: "Shri L. V. Prabhakar", title: "Former MD & CEO, Canara Bank", image: "/src/assets/giverning board/Mr_L_V_Prabhakar.jpeg" }
  ]
};

const MemberCard = ({ member, wide }: { member: any, wide?: boolean }) => (
  <div className={`bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.08)] border border-gray-100 p-6 flex flex-col items-center text-center ${wide ? 'w-full max-w-[280px]' : 'w-full max-w-[240px]'}`}>
    <div className="w-24 h-28 rounded-md overflow-hidden border-2 border-[#cca355] mb-4 p-1">
      <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-sm" />
    </div>
    <h3 className="font-bold text-[14px] text-gray-900 mb-1">{member.name}</h3>
    {member.title && <p className="text-[12px] text-gray-700 leading-snug mb-4 flex-grow">{member.title}</p>}
    <button className="bg-[#6b6246] hover:bg-[#5a523a] text-white px-6 py-1.5 text-xs font-semibold rounded shadow-sm mt-auto transition-colors">
      Profile
    </button>
  </div>
);

const GoverningBoard = () => {
  return (
    <Layout>
      {/* Banner Section */}
      <div className="bg-[#cca355] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent">
          <svg className="absolute w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid3" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid3)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-6xl">
          <h1 className="text-3xl font-normal tracking-wide mb-2 uppercase flex items-center gap-4">
            IBBI GOVERNING BOARD
            <span className="h-[2px] w-12 bg-white/60 inline-block"></span>
          </h1>
          <nav className="text-sm font-light">
            <a href="/" className="hover:underline text-white">Home</a>
            <span className="mx-2">›</span>
            <span>ABOUT US</span>
            <span className="mx-2">›</span>
            <span>IBBI GOVERNING BOARD</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mb-16 flex flex-col items-center w-full max-w-6xl">

        {/* Top Action Button */}
        <div className="w-full flex justify-end mb-8">
          <button className="bg-[#6b6246] hover:bg-[#5a523a] text-white px-4 py-2 text-sm font-medium rounded shadow-sm transition-colors">
            Previous Governing Board Members
          </button>
        </div>

        {/* Chairperson Section */}
        <div className="w-full flex flex-col items-center mb-12">
          <h2 className="text-2xl font-semibold text-[#3b4c68] mb-6">Chairperson</h2>
          <div className="flex justify-center flex-wrap gap-6 w-full">
            {boardMembers.chairperson.map((m, i) => <MemberCard key={i} member={m} />)}
          </div>
        </div>

        {/* Whole-time Members Section */}
        <div className="w-full flex flex-col items-center mb-12">
          <h2 className="text-2xl font-semibold text-[#3b4c68] mb-6">Whole-time Members</h2>
          <div className="flex justify-center flex-wrap gap-6 w-full">
            {boardMembers.wholeTime.map((m, i) => <MemberCard key={i} member={m} />)}
          </div>
        </div>

        {/* Ex-officio Members Section */}
        <div className="w-full flex flex-col items-center mb-12">
          <h2 className="text-2xl font-semibold text-[#3b4c68] mb-6">Ex-officio Members</h2>
          <div className="flex justify-center flex-wrap gap-6 w-full max-w-5xl">
            {boardMembers.exOfficio.map((m, i) => <MemberCard key={i} member={m} wide />)}
          </div>
        </div>

        {/* Part-time Members Section */}
        <div className="w-full flex flex-col items-center mb-12">
          <h2 className="text-2xl font-semibold text-[#3b4c68] mb-6">Part-time Members</h2>
          <div className="flex justify-center flex-wrap gap-6 w-full max-w-5xl">
            {boardMembers.partTime.map((m, i) => <MemberCard key={i} member={m} wide />)}
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default GoverningBoard;
