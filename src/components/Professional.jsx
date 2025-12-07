import { useNavigate, useLocation } from "react-router-dom";
// @ts-ignore
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Printer,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

// @ts-ignore
const Badge = ({ children }) => (
  <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-200 rounded transition-colors hover:bg-gray-300">
    {children}
  </span>
);

// @ts-ignore
const SkillBadge = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-text px-2 py-1 text-[0.75rem] font-medium text-white shadow-[0_0_0_1px_#171717_inset] transition-transform hover:scale-105 hover:shadow-lg cursor-default">
    {children}
  </span>
);

export default function Professional() {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.state?.fromCV;
  return (
    <div className="mx-auto max-w-[870px] bg-white px-4 py-12 text-text font-mono text-[14px] leading-[1.5] relative">
      <button
        onClick={() => window.print()}
        className="no-print fixed top-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg bg-text text-white shadow-lg transition-all hover:bg-gray-700 hover:scale-110"
        aria-label="Print CV"
      >
        <Printer className="h-5 w-5" />
      </button>
      {showBackButton && (
        <div className="no-print mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[0.875rem] text-text hover:underline bg-transparent border-0 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Humanitarian CV
          </button>
        </div>
      )}

      <header className="mb-8 flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
        <div className="min-w-0 flex-1">
          <h1 className="font-sans text-resume-title font-bold tracking-tight">
            Celia Guerra
          </h1>

          <p className="mb-2 font-mono text-[0.875rem] text-subtle">
            Computer Science Engineer | Technical Product Manager
          </p>

          <p className="mb-1 font-mono text-[0.75rem]">
            <a
              href="https://www.google.com/maps/place/Montevideo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 text-text no-underline hover:underline"
            >
              <MapPin className="h-3 w-3" />
              Montevideo, Uruguay
            </a>
          </p>

          <div className="no-print mt-1 flex gap-1 font-mono text-[0.875rem]">
            <a
              href="mailto:celia.guerra@caelius.dev"
              className="flex h-8 w-8 items-center justify-center rounded-md text-text transition-colors hover:bg-gray-100"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href="https://linkedin.com/in/celiamguerra"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/celiamguerra"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/59897975500"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <div className="hidden flex-col gap-1 font-mono text-[0.875rem] print:flex">
            <a className="underline" href="mailto:celia.guerra@caelius.dev">
              celia.guerra@caelius.dev
            </a>
            <a className="underline" href="https://wa.me/59897975500">
              WhatsApp: +598 97 975 500
            </a>
          </div>
        </div>

        <span className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-[1.875rem] font-bold">
          CG
        </span>
      </header>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">About</h2>
        <p className="font-mono text-[0.875rem] leading-[1.5]">
          Technical Product Manager with a strong software engineering
          background, specializing in clear requirements, user-centered
          discovery, and scalable product execution. Experienced in agile
          delivery and cross-functional collaboration across engineering,
          design, and business teams.
        </p>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">Languages</h2>

        <div className="flex gap-6 text-[0.875rem] flex-wrap">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Spanish:</span>
            <span className="text-subtle">Native</span>
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-text"></span>
              ))}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">English:</span>
            <span className="text-subtle">Fluent</span>
            <span className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-text"></span>
              ))}
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">French:</span>
            <span className="text-subtle">Basic</span>
            <span className="flex gap-0.5">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-text"></span>
              ))}
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-gray-300"
                ></span>
              ))}
            </span>
          </div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">Work Experience</h2>

        <div className="mb-8 rounded-lg">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-baseline gap-6">
              <h3 className="inline-flex items-center gap-1 text-[1rem] font-semibold leading-none">
                <a
                  href="https://caelius.dev"
                  target="_blank"
                  className="text-text no-underline hover:underline"
                >
                  Caelius Dev
                </a>
              </h3>

              <div className="text-[0.875rem] text-subtle tabular-nums">
                Sep 2021 – Present
              </div>
            </div>

            <h4 className="font-mono text-[0.875rem] leading-none">
              Technical Product Manager
            </h4>

            <div className="text-[0.75rem] text-subtle">
              Montevideo, Uruguay
            </div>
          </div>

          <div className="mt-2 font-mono text-[0.80rem]">
            <p className="mb-2 leading-[1.5]">
              Lead product architecture, vision, and development strategy for
              web and mobile solutions.
            </p>

            <ul className="ml-4 mt-2 list-disc text-[0.75rem]">
              <li className="mb-1">
                Manage full product lifecycle from discovery to delivery,
                ensuring scalability and stakeholder alignment
              </li>
              <li className="mb-1">
                Translate business needs into structured technical requirements
                and architectural components
              </li>
              <li className="mb-1">
                Direct end-to-end project execution across multiple
                international software teams
              </li>
              <li className="mb-1">
                Lead sprint planning, reviews, and retrospectives while coaching
                teams in Agile best practices
              </li>
            </ul>

            <div className="mt-2 flex flex-wrap gap-1">
              {[
                "Product Discovery",
                "Requirements Gathering",
                "Agile/Scrum",
                "Solution Architecture",
                "Digital Transformation",
                "Jira",
                "Trello",
                "ClickUp",
                "Figma",
                "Power BI",
              ].map((tech, i) => (
                <Badge key={i}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Dialpad */}
        <div className="mb-8">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-baseline gap-6">
              <h3 className="inline-flex items-center gap-1 text-[1rem] font-semibold">
                <a
                  href="https://dialpad.com"
                  target="_blank"
                  className="hover:underline"
                >
                  Dialpad
                </a>
              </h3>

              <div className="text-[0.875rem] text-subtle tabular-nums">
                Oct 2021 – Mar 2023
              </div>
            </div>

            <h4 className="font-mono text-[0.875rem] leading-none">
              Software Engineer
            </h4>

            <div className="text-[0.75rem] text-subtle">Remote</div>
          </div>

          <div className="mt-2 text-[0.75rem]">
            <p className="mb-2 leading-[1.5]">
              Engineered advanced, high-performance frontend components using
              Vue.js and Backbone.js for a global communications platform.
            </p>

            <ul className="ml-4 mt-2 list-disc text-[0.75rem]">
              <li className="mb-1">
                Integrated AI-driven and voice intelligence (VI) features,
                enhancing user experience
              </li>
              <li className="mb-1">
                Collaborated with product, UX, and backend teams to translate
                complex requirements
              </li>
              <li className="mb-1">
                Built robust automated testing frameworks using Jest, improving
                code quality
              </li>
            </ul>

            <div className="mt-2 flex flex-wrap gap-1">
              {[
                "Vue.js",
                "Backbone.js",
                "JavaScript",
                "AI Integration",
                "Jest",
                "HTML5",
                "CSS3",
                "Sass",
                "Git",
              ].map((tech, i) => (
                <Badge key={i}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-baseline gap-6">
              <h3 className="inline-flex items-center gap-1 text-[1rem] font-semibold">
                TDT Global
              </h3>

              <div className="text-[0.875rem] text-subtle tabular-nums">
                Aug 2020 – Oct 2021
              </div>
            </div>

            <h4 className="font-mono text-[0.875rem] leading-none">
              Frontend Developer
            </h4>

            <div className="text-[0.75rem] text-subtle">Montevideo</div>
          </div>

          <div className="mt-2 text-[0.75rem]">
            <ul className="ml-4 list-disc text-[0.75rem]">
              <li className="mb-1">
                Led migration of legacy systems to React.js, improving
                performance and maintainability
              </li>
              <li className="mb-1">
                Developed GIS-based OOH marketing tools using Google Maps
                Platform
              </li>
              <li className="mb-1">
                Ensured quality through comprehensive end-to-end testing
              </li>
            </ul>

            <div className="mt-2 flex flex-wrap gap-1">
              {[
                "React.js",
                "TypeScript",
                "JavaScript",
                "Google Maps API",
                "Jest",
                "MySQL",
                "Material-UI",
                "Figma",
              ].map((tech, i) => (
                <Badge key={i}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-baseline gap-6">
              <h3 className="inline-flex items-center gap-1 text-[1rem] font-semibold">
                Altimetrik
              </h3>

              <div className="text-[0.875rem] text-subtle tabular-nums">
                Oct 2018 – Aug 2020
              </div>
            </div>

            <h4 className="font-mono text-[0.875rem] leading-none">
              Developer
            </h4>

            <div className="text-[0.75rem] text-subtle">Montevideo</div>
          </div>

          <div className="mt-2 text-[0.75rem]">
            <ul className="ml-4 list-disc text-[0.75rem]">
              <li className="mb-1">
                Designed and developed internal management tools using React.js,
                Redux, Node.js, and MongoDB
              </li>
              <li className="mb-1">
                Participated in requirements analysis, translating business
                needs into technical specifications
              </li>
              <li className="mb-1">
                Conducted client-facing presentations and product demonstrations
              </li>
            </ul>

            <div className="mt-2 flex flex-wrap gap-1">
              {[
                "React.js",
                "Redux",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "JavaScript",
                "TypeScript",
                "REST APIs",
              ].map((tech, i) => (
                <Badge key={i}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">
          Humanitarian & Social Impact
        </h2>

        <div className="rounded-lg border-2 border-text bg-badge p-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-[1rem] font-semibold">Uruguayan Red Cross</h3>
              <div className="text-[0.875rem] text-subtle">
                Jan 2024 – Present
              </div>
            </div>

            <h4 className="font-mono text-[0.875rem] font-semibold text-text">
              Active Volunteer
            </h4>

            <div className="text-[0.75rem] text-subtle">
              Montevideo, Uruguay
            </div>
          </div>

          <div className="mt-3 text-[0.75rem]">
            <p className="mb-3 leading-[1.6] text-text">
              Completed 160+ hours of professional humanitarian training and 36+
              hours of field activities. Focus on Disaster Risk Reduction,
              Community Early Warning Systems, and emergency response
              coordination.
            </p>

            <div className="mb-3">
              <p className="font-semibold mb-1.5 text-text">
                Core Training Areas:
              </p>
              <p className="leading-[1.6] text-subtle">
                Anticipatory Action & Forecast-Based Financing (FbF) •
                Vulnerability & Capacity Assessment (VCA) • Community Early
                Warning Systems (CEWS) • Protection, Gender & Inclusion (PGI) •
                Emergency Operations Leadership • First Aid & Pediatric First
                Aid
              </p>
            </div>
            <a
              href="/resume/humanitarian"
              className="inline-flex items-center text-[0.875rem] font-medium text-text no-underline hover:underline"
            >
              → View complete humanitarian experience and certifications
            </a>
          </div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">Education</h2>

        <div className="rounded-lg">
          <div className="flex flex-col gap-1 mb-1.5">
            <h3 className="text-[1rem] font-semibold leading-none">
              Universidad de las Ciencias Informáticas
            </h3>
            <div className="text-[0.875rem] text-subtle">2008 – 2013</div>
          </div>

          <div className="font-mono text-[0.875rem]">
            Bachelor's Degree in Computer Science
          </div>
          <div className="text-[0.8125rem] text-subtle">Havana, Cuba</div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">Certifications</h2>

        <div className="flex flex-col gap-2 text-[0.875rem]">
          <div>
            <span className="font-semibold">
              SCRUM Foundation Professional Certificate (SFPC)
            </span>
            <span className="text-subtle"> – CertiProf® | Jun 2020</span>
          </div>
          <div>
            <span className="font-semibold">
              Construyendo PYMES basadas en Datos (Power BI)
            </span>
            <span className="text-subtle">
              {" "}
              – Bios Empresarial | Aug – Oct 2024
            </span>
          </div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">
          Technical & Management Skills
        </h2>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">Frontend</h3>
          <div className="flex flex-wrap gap-1">
            {[
              "React.js",
              "Vue.js",
              "Backbone.js",
              "Redux",
              "TypeScript",
              "JavaScript",
              "Sass",
              "HTML5",
              "CSS3",
              "Bootstrap",
              "Material-UI",
              "Webpack",
            ].map((s, i) => (
              <SkillBadge key={i}>{s}</SkillBadge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">Backend & API</h3>
          <div className="flex flex-wrap gap-1">
            {[
              "Node.js",
              "Java",
              "REST APIs",
              "MongoDB",
              "MySQL",
              "PostgreSQL/PostGIS",
            ].map((s, i) => (
              <SkillBadge key={i}>{s}</SkillBadge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">Testing</h3>
          <div className="flex flex-wrap gap-1">
            {["Jest", "Unit Testing"].map((s, i) => (
              <SkillBadge key={i}>{s}</SkillBadge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">
            Product & Project Management
          </h3>
          <div className="flex flex-wrap gap-1">
            {[
              "Product Discovery",
              "Requirements Engineering",
              "Digital Transformation",
              "Agile/SCRUM",
              "Team Leadership",
              "Solution Architecture",
            ].map((s, i) => (
              <SkillBadge key={i}>{s}</SkillBadge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-1">
            {[
              "Jira",
              "Trello",
              "ClickUp",
              "Git",
              "GitHub",
              "Figma",
              "Power BI",
              "Google Maps Platform",
              "OpenLayers",
            ].map((s, i) => (
              <SkillBadge key={i}>{s}</SkillBadge>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
          @page {
            margin: 1.5cm;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom text colors for Tailwind */
        .text-text {
          color: #171717;
        }
        .bg-text {
          background-color: #171717;
        }
        .text-subtle {
          color: #737373;
        }
        .bg-badge {
          background-color: #fafafa;
        }
        .text-resume-title {
          font-size: 2.25rem;
          line-height: 1.2;
        }
        
        @media (max-width: 640px) {
          .text-resume-title {
            font-size: 1.875rem;
          }
        }
      `}</style>
    </div>
  );
}
