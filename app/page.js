"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getRandomTemplate } from "./templates.js"; // Import the template function

const streamers = [
  {
    "name": "Scout",
    "email": "work.scoutop@gmail.com",
    "image": "https://yt3.googleusercontent.com/y5HF9M4JSSi3foraZ295PHLHUtIuks-WwKUV2hzHGwuGU7HR-jorbJHyEc0ITxG3u4shrevV3Y0=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Scout"
  },
  {
    "name": "Mafia",
    "email": "mafia@8bitcreatives.in",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_kobD1SCfYWRcGF8RbtcbHAFWUscZYGGcIrr0-2JJxEWPU=s1000-c-k-c0x00ffffff-no-rj-mo",
    "platform": "youtube",
    "channelName": "Mafia"
  },
  {
    "name": "Sensei",
    "email": "dsntalks@gmail.com",
    "image": "https://yt3.googleusercontent.com/L9Gt10oEXzblz4WlDwYdfAWJw3YTEfm4tGrf464_rCtCrAjACHnxzrz1RnIbKsSCwwwB4UkljZ4=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Sensei"
  },
  {
    "name": "Vanshaj",
    "email": "vanshaj.singh@revenantesports.com",
    "image": "https://yt3.googleusercontent.com/Icr2HnwB-VT-gO2Qt2np8Qxm0ScJd73j7ZcyyITw0HbI810w-XzRiaLiXq0jpSLjCf4HQrNpOQ=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Vanshaj"
  },
  {
    "name": "Mizo",
    "email": "contact.mizoplays@gmail.com",
    "image": "https://yt3.ggpht.com/XqLhgyawGpS_RFNIEJ4IsPoWd0wGvTixItv4Q4kOm9ho5KOX3-FDeld3OmNyJLctQH5jEZ2-=s1000-c-k-c0x00ffffff-no-rj-mo",
    "platform": "youtube",
    "channelName": "Mizo"
  },
  {
    "name": "Ankkita",
    "email": "contactankkitac@gmail.com",
    "image": "https://yt3.googleusercontent.com/rkvwutkumuE1ZtumoDlNrkTCueAb0wjxZ0fzzY30BiKHyVLg2WnHE5BdBjrF2DL7G8zRzVbsEPM=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Ankkita"
  },
  {
    "name": "Abhinav",
    "email": "abhi9avyt@gmail.com",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_lKss5hp3ySA9IzEaLpK44yW9suaxGSpxq0XYlpD_RmRguZ=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Abhinav"
  },
  {
    "name": "Mortal",
    "email": "connect@s8ul.ggg",
    "image": "https://yt3.ggpht.com/CgDoovzSEFT24l-LQ8L-aqglwU5j7ychWiAMUvzPwqEKmntodpd8LEjGeaTIdZtqEoxYENDMhzI=s1000-c-k-c0x00ffffff-no-rj-mo",
    "platform": "youtube",
    "channelName": "Mortal"
  },
  {
    "name": "Rebel",
    "email": "rebel@8bitcreatives.inn",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_moyy3H-vOAmpfP_2FT5jd6pVQYk8xxPBQ7YMxhvLUa-nu1=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Rebel"
  },
  {
    "name": "Willly",
    "email": "workwillygaming@gmail.com",
    "image": "https://yt3.googleusercontent.com/3BM32e7Wuno32rqBipAxAuEl8uWDdj5d6-d3FdsP4fRYFHCOHGr8bqy5lEkY-iaSe6f5CdMaRQ=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Willly"
  },
  {
    "name": "Ronak",
    "email": "ronakjanjuha@yahoo.com",
    "image": "https://yt3.googleusercontent.com/gNW_yLy6upyMPcYjjTHkLmLRl4ExvoZkMoYHi_qZ1PpLsnw3SJcnqG20I7_A_1lfpinWKNegIQ=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Ronak"
  },
  {
    "name": "Jonathan",
    "email": "contact@godlikeesports.com",
    "image": "https://yt3.googleusercontent.com/LSfY1cV1wEWgXQOp3IMnKBVXo4Akr-FrNUqPa-RDo5Ls-o4YW0yqn_-ZHZzo40j8irSyLAc4=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Jonathan"
  },
  {
    "name": "Omega",
    "email": "Lsomega221@gmail.com",
    "image": "https://yt3.googleusercontent.com/Z9vcimsVwc55MK4sBlOEFQami9qbYRN_WpiCcFq0BsjPuYWBRAfDJoifUl_9v2lP6NiBZIrzJg=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Omega"
  },
  {
    "name": "Sharkshee",
    "email": "shakshishetty2@gmail.com",
    "image": "https://yt3.googleusercontent.com/8t2BSt6AIKqOZUNnfvfHJNBm478qUK2bVR-hz9P0VDBB5c2z43fF-Nltp6HZUN-MyoDppy6q430=s1000-c-k-c0x00ffffff-no-rj",
    "platform": "youtube",
    "channelName": "Sharkshee"
  },
   {
    "name": "Lolzzz",
    "email": "workwithlolzzz@gmail.com",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_niGQI-25G_EfSn6qNtF7Ll8VT4eVvJfCQv849dtFycZtE=s1000-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    "name": "Crow",
    "email": "Pubgmobilecrow@gmail.com",
    "image": "https://yt3.ggpht.com/zWbDdBF7XnddqY7Rp9yjo82712ew6oVS9cYxTOb1N1ll42x2Oy8vbHEyLSlpBCRP7KzMkw6F=s1000-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    "name": "Kaashvi",
    "email": "kaashplays@gmail.com",
    "image": "https://yt3.googleusercontent.com/HGOGEKEVXtZM3A_YUK2xJzdIXEkMBUiQ4zEhBoPTZoz29TtM30ZSP-LNzxH_Atmsh3lfphBfMQ=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Antaryami",
    "email": "workforantaryami@gmail.com",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_k1ZJsfL2jyhWY0hdGYiHZ3ErjQKZp_PtI3KIUx0LLwazg=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Dobby",
    "email": "deepanshirawat510@gmail.com",
    "image": "https://yt3.googleusercontent.com/1CBUsBEsgsWmZTG4nqPjAn7dYkT0_vgDl4-L5YePft3a7TIVVpvmbsCf2pLYFo5cCoYVHcoqsg=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Hastar",
    "email": "workforhastar@gmail.com",
    "image": "https://yt3.googleusercontent.com/lxIeUOdFkk4195EQLToo8iTbEdBYQhGryza1aqp42Ezd73l-R8zXNkXxINyjc8ojexJqS8PsqKk=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Shreeman Legend",
    "email": "work4shreeman@gmail.com",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_lskMDtwWwmVb3KLSyXXgDfdx-Be9XHqbtigiWLtY_N-II=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Bachu",
    "email": "riyabusiness24@gmail.com",
    "image": "https://yt3.googleusercontent.com/16wHEb_8RbEiBVXugKx1L3O8OtAueYfAvi7knVrWnfTvci3Ih290o7ZSPpYmRRaXPbBV5KJ89UI=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Hector",
    "email": "Workwithhector92@gmail.com",
    "image": "https://yt3.googleusercontent.com/GbliEdEB5xksHeUmxGEmJGSDSFe3EfPjuLzu3KSe70aGIMmg01J50SLRixyb_ZFQMhcAnlJnvA=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Mili kya Mili",
    "email": "mili@8bitcreatives.in",
    "image": "https://yt3.googleusercontent.com/ytc/AIdro_kvjd1utFABahAKwmAl1rtpRoYo_MwKBiBgWnSliWpRBRQ=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Neutrino",
    "email": "neu3nocodm@gmail.com",
    "image": "https://yt3.googleusercontent.com/Y99rH9WCdYycAPOJmB9omIhU_GJ59gykSuVZ5JKrBsVAkPqWr06-Hpn2glSYoLFfFII9kFRxKA=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "City Sushi",
    "email": "gamewithsakshi@gmail.com",
    "image": "https://yt3.googleusercontent.com/5vcFFuIELMMzEnJgNvYGAppCtRyeZeRoAUsCHLXB6qi50BIjFe-lljFbst6CGRc-GQzLLitDNxk=s1000-c-k-c0x00ffffff-no-rj"
  },
  {
    "name": "Payal",
    "email": "payaldhare@8bitcreatives.in",
    "image": "https://yt3.googleusercontent.com/BkYkX3sg_NJTNZilCQhObmqDiyJER4_9U8VG7gNOxTnPnd-eXv-AVzJoau-VQQI0JBAaqbP7EA=s1000-c-k-c0x00ffffff-no-rj"
  }
];


