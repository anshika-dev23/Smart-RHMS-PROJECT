import { useEffect, useState } from "react";
import heroHealthcare from "./assets/hero-healthcare.png";
const services = [
  {
    icon: "🎙️",
    title: "Voice Healthcare",
    description:
      "Tell your health problem using your voice in your preferred language.",
    action: "Speak Now",
    tone: "sky",
  },
  {
    icon: "👨‍⚕️",
    title: "Find a Doctor",
    description:
      "Find and connect with available doctors or healthcare providers.",
    action: "Connect",
    tone: "teal",
  },
  {
    icon: "💊",
    title: "Medicine Availability",
    description:
      "Check medicine availability and find nearby sources.",
    action: "Check Stock",
    tone: "sky",
  },
  {
    icon: "🚨",
    title: "Emergency SOS",
    description:
      "Get quick access to emergency assistance when needed.",
    action: "Get Help",
    tone: "rose",
  },
  {
    icon: "👩‍⚕️",
    title: "Health Worker Support",
    description:
      "Provide digital assistance for ASHA and ANM health workers.",
    action: "Access Portal",
    tone: "teal",
  },
  {
    icon: "📋",
    title: "My Health Records",
    description:
      "Access and manage your personal healthcare history.",
    action: "View Records",
    tone: "sky",
  },
];

const steps = [
  {
    number: "Step 1",
    icon: "🎙️",
    title: "Tell Your Problem",
    description:
      "User speaks about their health problem in their preferred language.",
  },
  {
    number: "Step 2",
    icon: "🗣️",
    title: "Voice → Text",
    description: "The voice input is converted into text.",
  },
  {
    number: "Step 3",
    icon: "🤖",
    title: "AI Understands",
    description:
      "AI identifies and structures symptoms, duration, and basic information.",
  },
  {
    number: "Step 4",
    icon: "✓",
    title: "Confirm Your Information",
    description:
      "If information is unclear, the system asks clarification questions. The user confirms the information before proceeding.",
  },
  {
    number: "Step 5",
    icon: "🏥",
    title: "Get Healthcare Support",
    description:
      "The system guides the user toward Doctor, Health Worker, Medicine, or Emergency Support.",
  },
];

const languages = [
  ["hi", "हिंदी (Hindi)"],
  ["en", "English"],
  ["bn", "বাংলা (Bengali)"],
  ["te", "తెలుగు (Telugu)"],
  ["mr", "मराठी (Marathi)"],
  ["ta", "தமிழ் (Tamil)"],
];

