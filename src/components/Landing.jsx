import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="mx-auto max-w-[870px] bg-white px-4 py-12 text-text font-mono text-[14px] leading-[1.5]">
      <div className="min-h-[80vh] flex flex-col justify-center">
        <div className="text-center mb-12">
          <h1 className="font-sans text-[2.25rem] md:text-[3rem] font-bold text-text mb-3">
            Celia Guerra
          </h1>
          <p className="font-mono text-[0.875rem] text-subtle">
            Select a profile to view
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/professional"
            className="group rounded-lg border-2 border-text bg-badge p-6 hover:bg-gray-100 transition-colors no-underline block"
          >
            <h2 className="font-sans text-[1.25rem] font-bold text-text mb-3">
              Professional
            </h2>
            <p className="font-mono text-[0.875rem] text-subtle leading-[1.6] mb-4">
              Technical Product Manager with 10+ years building scalable digital
              products. Solution architecture, digital transformation, and team
              leadership.
            </p>
            <div className="font-mono text-[0.875rem] text-text font-medium group-hover:underline">
              View resume →
            </div>
          </Link>

          <Link
            to="/humanitarian"
            className="group rounded-lg border-2 border-text bg-badge p-6 hover:bg-gray-100 transition-colors no-underline block"
          >
            <h2 className="font-sans text-[1.25rem] font-bold text-text mb-3">
              Humanitarian
            </h2>
            <p className="font-mono text-[0.875rem] text-subtle leading-[1.6] mb-4">
              Active volunteer with Uruguayan Red Cross. 160+ hours of training
              in Disaster Risk Reduction, Emergency Response, and Community
              Engagement.
            </p>
            <div className="font-mono text-[0.875rem] text-text font-medium group-hover:underline">
              View resume →
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        .text-text {
          color: #171717;
        }
        .text-subtle {
          color: #737373;
        }
        .bg-badge {
          background-color: #fafafa;
        }
        .border-text {
          border-color: #171717;
        }
      `}</style>
    </div>
  );
}
