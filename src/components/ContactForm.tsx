import React, { useRef, useState } from "react";

const localHost = () => ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);

export default function ContactForm({ previewOnly = localHost() }: { previewOnly?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "preview">("idle");
  const pending = useRef(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (previewOnly) {
      setStatus("preview");
      return;
    }
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, String(value)));
    pending.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission rejected");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      pending.current = false;
    }
  }

  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      aria-label="Contact Lina"
      aria-describedby="contact-form-note"
      onSubmit={submit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <fieldset disabled={status === "sending"}>
        <legend className="form-sr-only">Send Lina a message</legend>
        <div className="contact-field-row">
          <label htmlFor="contact-name">Your name
            <input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
          </label>
          <label htmlFor="contact-reply-email">Your email
            <input id="contact-reply-email" name="email" type="email" autoComplete="email" required maxLength={254} />
          </label>
        </div>
        <label htmlFor="contact-message">Message
          <textarea id="contact-message" name="message" rows={5} required maxLength={5000} />
        </label>
        <p id="contact-form-note" className="contact-form-note">
          Your details will be used to respond to your message.
          {previewOnly && " This is a local preview; messages are not sent here."}
        </p>
        <button type="submit" className="contact-action">
          {status === "sending" ? "Sending…" : "Send message"}<span aria-hidden="true">→</span>
        </button>
      </fieldset>
      <div className="contact-form-status" role="status" aria-live="polite" aria-atomic="true">
        {status === "success" && "Thank you. Your message has been submitted."}
        {status === "preview" && "Nothing was sent. This form will accept messages after the site is deployed to Netlify."}
        {status === "error" && "We couldn’t confirm your submission. Your message is still here; try again or contact me on LinkedIn."}
      </div>
    </form>
  );
}
