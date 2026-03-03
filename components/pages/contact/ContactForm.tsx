'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Section from '@/components/section/Section';
import RegularButton from '@/components/buttons/RegularButton';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mbdanjdj');

  if (state.succeeded) {
    return <p>Thanks for reaching out! We'll get back to you soon.</p>;
  }

  return (
    <Section className="flex flex-row">
      <div className="flex flex-col w-full bg-accent rounded-l-lg py-16 px-8 gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-app-background font-bold text-3xl">
            Get in Touch with Us
          </h3>
          <p className="text-app-background font-normal text-sm">
            To get more details, please fill out the form and submit
          </p>
        </div>
        <div className="w-full h-px bg-app-background"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-app-background font-bold text-sm">Call</h3>
          <p className="text-app-background font-normal text-sm">
            060 524 5324
          </p>
        </div>
        <div className="w-full h-px bg-app-background"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-app-background font-bold text-sm">Email</h3>
          <p className="text-app-background font-normal text-sm">
            jmkmachining@gmail.com
          </p>
        </div>
        <div className="w-full h-px bg-app-background"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-app-background font-bold text-sm">
            Operating Hours
          </h3>
          <p className="text-app-background font-normal text-sm">
            8am-6pm (Mon-Fri)
            <br />
            9am-3pm (Sat)
          </p>
        </div>
      </div>
      <form
        className="flex flex-col w-full bg-app-container rounded-r-lg p-16 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="border border-border-primary rounded-lg p-2 bg-app-background text-sm"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="name">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border border-border-primary rounded-lg p-2 bg-app-background text-sm"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="company">
            Company (optional)
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className="border border-border-primary rounded-lg p-2 bg-app-background text-sm"
          />
          <ValidationError
            prefix="Company"
            field="company"
            errors={state.errors}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            className="border border-border-primary rounded-lg p-2 bg-app-background text-sm"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject">Interested In</label>
          <select
            className="border border-border-primary rounded-lg p-2 bg-app-background text-sm"
            id="subject"
            name="subject"
          >
            <option value="welding">Welding</option>
            <option value="milling">Milling</option>
            <option value="turning">Turning</option>
            <option value="fabrication">Fabrication</option>
            <option value="cad">CAD Design</option>
            <option value="hydraulics">Hydraulics</option>
          </select>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="border border-border-primary rounded-lg p-2 bg-app-background text-sm"
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <RegularButton
          onClick={() => false}
          title={`${state.submitting ? 'Submitting...' : 'Submit'}`}
          buttonType="submit"
          disabled={state.submitting}
          className="bg-accent border-none mt-8"
        />
      </form>
    </Section>
  );
}