export default function Home() {
  const [selectedStreamer, setSelectedStreamer] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualName, setManualName] = useState("");
  const [manualEmail, setManualEmail] = useState("");

  const filteredStreamers = useMemo(() => {
    return streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const generateMessage = async (streamerName, platform = "their platform") => {
    setIsGenerating(true);

    setTimeout(() => {
      const template = getRandomTemplate(streamerName, platform);
      setSubject(template.subject);
      setMessage(template.message);
      setIsGenerating(false);
    }, 800);
  };

  const handleStreamerSelect = async (streamer) => {
    setSelectedStreamer(streamer);
    setDropdownOpen(false);
    setSearchQuery("");
    setShowManualInput(false);
    await generateMessage(streamer.name, streamer.platform);
  };

  const handleManualInputToggle = () => {
    setShowManualInput(true);
    setDropdownOpen(true);
    setSelectedStreamer(null);
  };

  const handleManualSubmit = () => {
    if (manualName.trim() && manualEmail.trim()) {
      setSelectedStreamer({ name: manualName, email: manualEmail });
      setDropdownOpen(false);
      setShowManualInput(false);
      generateMessage(manualName);
    }
  };

  const handleSendEmail = () => {
    if (!selectedStreamer) return;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(message);

    window.location.href = `mailto:${selectedStreamer.email}?Bcc=info@glitchover.com&subject=${encodedSubject}&body=${encodedBody}`;
  };

  const getChannelUrl = (streamer) => {
    if (streamer.platform === "youtube") {
      return `https://youtube.com/@${streamer.channelName}`;
    }
    return `https://twitch.tv/${streamer.channelName}`;
  };

  return (
    <div className="min-h-[100dvh] relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dkzp8h6xw/image/upload/f_auto,q_auto/v1725446926/fc0dcd9b70a90b6d55d070815dff4af0_wmzh70.webp')" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/30 to-black/70" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-[#40FFFF]/30 shadow-[0_0_30px_rgba(64,255,255,0.3)]">
          {/* Title */}
          <div className="flex justify-center mb-4">
            <img src={"/logo2.png"} alt="Glitchover" />
          </div>
          <p className="text-center text-gray-400 mb-8 font-['Rajdhani'] text-sm">
            Send a message to your favorite streamer
          </p>

          {/* Custom Dropdown */}
          <div className="mb-6">
            <label className="block text-[#40FFFF] font-['Rajdhani'] text-sm font-semibold mb-2 tracking-wide">
              SELECT STREAMER
            </label>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full bg-black/50 border-2 border-[#40FFFF]/50 rounded-lg px-4 py-3 text-left text-white font-['Exo_2'] flex items-center justify-between hover:border-[#40FFFF] hover:shadow-[0_0_15px_rgba(64,255,255,0.5)] transition-all duration-300"
              >
                {selectedStreamer ? (
                  <div className="flex items-center gap-3">
                    {selectedStreamer.image && (
                      <img
                        src={selectedStreamer.image}
                        alt={selectedStreamer.name}
                        className="w-8 h-8 rounded-full object-cover border-2 border-[#40FFFF]/50"
                      />
                    )}
                    <span>{selectedStreamer.name}</span>
                  </div>
                ) : (
                  <span>Choose a streamer...</span>
                )}
                <svg
                  className={`w-5 h-5 text-[#40FFFF] transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-black/90 backdrop-blur-xl border-2 border-[#40FFFF]/50 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(64,255,255,0.4)] z-50">
                  {!showManualInput ? (
                    <>
                      {/* Search Input */}
                      <div className="p-3 border-b border-[#40FFFF]/20">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search streamer..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-black/50 border border-[#40FFFF]/30 rounded-lg px-3 py-2 pl-10 text-white font-['Exo_2'] text-sm focus:outline-none focus:border-[#40FFFF] transition-all"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <svg
                            className="w-4 h-4 text-[#40FFFF] absolute left-3 top-1/2 -translate-y-1/2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Streamer List */}
                      <div className="max-h-64 overflow-y-auto scrollbar-hide relative">
                        {filteredStreamers.length > 0 ? (
                          filteredStreamers.map((streamer) => (
                            <button
                              key={streamer.name}
                              onClick={() => handleStreamerSelect(streamer)}
                              className="w-full px-4 py-3 text-left text-white font-['Exo_2'] hover:bg-[#40FFFF]/20 hover:text-[#40FFFF] transition-all duration-200 border-b border-[#40FFFF]/10 last:border-b-0 flex items-center gap-3"
                            >
                              <img
                                src={streamer.image}
                                alt={streamer.name}
                                className="w-10 h-10 rounded-full object-cover border-2 border-[#40FFFF]/30"
                              />
                              <span>{streamer.name}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-6 text-center text-gray-500 font-['Exo_2'] text-sm">
                            No streamers found
                          </div>
                        )}
                        
                        {/* Custom Entry Option */}
                        <button
                          onClick={handleManualInputToggle}
                          className="w-full px-4 py-3 text-left text-[#40FFFF] font-['Exo_2'] font-semibold hover:bg-[#40FFFF]/20 transition-all duration-200 border-t-2 border-[#40FFFF]/30 flex items-center gap-3"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#40FFFF]/20 border-2 border-[#40FFFF]/50 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                          <span>Enter Custom Streamer</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Manual Input Form */
                    <div className="p-4 space-y-4 ">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-[#40FFFF] font-['Rajdhani'] font-semibold text-sm tracking-wide">
                          CUSTOM STREAMER
                        </h3>
                        <button
                          onClick={() => setShowManualInput(false)}
                          className="text-gray-400 hover:text-[#40FFFF] transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div>
                        <label className="block text-[#40FFFF]/80 font-['Rajdhani'] text-xs font-semibold mb-1.5 tracking-wide">
                          STREAMER NAME
                        </label>
                        <input
                          type="text"
                          value={manualName}
                          onChange={(e) => setManualName(e.target.value)}
                          className="w-full bg-black/50 border border-[#40FFFF]/30 rounded-lg px-3 py-2 text-white font-['Exo_2'] text-sm focus:outline-none focus:border-[#40FFFF] transition-all"
                          placeholder="Enter name..."
                        />
                      </div>

                      <div>
                        <label className="block text-[#40FFFF]/80 font-['Rajdhani'] text-xs font-semibold mb-1.5 tracking-wide">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          value={manualEmail}
                          onChange={(e) => setManualEmail(e.target.value)}
                          className="w-full bg-black/50 border border-[#40FFFF]/30 rounded-lg px-3 py-2 text-white font-['Exo_2'] text-sm focus:outline-none focus:border-[#40FFFF] transition-all"
                          placeholder="Enter email..."
                        />
                      </div>

                      <button
                        onClick={handleManualSubmit}
                        disabled={!manualName.trim() || !manualEmail.trim()}
                        className="w-full bg-[#40FFFF] hover:bg-[#33E6E6] text-black font-['Rajdhani'] font-bold py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(64,255,255,0.5)] hover:shadow-[0_0_20px_rgba(64,255,255,0.7)] uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#40FFFF]"
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Regenerate Button */}
          {selectedStreamer && (
            <button
              onClick={() => generateMessage(selectedStreamer.name, selectedStreamer.platform || "their platform")}
              disabled={isGenerating}
              className="w-full bg-black/50 border-2 border-[#40FFFF]/50 hover:border-[#40FFFF] text-[#40FFFF] font-['Rajdhani'] font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(64,255,255,0.4)] uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Regenerate Message
            </button>
          )}

          {/* Email Preview */}
          {selectedStreamer && (
            <div className="space-y-4 my-6 animate-fadeIn">
              {/* Loading State */}
              {isGenerating && (
                <div className="bg-black/50 border border-[#40FFFF]/30 rounded-lg px-4 py-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 border-4 border-[#40FFFF]/20 border-t-[#40FFFF] rounded-full animate-spin"></div>
                      <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-purple-500/50 rounded-full animate-spin animation-delay-150"></div>
                    </div>
                    <p className="text-[#40FFFF] font-['Rajdhani'] text-lg font-semibold animate-pulse">
                      Crafting your message
                    </p>
                    <p className="text-gray-400 font-['Exo_2'] text-sm">
                      Creating a personalized message for {selectedStreamer.name}
                    </p>
                  </div>
                </div>
              )}

              {/* Generated Content */}
              {!isGenerating && subject && message && (
                <>
                  {/* Subject */}
                  <div>
                    <label className="block text-[#40FFFF] font-['Rajdhani'] text-sm font-semibold mb-2 tracking-wide">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-black/50 border border-[#40FFFF]/30 rounded-lg px-4 py-3 text-gray-300 font-['Exo_2'] shadow-[0_0_10px_rgba(64,255,255,0.2)] focus:outline-none focus:border-[#40FFFF] focus:shadow-[0_0_15px_rgba(64,255,255,0.4)] transition-all"
                      placeholder="Enter subject..."
                    />
                  </div>

                  {/* Body */}
                  <div>
                    <label className="block text-[#40FFFF] font-['Rajdhani'] text-sm font-semibold mb-2 tracking-wide">
                      MESSAGE
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={8}
                      className="w-full bg-black/50 border border-[#40FFFF]/30 rounded-lg px-4 py-3 text-gray-300 font-['Exo_2'] shadow-[0_0_10px_rgba(64,255,255,0.2)] focus:outline-none focus:border-[#40FFFF] focus:shadow-[0_0_15px_rgba(64,255,255,0.4)] transition-all resize-none scrollbar-hide"
                      placeholder="Enter your message..."
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={handleSendEmail}
                    className="w-full bg-[#40FFFF] hover:bg-[#33E6E6] text-black font-['Orbitron'] font-bold py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(64,255,255,0.6)] hover:shadow-[0_0_30px_rgba(64,255,255,0.9)] animate-pulse-glow uppercase tracking-wider"
                  >
                    SEND MESSAGE
                  </button>
                </>
              )}
            </div>
          )}

          <div className="flex items-center justify-center">
            <Link target="_blank" href={'https://www.instagram.com/reel/DPwaoAPDCmh/'} className="text-center text-gray-400 mb-8 font-['Rajdhani'] underline underline-offset-4 font-bold text-md ">
              TAG YOUR FAVOURITE CREATOR ON INSTAGRAM
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
               