'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Key, Send, CheckCircle2, Building, ShieldAlert } from 'lucide-react';

export default function ContactPage() {
  const [department, setDepartment] = useState('editorial');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const bureaus = [
    {
      city: 'Stockholm HQ',
      address: 'Strandvägen 42, 114 56 Stockholm, Sweden',
      phone: '+46 8 555 120 00',
      pgp: 'PGP Fingerprint: 4B89 21F0 A9C2 E55B 808F',
      email: 'stockholm@nordicchronicle.com',
    },
    {
      city: 'Oslo Bureau',
      address: 'Karl Johans gate 18, 0154 Oslo, Norway',
      phone: '+47 22 40 50 00',
      pgp: 'PGP Fingerprint: 9C12 88D4 3F01 B11A 44C8',
      email: 'oslo@nordicchronicle.com',
    },
    {
      city: 'London Bureau',
      address: '1 Fore Street Avenue, London EC2Y 9DT, UK',
      phone: '+44 20 7946 0912',
      pgp: 'PGP Fingerprint: 1D34 77F9 2E88 A44C 77B9',
      email: 'london@nordicchronicle.com',
    },
    {
      city: 'Geneva Bureau',
      address: 'Rue du Rhône 65, 1204 Genève, Switzerland',
      phone: '+41 22 819 30 00',
      pgp: 'PGP Fingerprint: 7E56 33C1 11B8 99A2 33F1',
      email: 'geneva@nordicchronicle.com',
    },
  ];

  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            CONTACT &amp; COMMUNICATIONS BUREAU
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Connect With Our Newsroom
          </h1>
          <p className="text-lg font-sans text-zinc-700 mt-3 leading-relaxed">
            Reach out to our global editorial desks, commercial syndication teams, or secure encrypted investigative tip line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-zinc-50 p-8 border border-black space-y-6">
            <h2 className="text-2xl font-serif font-black text-black uppercase pb-2 border-b border-black">
              SEND AN OFFICIAL INQUIRY
            </h2>

            {submitted ? (
              <div className="p-6 bg-black text-white space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-lg text-white">
                  <CheckCircle2 className="w-6 h-6 text-white" /> INQUIRY RECEIVED
                </div>
                <p className="text-xs font-sans text-zinc-300">
                  Your message has been routed to the selected department desk. An editor will review within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-sans font-bold uppercase tracking-wider text-white underline"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-sans font-black uppercase tracking-wider text-black mb-1">
                    TARGET DEPARTMENT *
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-white border border-black p-3 text-xs font-sans text-black outline-none font-bold uppercase"
                  >
                    <option value="editorial">EDITORIAL DESK &amp; NEWS TIPS</option>
                    <option value="syndication">COMMERCIAL LICENSING &amp; SYNDICATION</option>
                    <option value="press">PRESS INQUIRIES &amp; SPOKESPERSON</option>
                    <option value="subscriptions">SUBSCRIBER SUPPORT &amp; ACCOUNTS</option>
                    <option value="whistleblower">SECURE WHISTLEBLOWER &amp; CONFIDENTIAL DESK</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-black uppercase tracking-wider text-black mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Astrid Lindqvist"
                      className="w-full bg-white border border-black p-3 text-sm font-sans outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-black uppercase tracking-wider text-black mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. astrid@domain.com"
                      className="w-full bg-white border border-black p-3 text-sm font-sans outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-black uppercase tracking-wider text-black mb-1">
                    MESSAGE CONTENT *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding your inquiry, press release, or editorial note..."
                    className="w-full bg-white border border-black p-3 text-sm font-sans outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-zinc-800 text-white font-sans text-xs font-black uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" /> TRANSMIT MESSAGE TO DESK
                </button>
              </form>
            )}
          </div>

          {/* Secure Tip Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-black text-white p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans uppercase font-black tracking-widest text-white">
                <ShieldAlert className="w-5 h-5 text-white" /> SECURE WHISTLEBLOWER DROP
              </div>
              <h3 className="text-2xl font-serif font-black uppercase">CONFIDENTIAL SUBMISSIONS</h3>
              <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                Submit high-level corporate documents or policy evidence via our encrypted PGP key server.
              </p>
              <div className="p-3 bg-zinc-900 font-mono text-[11px] text-white overflow-x-auto border border-zinc-700">
                PGP FINGERPRINT: 4B89 21F0 A9C2 E55B 808F 331A
              </div>
            </div>
          </div>
        </div>

        {/* Global Bureau Directory Grid */}
        <div className="space-y-6">
          <div className="border-b-2 border-black pb-3">
            <h2 className="text-2xl font-serif font-black text-black uppercase flex items-center gap-2">
              <Building className="w-6 h-6 text-black" /> GLOBAL BUREAU DIRECTORY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bureaus.map((bureau, i) => (
              <div key={i} className="bg-zinc-50 p-6 border-t-4 border-black space-y-3">
                <h3 className="text-lg font-serif font-bold text-black pb-2 border-b border-zinc-300">
                  {bureau.city}
                </h3>
                <div className="text-xs font-sans text-zinc-700 space-y-2">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{bureau.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-black shrink-0" />
                    <span>{bureau.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-black shrink-0" />
                    <span className="truncate">{bureau.email}</span>
                  </p>
                  <p className="flex items-start gap-2 pt-2 border-t border-zinc-300 text-[10px] font-mono text-zinc-500">
                    <Key className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span>{bureau.pgp}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
