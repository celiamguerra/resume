import { useNavigate, useLocation } from "react-router-dom";
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

export default function Humanitarian() {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.state?.fromCV;
  const stats = [
    { number: "252+", label: "Total Hours" },
    { number: "160+", label: "Training Hours" },
    { number: "36+", label: "Field Hours" },
    { number: "2024", label: "Active Since" },
  ];

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

      {/* HEADER */}
      <header className="mb-8 flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
        <div className="min-w-0 flex-1">
          <h1 className="font-sans text-resume-title font-bold tracking-tight">
            Celia Guerra
          </h1>

          <p className="mb-2 font-mono text-[0.875rem] text-subtle">
            Solution Architect | Humanitarian Volunteer
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

          {/* buttons */}
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

      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-lg border-2 border-gray-200 bg-badge p-3 text-center"
          >
            <div className="text-[1.5rem] font-bold text-text">
              {stat.number}
            </div>
            <div className="text-[0.75rem] text-subtle">{stat.label}</div>
          </div>
        ))}
      </div>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">About</h2>
        <p className="font-mono text-[0.875rem] leading-[1.5]">
          Solution Architect with 10+ years in technical product management,
          actively volunteering with Uruguayan Red Cross since 2024. Completed
          160+ hours of professional training in Disaster Risk Reduction,
          Community Engagement, Protection Gender & Inclusion, and Emergency
          Preparedness. Seeking to transition technical expertise into M&E and
          Information Management roles within the humanitarian sector.
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {[
            "DRR",
            "CEA",
            "PGI",
            "M&E",
            "Information Management",
            "Early Warning Systems",
            "Anticipatory Action",
          ].map((tag, i) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </div>
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
        <div className="rounded-lg border-2 border-text bg-badge p-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-[1rem] font-semibold">
              Technical & Product Background
            </h3>
            <p className="text-[0.75rem] leading-[1.6] text-subtle">
              Technical Product Manager with 10+ years building scalable digital
              products. Strong background in data analytics, solution
              architecture, and digital transformation.
            </p>
            <a
              href="/resume/professional"
              className="inline-flex items-center text-[0.875rem] font-medium text-text no-underline hover:underline"
            >
              → View complete professional experience and certifications
            </a>
          </div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">
          Volunteer Experience
        </h2>

        <div className="mb-8 rounded-lg">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-baseline gap-6">
              <h3 className="inline-flex items-center gap-1 text-[1rem] font-semibold leading-none">
                Uruguayan Red Cross
              </h3>
              <div className="text-[0.875rem] text-subtle tabular-nums">
                Jan 2024 – Present
              </div>
            </div>
            <h4 className="font-mono text-[0.875rem] leading-none">
              Active Volunteer
            </h4>
            <div className="text-[0.75rem] text-subtle">
              Montevideo, Uruguay
            </div>
          </div>

          <div className="mt-2 font-mono text-[0.80rem]">
            <p className="mb-2 leading-[1.5]">
              Completed 160+ hours of professional humanitarian training and 36+
              hours of field activities. Focus on Disaster Risk Reduction,
              Community Early Warning Systems, and emergency response
              coordination.
            </p>

            <div className="mt-2 mb-3">
              <p className="font-semibold mb-1.5 text-[0.875rem]">
                Core Training Areas:
              </p>
              <div className="flex flex-wrap gap-1">
                {[
                  "Disaster Risk Reduction (DRR)",
                  "Community Early Warning Systems (CEWS)",
                  "Anticipatory Action",
                  "Protection Gender & Inclusion (PGI)",
                  "Community Engagement & Accountability (CEA)",
                  "Emergency Needs Assessment",
                ].map((area, i) => (
                  <Badge key={i}>{area}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">
          Professional Training & Certifications
        </h2>

        <div className="space-y-3">
          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              Leadership and Team Management in Emergency Operations
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">30 hours</span> • November
              2025 • In-person training
            </div>
          </div>
          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              Emergency Needs Assessment (ENA)
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">1 hour</span> • November
              2025 • Online
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              Saying No to Sexual Misconduct
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">1.5 hours</span> • October
              2025 • Online
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              Stay Safe 2.0 Global Edition (Level 1 & 2)
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">4 hours</span> • October
              2025 • Online
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              First Aid Operator
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">30 hours</span> • May 2025
              • In-person
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              Anticipatory Action
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">30 hours</span> • November
              2024 • In-person
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              The Nexus Environmental Assessment Tool (NEAT+)
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">10 hours</span> • November
              2024 • In-person
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              Community Early Warning Systems (CEWS)
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">30 hours</span> •
              September 2024 • In-person
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              Protection, Gender and Inclusion (PGI) Comprehensive Training
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">24.5 hours</span> •
              August-September 2024 • Hybrid
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200">
            <div className="font-medium text-[0.875rem]">
              DREF (Disaster Relief Emergency Fund) - Modules 1 & 2
            </div>
            <div className="text-[0.75rem] text-subtle mt-0.5">
              <span className="font-medium text-text">4 hours</span> • Online
              training
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">
          Field Activities & Projects
        </h2>

        <div className="mb-4 rounded-lg bg-badge p-4 border border-gray-200">
          <h3 className="font-semibold text-[0.875rem] mb-2">
            National Dialogue Platform on Early Action and Early Warning -
            Logistics Support
          </h3>
          <p className="text-[0.75rem] leading-[1.6] mb-2">
            Provided comprehensive logistics support for the National Dialogue
            Platform coordinating government entities, humanitarian
            organizations, and stakeholders on early warning systems and
            anticipatory action strategies.
          </p>
          <div className="text-[0.75rem] text-subtle">
            December 2024 • 20 hours • National coordination
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-badge p-4 border border-gray-200">
          <h3 className="font-semibold text-[0.875rem] mb-2">
            Aguas Corrientes Microproject
          </h3>
          <p className="text-[0.75rem] leading-[1.6] mb-2">
            Participated in planning, coordination, and implementation of
            community-based resilience microproject. Contributed to workshop
            preparation, logistics coordination, and community engagement
            activities.
          </p>
          <div className="text-[0.75rem] text-subtle">
            January 2025 • Field activities
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-badge p-4 border border-gray-200">
          <h3 className="font-semibold text-[0.875rem] mb-2">
            Heat Wave Prevention Campaign - Los Reyes Neighborhood
          </h3>
          <p className="text-[0.75rem] leading-[1.6] mb-2">
            Community outreach and education campaign focused on heat wave
            prevention, providing information and resources to vulnerable
            populations.
          </p>
          <div className="text-[0.75rem] text-subtle">
            January 2024 • 5.5 hours • Community education
          </div>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-3">
        <h2 className="font-sans text-[1.25rem] font-bold">
          Humanitarian & Technical Skills
        </h2>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">
            M&E & Information Management
          </h3>
          <div className="flex flex-wrap gap-1">
            {[
              "Emergency Needs Assessment",
              "Data Collection & Analysis",
              "Monitoring Frameworks",
              "Reporting & Documentation",
              "Database Management",
              "GIS & Mapping",
            ].map((s, i) => (
              <SkillBadge key={i}>{s}</SkillBadge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">
            Emergency Management
          </h3>
          <div className="flex flex-wrap gap-1">
            {[
              "Early Warning Systems",
              "Anticipatory Action",
              "Crisis Coordination",
              "Team Leadership",
              "Risk Assessment",
              "DREF Operations",
            ].map((s, i) => (
              <SkillBadge key={i}>{s}</SkillBadge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">
            Community Engagement
          </h3>
          <div className="flex flex-wrap gap-1">
            {[
              "Community Resilience",
              "Participatory Approaches",
              "Stakeholder Coordination",
              "Vulnerability Assessment",
              "CEA Principles",
              "VCA",
              "NEAT+",
            ].map((s, i) => (
              <SkillBadge key={i}>{s}</SkillBadge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="mb-2 text-[0.875rem] font-semibold">
            Technical & Digital Solutions
          </h3>
          <div className="flex flex-wrap gap-1">
            {[
              "Solution Architecture",
              "Data Analytics",
              "Platform Development",
              "Digital Transformation",
              "Power BI",
              "Agile/SCRUM",
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
        
        html {
          scroll-behavior: smooth;
        }
        
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
