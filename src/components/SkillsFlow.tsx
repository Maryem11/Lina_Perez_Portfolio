import React, { useState } from "react";
import { skills } from "../data/skillsData";
import { SkillData } from "../types";
import SkillDetailsModal from "./SkillDetailsModal";
import "./SkillsFlow.css";

export default function SkillsFlow() {
  const [activeSkill, setActiveSkill] = useState<SkillData | null>(null);
  return (
    <>
      <p className="tree-instruction" id="tree-instruction">
        Select a leaf to explore.
      </p>
      <div className="botanical-tree">
        <svg
          className="tree-wood desktop-wood"
          viewBox="0 0 1000 680"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeLinecap="round">
            <path
              strokeWidth="24"
              d="M500 590 C480 490 515 380 500 280 C490 230 500 210 500 190"
            />
            <path
              strokeWidth="13"
              d="M497 410 Q410 320 300 229 M502 350 Q595 245 710 210 M493 495 Q350 415 210 405 M499 490 Q635 420 790 415 M496 300 Q410 200 340 115 M503 235 Q575 155 640 100"
            />
            <path
              strokeWidth="6"
              d="M500 565 Q450 610 355 630 M495 578 Q480 620 425 655 M505 575 Q550 610 645 630 M510 595 Q545 625 570 657 M495 585 Q500 630 485 665 M390 623 L365 650 M600 620 L650 650"
            />
          </g>
          <path
            d="M496 560 Q485 460 505 365"
            fill="none"
            stroke="#c0a17d"
            strokeWidth="3"
          />
        </svg>
        <svg
          className="tree-wood mobile-wood"
          viewBox="0 0 300 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeLinecap="round">
            <path
              strokeWidth="15"
              d="M150 890 Q135 650 150 420 Q160 230 150 65"
            />
            <path
              strokeWidth="6"
              d="M150 150 Q115 130 85 85 M150 265 Q190 240 215 205 M150 385 Q110 360 85 325 M150 505 Q190 480 215 445 M145 625 Q110 600 85 565 M145 745 Q190 720 215 685 M145 850 Q110 825 85 805 M150 880 Q110 930 50 948 M150 895 Q200 930 255 945 M145 910 L110 975 M160 915 L190 982 M150 920 L150 990"
            />
          </g>
        </svg>
        <ul className="leaves" aria-describedby="tree-instruction">
          {skills.map((skill, index) => (
            <li key={skill.id} className={`leaf-position leaf-${index}`}>
              <button
                className="skill-leaf"
                onClick={() => setActiveSkill(skill)}
                aria-haspopup="dialog"
                aria-label={`Explore ${skill.label}`}
              >
                <svg
                  viewBox="0 0 220 125"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="leaf-blade"
                    d="M3 115 C-5 20 75 -12 217 8 C221 95 150 145 3 115Z"
                  />
                  <g className="leaf-veins" fill="none">
                    <path d="M5 114 Q110 65 211 12 M45 95 L28 56 M78 80 L64 28 M120 58 L112 17 M46 95 L88 113 M85 78 L139 99 M128 55 L178 72" />
                  </g>
                </svg>
                <span>
                  {skill.label}
                  <small>
                    Explore skill <span aria-hidden="true">→</span>
                  </small>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="tree-foundation">
          <a className="discover-link" href="#about">
            Discover more <span aria-hidden="true">↓</span>
          </a>
          <a className="discover-link" href="#contact">Contact me</a>
        </div>
      </div>
      {activeSkill && (
        <SkillDetailsModal
          skill={activeSkill}
          onClose={() => setActiveSkill(null)}
        />
      )}
    </>
  );
}
