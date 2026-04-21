'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Section from '@/components/section/Section';
import RegularButton from '@/components/buttons/RegularButton';
import { Wrench } from 'lucide-react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mbdanjdj');

  if (!state.succeeded) {
    return (
      <Section className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center w-full bg-app-container rounded-lg py-20 px-8 gap-6 text-center">
          <style>{`
          @keyframes pop-in {
            0% { transform: scale(0.5) rotate(-20deg); opacity: 0; }
            70% { transform: scale(1.15) rotate(10deg); }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes fade-up {
            from { transform: translateY(12px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .icon-pop { animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
          .fade-up-1 { animation: fade-up 0.4s ease forwards 0.3s; opacity: 0; }
          .fade-up-2 { animation: fade-up 0.4s ease forwards 0.5s; opacity: 0; }
        `}</style>

          <div className="icon-pop flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border-2 border-accent">
            <Wrench className="w-9 h-9 text-accent" strokeWidth={1.5} />
          </div>
          <div className="fade-up-1 flex flex-col gap-2">
            <h3 className="text-2xl font-bold">We're On It!</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Your enquiry has landed in the right hands. We'll get back to you
              within one business day with a quote.
            </p>
          </div>
          <div className="fade-up-2 flex flex-col gap-1 text-sm text-muted-foreground">
            <p>Need to reach us sooner?</p>
            <p className="font-medium">
              Call{' '}
              <a href="tel:+27605245324" className="text-accent underline">
                +27 60 524 5324
              </a>{' '}
              or email{' '}
              <a
                href="mailto:jmkmachining@gmail.com"
                className="text-accent underline"
              >
                jmkmachining@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="flex flex-col md:flex-row">
      <div className="flex flex-col w-full bg-accent rounded-t-lg md:rounded-tr-none md:rounded-l-lg px-4 py-16 md:px-8 gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-app-background font-bold text-3xl">
            Get a Free Quote Now
          </h3>
          <p className="text-app-background font-normal text-sm">
            To get more details, please fill out the form and submit
          </p>
        </div>
        <div className="w-full h-px bg-app-background"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-app-background font-bold text-sm">Call</h3>
          <p className="text-app-background font-normal text-sm">
            +27 60 524 5324
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
        className="flex flex-col w-full bg-app-container rounded-b-lg md:rounded-bl-none md:rounded-r-lg py-16 px-4 md:p-16 gap-4"
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
