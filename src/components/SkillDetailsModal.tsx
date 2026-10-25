import React, { useEffect, useRef } from "react";
import { SkillData } from "../types";
import "./SkillDetailsModal.css";

export default function SkillDetailsModal({
  skill,
  onClose,
}: {
  skill: SkillData;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const element = dialog.current!;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="skill-modal"
      aria-labelledby="skill-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const box = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          )
            onClose();
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]"),
        );
        const first = controls[0],
          last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }}
    >
      <div className="dialog-top">
        <p className="eyebrow">A leaf of my practice / {skill.category}</p>
        <button
          onClick={onClose}
          className="close-button"
          aria-label="Close skill details"
        >
          Close <span aria-hidden="true">×</span>
        </button>
      </div>
      <h2 id="skill-title">{skill.label}</h2>
      <p>{skill.description}</p>
      <h3>Related work</h3>
      <div className="related-projects">
        {skill.projects.length === 0 && (
          <p className="empty-projects">
            No project repository is listed for this skill yet.
          </p>
        )}
        {skill.projects.map((project) => (
          <article key={project.title}>
            <h4>{project.title}</h4>
            <p>{project.summary}</p>
            <a href={project.link}>
              View {project.title} on GitHub <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </dialog>
  );
}
