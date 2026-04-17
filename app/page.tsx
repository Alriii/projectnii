"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type Member = {
  id: string;
  name: string;
  quote: string;
  email: string;
  profileImage: string;
  skills: string[];
  aboutMe: {
    age: string;
    religion: string;
    birthday: string;
    favoriteFood: string;
    favoriteDrink: string;
    favoriteMusicGroup: string;
  };
  favoriteLink: {
    title: string;
    href: string;
  };
};

const imageAssignments = {
  branding: "/brand-logo.png",
  background: "/kawaii-bg.png",
  profiles: {
    "Kenneth R. Imperial": "/kenneth-profile-final.png",
    "Clifford S. Aying": "/clifford-profile-final.png",
    "Sophia Karylle A. Chavez": "/sophia-profile-final.png",
  },
} as const;

const members: Member[] = [
  {
    id: "kenneth",
    name: "Kenneth R. Imperial",
    quote: "Way olarks pero sige lang padayon.",
    email: "imperialkenneth@gmail.com",
    profileImage: imageAssignments.profiles["Kenneth R. Imperial"],
    skills: ["Kaon", "Pani Udto", "Pamahaw", "Panihapon"],
    aboutMe: {
      age: "20",
      religion: "Christian",
      birthday: "June 20, 2005",
      favoriteFood: "Adobong Pusit",
      favoriteDrink: "Water",
      favoriteMusicGroup: "Casting Crowns",
    },
    favoriteLink: {
      title: "Mao sadt ni",
      href: "https://www.youtube.com/watch?v=3rT8Re1EIQc&list=RD3rT8Re1EIQc&start_radio=1",
    },
  },
  {
    id: "clifford",
    name: "Clifford S. Aying",
    quote: "ok rag bisag asa basta ok rako.",
    email: "Fordskie@gmail.com",
    profileImage: imageAssignments.profiles["Clifford S. Aying"],
    skills: ["Guifakist", "Drumist", "Pianist", "Bassist"],
    aboutMe: {
      age: "20",
      religion: "Christian",
      birthday: "Nov 25, 2005",
      favoriteFood: "Adobong Pusit",
      favoriteDrink: "Water",
      favoriteMusicGroup: "Casting Crowns",
    },
    favoriteLink: {
      title: "Mao ni",
      href: "https://www.youtube.com/watch?v=3rT8Re1EIQc&list=RD3rT8Re1EIQc&start_radio=1",
    },
  },
  {
    id: "sophia",
    name: "Sophia Karylle A. Chavez",
    quote: "Mayor Sa 2A nga kugihan.",
    email: "Sophiakyriechavez@gmail.com",
    profileImage: imageAssignments.profiles["Sophia Karylle A. Chavez"],
    skills: [
      "Artistic skills (Traditional & Digital Art)",
      "Computer skills",
      "Broadcasting skills (School Competition)",
      "Leadership skills",
    ],
    aboutMe: {
      age: "20",
      religion: "INC",
      birthday: "May 07, 2005",
      favoriteFood: "Halang - Halang",
      favoriteDrink: "Coke",
      favoriteMusicGroup: "IV of Spades",
    },
    favoriteLink: {
      title: "saktrue",
      href: "https://www.youtube.com/watch?v=uyC8mS5MHkk&list=RDuyC8mS5MHkk&start_radio=1",
    },
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(members[0].id);

  const activeMember = useMemo(
    () => members.find((member) => member.id === activeTab) ?? members[0],
    [activeTab],
  );

  return (
    <div className="page-shell min-h-screen text-[#4A4E69]">
      <div className="page-overlay">
        <header className="sticky top-0 z-30 border-b border-[#ffffff80] bg-[#B2E2F2]/70 backdrop-blur-md">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8">
            <div className="flex items-center gap-2 rounded-3xl bg-[#FFF9F2]/80 px-3 py-2 shadow-sm">
              <Image
                src={imageAssignments.branding}
                alt="Kawaii team branding logo"
                width={36}
                height={36}
                className="rounded-full border-2 border-[#FFB7B2] bg-white object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl bg-[#FFF9F2]/80 p-2 shadow-sm">
            {members.map((member) => (
              <button
                key={member.id}
                onClick={() => setActiveTab(member.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition hover:scale-105 sm:text-sm ${
                  activeTab === member.id
                    ? "bg-[#FFB7B2] text-[#4A4E69]"
                    : "bg-white text-[#4A4E69]/80"
                }`}
                type="button"
              >
                {member.name.split(" ")[0]}
              </button>
            ))}
            </div>
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-5 pt-5 md:px-8 md:pb-8 md:pt-6">
          <AnimatePresence mode="wait">
            <motion.section
              key={activeMember.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid gap-5"
            >
              <article className="rounded-3xl bg-white/80 p-5 shadow-sm transition-transform hover:scale-105 md:p-6">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                  <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-[#B2E2F2] bg-gradient-to-br from-white to-[#FFB7B2]/25">
                    <Image
                      src={activeMember.profileImage}
                      alt={`${activeMember.name} profile`}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold">{activeMember.name}</h1>
                    <p className="mt-4 rounded-3xl bg-[#FDFD96]/45 px-4 py-3 text-sm italic">
                      &ldquo;{activeMember.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl bg-white/80 p-5 shadow-sm transition-transform hover:scale-105 md:p-6">
                <h2 className="text-lg font-bold">Skills</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeMember.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#B2E2F2]/70 px-3 py-1 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl bg-white/80 p-5 shadow-sm transition-transform hover:scale-105 md:p-6">
                <h2 className="text-lg font-bold">About Me</h2>
                <div className="mt-4 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-sm">
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-bold">Age:</span> {activeMember.aboutMe.age}
                    </p>
                    <p>
                      <span className="font-bold">Religion:</span>{" "}
                      {activeMember.aboutMe.religion}
                    </p>
                    <p>
                      <span className="font-bold">Birthday:</span>{" "}
                      {activeMember.aboutMe.birthday}
                    </p>
                    <p>
                      <span className="font-bold">Favorite Food:</span>{" "}
                      {activeMember.aboutMe.favoriteFood}
                    </p>
                    <p>
                      <span className="font-bold">Favorite Drink:</span>{" "}
                      {activeMember.aboutMe.favoriteDrink}
                    </p>
                    <p>
                      <span className="font-bold">Favorite Music Group:</span>{" "}
                      {activeMember.aboutMe.favoriteMusicGroup}
                    </p>
                    <p>
                      <span className="font-bold">Favorite Song:</span>{" "}
                      <a
                        href={activeMember.favoriteLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#2c5a8a] underline decoration-[#2c5a8a] underline-offset-2 transition hover:text-[#4A4E69]"
                      >
                        {activeMember.favoriteLink.title}
                      </a>
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl bg-white/80 p-5 shadow-sm transition-transform hover:scale-105 md:p-6">
                <h2 className="text-lg font-bold">Contact</h2>
                <div className="mt-4 rounded-3xl border border-white/70 bg-white/80 p-4 text-sm shadow-sm">
                  <p>
                    <span className="font-bold">Email:</span> {activeMember.email}
                  </p>
                </div>
              </article>
            </motion.section>
          </AnimatePresence>
        </main>
      </div>
      <footer className="border-t border-white/50 bg-white/50 px-4 py-4 text-center backdrop-blur-sm">
        <div className="mt-3 flex items-center justify-center gap-3 text-xs">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/90 px-3 py-1 shadow-sm transition hover:scale-105 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/90 px-3 py-1 shadow-sm transition hover:scale-105 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/90 px-3 py-1 shadow-sm transition hover:scale-105 hover:underline"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
