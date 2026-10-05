"use client";

import { useState } from "react";
import { appointment, centres } from "@/lib/content";

export function AppointmentForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-done" role="status">
        <h3>Thank you</h3>
        <button type="button" className="btn btn--outline" onClick={() => setSent(false)}>New request</button>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email (optional)</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="visit">Visit type</label>
          <select id="visit" name="visit" defaultValue="">
            <option value="" disabled>Select</option>
            {appointment.visitTypes.map((v) => <option key={v}>{v}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" defaultValue="" required>
            <option value="" disabled>Select</option>
            {appointment.services.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="centre">Centre</label>
          <select id="centre" name="centre" defaultValue={centres[0].name}>
            {centres.map((c) => <option key={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="time">Preferred time</label>
          <select id="time" name="time" defaultValue="">
            <option value="" disabled>Select</option>
            {appointment.times.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="date">Preferred date</label>
        <input id="date" name="date" type="date" />
      </div>
      <div className="field">
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" />
      </div>
      <button type="submit" className="btn btn--primary">Request Appointment</button>
    </form>
  );
}
