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
  }
];

export default function Home() {
  const [selectedStreamer, setSelectedStreamer] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const filteredStreamers = useMemo(() => {
    return streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const generateMessage = async (streamer) => {
    setIsGenerating(true);

    // Simulate a slight delay for better UX (optional)
    setTimeout(() => {
      const template = getRandomTemplate(streamer.name, streamer.platform);
      setSubject(template.subject);
      setMessage(template.message);
      setIsGenerating(false);
    }, 800);
  };

  const handleStreamerSelect = async (streamer) => {
    setSelectedStreamer(streamer);
    setDropdownOpen(false);
    setSearchQuery("");
    await generateMessage(streamer);
  };

  const handleSendEmail = () => {
    if (!selectedStreamer) return;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(message);

    window.location.href = `mailto:${selectedStreamer.email}?Cc=support@glitchover.com&subject=${encodedSubject}&body=${encodedBody}`;

  };

  const getChannelUrl = (streamer) => {
    if (streamer.platform === "youtube") {
      return `https://youtube.com/@${streamer.channelName}`;
    }
    return `https://twitch.tv/${streamer.channelName}`;
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
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
                    <img
                      src={selectedStreamer.image}
                      alt={selectedStreamer.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-[#40FFFF]/50"
                    />
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
                  <div className="max-h-64 overflow-y-auto scrollbar-hide">
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
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Regenerate Button */}
          {selectedStreamer && (
            <button
              onClick={() => generateMessage(selectedStreamer)}
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
            <Link href={'/'} className="text-center text-gray-400 mb-8 font-['Rajdhani'] underline underline-offset-4 font-bold text-md ">
              TAG YOUR FAVOURITE CREATOR ON INSTAGRAM
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}