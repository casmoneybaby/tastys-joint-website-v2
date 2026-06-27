"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-cream border-t border-ink/15">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Questions, plainly answered</span>
            <h2 className="display text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.85] mt-5">
              FAQ&apos;S,
              <br />
              <span className="script text-tomato italic lowercase font-serif tracking-normal">
                ask&nbsp;us&nbsp;anything.
              </span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-8">
            <p className="font-serif text-lg max-w-md leading-snug opacity-85">
              We get asked the same five things at the counter, so here they
              are. If your question isn&apos;t below, call us — we like the
              phone. We&apos;re old fashioned like that.
            </p>
          </div>
        </div>

        <div className="border-t border-ink/15">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-ink/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full grid grid-cols-12 gap-4 py-6 md:py-7 items-start text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="col-span-2 md:col-span-1 marker opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-9 md:col-span-10 font-serif text-xl md:text-[1.55rem] leading-tight">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "col-span-1 marker justify-self-end text-[1.5rem] leading-none transition-transform",
                      isOpen && "rotate-45"
                    )}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="grid grid-cols-12 gap-4 pb-7">
                    <div className="md:col-start-3 md:col-span-8 font-serif text-lg max-w-xl leading-snug opacity-85">
                      {f.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
