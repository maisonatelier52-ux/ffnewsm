'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, ShieldAlert } from 'lucide-react';

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

  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>CONTACT</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            COMPANY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Contact
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
            Reach out to our global editorial desks, commercial syndication teams, or secure encrypted investigative tip line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold text-zinc-900 uppercase pb-3 border-b border-zinc-200 mb-6">
                SEND AN OFFICIAL INQUIRY
              </h2>

              {submitted ? (
                <div className="p-6 bg-zinc-900 text-white rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 font-serif font-bold text-lg text-white">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" /> INQUIRY RECEIVED
                  </div>
                  <p className="text-xs font-sans text-zinc-300">
                    Your message has been routed to the selected department desk. An editor will review within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-sans font-bold uppercase tracking-wider text-white underline block"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      TARGET DEPARTMENT *
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-xl p-3 text-xs font-sans text-zinc-900 outline-none font-bold uppercase focus:border-black transition-colors"
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
                      <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-700 mb-1">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Astrid Lindqvist"
                        className="w-full bg-white border border-zinc-200 rounded-xl p-3 text-xs font-sans outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-700 mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. astrid@domain.com"
                        className="w-full bg-white border border-zinc-200 rounded-xl p-3 text-xs font-sans outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      MESSAGE CONTENT *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Provide details regarding your inquiry, press release, or editorial note..."
                      className="w-full bg-white border border-zinc-200 rounded-xl p-3 text-xs font-sans outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-zinc-900 hover:bg-black text-white font-sans text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" /> TRANSMIT MESSAGE TO DESK
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Secure Tip Box */}
          <div className="lg:col-span-5 bg-zinc-900 text-white rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans uppercase font-bold tracking-widest text-zinc-400">
                <ShieldAlert className="w-5 h-5 text-white" /> SECURE WHISTLEBLOWER DROP
              </div>
              <h3 className="text-2xl font-serif font-bold uppercase text-white">CONFIDENTIAL SUBMISSIONS</h3>
              <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                Submit high-level corporate documents or policy evidence via our encrypted PGP key server. Confidential identities are protected.
              </p>
            </div>

            <div className="p-4 bg-zinc-800 rounded-2xl font-mono text-[11px] text-zinc-300 border border-zinc-700/60">
              PGP FINGERPRINT: 4B89 21F0 A9C2 E55B 808F 331A
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