function App() {
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [voiceText, setVoiceText] = useState(
    "Speak your symptom or health question..."
  );
  const [language, setLanguage] = useState("hi");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // Sliding navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 20);

      if (currentScrollY <= 20) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down → slide navbar away
        setIsNavVisible(false);
      } else {
        // Scrolling up → slide navbar back
        setIsNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setIsNavVisible(true);
    }
  };

  const openVoiceModal = () => {
    setVoiceText("Speak your symptom or health question...");
    setShowVoiceModal(true);
  };

  const closeVoiceModal = () => {
    setShowVoiceModal(false);
  };

  const selectVoiceQuery = (text) => {
    setVoiceText(`"${text}"`);
  };

  const simulateVoiceRecognized = () => {
    setVoiceText("Processing voice input and routing...");

    setTimeout(() => {
      setShowVoiceModal(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#fafcff] font-sans text-slate-800 antialiased">
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-transform duration-300 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        } ${!isAtTop ? "shadow-md" : ""}`}
      >
        <div className="h-20 max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0284c7] to-[#0d9488] flex items-center justify-center text-white shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl">🏥</span>
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-xl text-[#0c4a6e] tracking-tight leading-tight">
                SWASTHYASETU
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Smart Voice-First Rural Healthcare
              </span>
            </div>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-sm font-semibold text-[#0284c7] hover:text-[#0369a1] transition-colors"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-slate-600 hover:text-[#0284c7] transition-colors"
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-slate-600 hover:text-[#0284c7] transition-colors"
            >
              How It Works
            </button>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-[#0284c7] hover:bg-sky-50/60 transition-colors"
            >
              Login
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm font-semibold shadow-sm hover:shadow transition-all"
            >
              Sign Up
            </button>

            <div className="w-8 h-8 rounded-full bg-sky-100 text-[#0284c7] flex items-center justify-center ml-1">
              <span className="text-sm">👤</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="w-full pt-20 bg-[#fafcff]">
        {/* ================= HERO ================= */}
        <section
          id="home"
          className="scroll-mt-20 w-full relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-teal-50/20 py-12 lg:py-20"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-[#0f766e] border border-teal-200/60 text-xs font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse" />
                  SMART VOICE-FIRST RURAL HEALTHCARE
                </div>

                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight mt-5 leading-[1.18]">
                  Healthcare That Reaches{" "}
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#0284c7]">
                    Every Village
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-6 max-w-2xl">
                  Get healthcare support through voice — connect with doctors,
                  find medicines, access emergency services, and get guided to
                  the right care.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={openVoiceModal}
                    className="cursor-pointer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#075985] text-white font-semibold text-base shadow-md hover:shadow-lg hover:shadow-sky-500/20 transition-all active:scale-[0.99]"
                  >
                    <span className="text-xl">🎙️</span>
                    <span>Talk to SwasthyaSetu</span>
                  </button>

                  <span className="text-sm font-medium text-slate-600 flex items-center gap-1.5">
                    <span className="text-[#0d9488]">✓</span>
                    Tell your problem in any Indian language
                  </span>
                </div>
              </div>

              {/* Right visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full relative rounded-3xl bg-white p-3 shadow-[0_4px_24px_rgba(15,23,42,0.06)] border border-sky-100/80">
               <img
  alt="Rural healthcare connection through voice technology"
  className="w-full h-auto rounded-2xl object-contain"
  src={heroHealthcare}
/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="scroll-mt-20 w-full bg-[#f4f8fc] py-16 lg:py-24 border-y border-sky-100/60"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0f172a] text-center mb-12 tracking-tight">
              Healthcare Support, All in One Place
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  onClick={
                    service.title === "Voice Healthcare"
                      ? openVoiceModal
                      : undefined
                  }
                  className={`${
                    service.title === "Voice Healthcare"
                      ? "cursor-pointer"
                      : ""
                  } bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform ${
                        service.tone === "teal"
                          ? "bg-teal-50 text-teal-600"
                          : service.tone === "rose"
                          ? "bg-rose-50 text-rose-600"
                          : "bg-sky-50 text-sky-600"
                      }`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="font-bold text-lg text-[#0f172a] mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center gap-1.5 text-sm font-semibold text-[#0284c7] group-hover:text-[#0d9488] transition-colors">
                    <span>{service.action}</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section
          id="how-it-works"
          className="scroll-mt-20 w-full bg-[#fafcff] py-16 lg:py-24"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0f172a] text-center mb-16 tracking-tight">
              How SwasthyaSetu Works
            </h2>

            {/* Desktop */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-6 relative mb-16">
              <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-sky-200 via-teal-200 to-sky-200" />

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white border border-sky-100 shadow-sm flex items-center justify-center text-3xl mb-4 hover:border-teal-300 transition-colors">
                    {step.icon}
                  </div>

                  <span className="text-xs uppercase tracking-widest text-[#0d9488] font-bold mb-1.5">
                    {step.number}
                  </span>

                  <h3 className="font-bold text-base text-[#0f172a] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile / Tablet */}
            <div className="lg:hidden flex flex-col gap-6 relative pl-6 mb-16">
              <div className="absolute top-4 bottom-4 left-9 w-0.5 bg-gradient-to-b from-sky-200 via-teal-200 to-sky-200" />

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-4 relative z-10"
                >
                  <div className="w-14 h-14 rounded-xl bg-white border border-sky-100 shadow-sm flex items-center justify-center text-2xl shrink-0">
                    {step.icon}
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex-1">
                    <span className="text-xs uppercase tracking-widest text-[#0d9488] font-bold block mb-1">
                      {step.number}
                    </span>

                    <h3 className="font-bold text-base text-[#0f172a] mb-1">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Safety Notice */}
            <div className="max-w-3xl mx-auto rounded-2xl bg-sky-50/70 border border-sky-200/80 p-6 sm:p-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-100/80 flex items-center justify-center text-[#0d9488] shrink-0 mt-0.5">
                <span className="text-lg">✓</span>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#0f172a] mb-1">
                  Clinical Safety & Responsibility Notice
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed">
                  SwasthyaSetu AI assists solely with understanding voice
                  complaints and routing to the right care. Final diagnosis
                  and medical treatment are always delivered by qualified
                  healthcare professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= VOICE MODAL ================= */}
      {showVoiceModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={closeVoiceModal}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl relative border border-sky-100"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVoiceModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center justify-between mb-6 pr-8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0d9488] animate-ping" />
                <span className="text-xs font-bold uppercase text-[#0d9488] tracking-wider">
                  Listening Mode Active
                </span>
              </div>

              <div className="flex items-center gap-1 bg-sky-50 px-3 py-1.5 rounded-lg text-slate-700 text-xs font-medium border border-sky-100">
                <span className="text-[#0284c7]">🌐</span>

                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  className="bg-transparent border-none text-slate-800 font-semibold focus:outline-none cursor-pointer"
                >
                  {languages.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center my-8">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-28 h-28 rounded-full bg-teal-200/50 animate-ping" />

                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#0284c7] to-[#0d9488] text-white flex items-center justify-center shadow-lg shadow-sky-500/25">
                  <span className="text-3xl">🎙️</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-8 h-8">
                <span className="w-1.5 h-4 bg-[#0d9488] rounded-full animate-bounce" />
                <span className="w-1.5 h-8 bg-[#0284c7] rounded-full animate-bounce" />
                <span className="w-1.5 h-6 bg-[#0d9488] rounded-full animate-bounce" />
                <span className="w-1.5 h-10 bg-[#0284c7] rounded-full animate-bounce" />
                <span className="w-1.5 h-5 bg-[#0d9488] rounded-full animate-bounce" />
                <span className="w-1.5 h-7 bg-[#0284c7] rounded-full animate-bounce" />
              </div>

              <p className="font-bold text-lg text-[#0f172a] mt-6 text-center">
                {voiceText}
              </p>

              <p className="text-sm text-slate-500 mt-1 text-center">
                "Mujhe do din se bukhar aur sardi hai" / "I have a cough and
                mild fever"
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
              <span className="text-xs text-slate-500 font-medium block mb-2">
                Try saying:
              </span>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    selectVoiceQuery("Doctor se baat karni hai")
                  }
                  className="text-xs bg-white px-3 py-1.5 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-[#0284c7] border border-slate-200 transition-colors"
                >
                  "Doctor se baat karni hai"
                </button>

                <button
                  type="button"
                  onClick={() =>
                    selectVoiceQuery("Paracetamol kahan milegi?")
                  }
                  className="text-xs bg-white px-3 py-1.5 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-[#0284c7] border border-slate-200 transition-colors"
                >
                  "Paracetamol availability"
                </button>

                <button
                  type="button"
                  onClick={() => selectVoiceQuery("Chest pain emergency")}
                  className="text-xs bg-white px-3 py-1.5 rounded-lg text-rose-600 font-semibold hover:bg-rose-50 border border-rose-200 transition-colors"
                >
                  "Emergency ambulance"
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={closeVoiceModal}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={simulateVoiceRecognized}
                className="flex-1 py-3 px-4 rounded-xl bg-[#0284c7] text-white font-semibold text-sm hover:bg-[#0369a1] shadow-sm hover:shadow transition-colors"
              >
                Done Speaking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FLOATING EMERGENCY ================= */}
      <div className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 z-50">
        <div className="relative flex items-center">
          <span className="absolute -inset-1 rounded-full bg-red-500/30 animate-ping" />

          <button
            type="button"
            onClick={() => setShowEmergencyModal(true)}
            className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-[#dc2626] text-white shadow-lg hover:bg-red-700 transition-all cursor-pointer font-semibold text-sm hover:shadow-red-500/30 active:scale-95"
          >
            <span className="text-lg">☎</span>
            <span className="hidden sm:inline">Emergency SOS</span>
          </button>
        </div>
      </div>

      {/* ================= EMERGENCY MODAL ================= */}
      {showEmergencyModal && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setShowEmergencyModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-rose-100"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-red-600 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                🚨
              </div>

              <h2 className="font-bold text-lg text-slate-900">
                Emergency Assistance
              </h2>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Do you need immediate emergency help?
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:112"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#dc2626] hover:bg-red-700 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                ☎ Call Emergency Service
              </a>

              <button
                type="button"
                onClick={() => setShowEmergencyModal(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm hover:bg-slate-200 transition-colors"
              >
                📍 Open Emergency SOS
              </button>

              <button
                type="button"
                onClick={() => setShowEmergencyModal(false)}
                className="w-full py-2 text-center text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                Cancel / Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="w-full bg-[#08203e] text-slate-300 pt-16 pb-12 border-t border-sky-950">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0284c7] flex items-center justify-center text-white">
                  🏥
                </div>

                <span className="font-bold text-lg text-white tracking-tight">
                  SWASTHYASETU
                </span>
              </div>

              <span className="text-xs text-[#14b8a6] font-medium mb-3">
                Smart Voice-First Rural Healthcare
              </span>

              <p className="text-xs text-slate-300 leading-relaxed">
                Making healthcare support more accessible through voice,
                technology and connected healthcare services.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
                Explore
              </h3>

              <ul className="flex flex-col gap-2.5">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("home")}
                    className="text-xs text-slate-300 hover:text-[#14b8a6] transition-colors"
                  >
                    Home
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("services")}
                    className="text-xs text-slate-300 hover:text-[#14b8a6] transition-colors"
                  >
                    Services
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-xs text-slate-300 hover:text-[#14b8a6] transition-colors"
                  >
                    How It Works
                  </button>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
                About
              </h3>

              <ul className="flex flex-col gap-2.5">
                <li>
                  <button
                    type="button"
                    className="text-xs text-slate-300 hover:text-[#14b8a6] transition-colors"
                  >
                    About Us
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    className="text-xs text-slate-300 hover:text-[#14b8a6] transition-colors"
                  >
                    Our Mission
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
                Legal
              </h3>

              <ul className="flex flex-col gap-2.5">
                <li>
                  <button
                    type="button"
                    className="text-xs text-slate-300 hover:text-[#14b8a6] transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    className="text-xs text-slate-300 hover:text-[#14b8a6] transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-4 my-8">
            <p className="text-xs text-slate-300 leading-relaxed">
              <span className="text-white font-bold uppercase tracking-wider block sm:inline mr-2 text-[11px]">
                Healthcare Disclaimer:
              </span>
              SwasthyaSetu provides healthcare information and guidance to help
              users connect with appropriate healthcare services. It does not
              replace professional medical diagnosis or treatment. In an
              emergency, seek immediate medical assistance.
            </p>
          </div>

          <div className="text-center text-xs text-slate-400">
            © 2026 SWASTHYASETU. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;