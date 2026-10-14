"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Phone,
  Clock,
  ArrowRight,
  CheckCheck,
  CalendarCheck,
  DollarSign,
  Truck,
  ExternalLink,
} from "lucide-react";

interface Message {
  id: string;
  sender: "agent" | "user";
  text: string;
  time: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "agent",
      text: "Hello there! 👋 Welcome to PRESSIO Laundry & Dry Cleaning. How can we help you today?",
      time: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Thank you for reaching out! Our team is on standby to assist with your order. You can also reach our express desk directly at +1 840 841 25 69.";
      const lower = text.toLowerCase();

      if (lower.includes("pickup") || lower.includes("schedule") || lower.includes("book")) {
        botResponse = "You can schedule a free doorstep pickup in under 60 seconds! Click the 'Schedule Pickup' button on our page or tell us your location.";
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("rate")) {
        botResponse = "Our Wash & Fold starts from only $2.20/kg, and Dry Cleaning starts at $5.50/garment with free express delivery for orders over $30!";
      } else if (lower.includes("track") || lower.includes("order") || lower.includes("status")) {
        botResponse = "To track your garments, please share your order number or phone number, and we will check the live wash status for you.";
      } else if (lower.includes("whatsapp")) {
        botResponse = "Opening WhatsApp support for you... You can chat with our supervisor right away.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "agent",
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { label: "🚚 Schedule Pickup", prompt: "I would like to schedule a laundry pickup" },
    { label: "💰 Pricing & Plans", prompt: "What are your service rates?" },
    { label: "📦 Track My Order", prompt: "How can I track my existing order?" },
  ];

  return (
    <>
      {/* Floating Chat Box Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat Support Window"
          className="fixed bottom-24 right-4 sm:right-6 w-[360px] sm:w-[390px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-[90] flex flex-col max-h-[550px] h-[520px] transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#375a79] to-[#2d4a63] text-white p-4.5 px-5 flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center font-bold text-white text-base shadow-sm">
                  <Sparkles className="w-5 h-5 text-[#a8d14a]" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#375a79] rounded-full" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight flex items-center gap-1.5 text-white">
                  PRESSIO Support
                </h3>
                <p className="text-[11px] text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Replies in minutes
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/70 text-sm">
            {/* Timestamp Notice */}
            <div className="text-center my-1">
              <span className="text-[10px] font-semibold tracking-wider uppercase bg-slate-200/60 text-slate-500 px-2.5 py-1 rounded-full">
                Today
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#375a79] text-white rounded-br-xs"
                      : "bg-white text-slate-800 border border-slate-200/70 rounded-bl-xs"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <div className="flex items-center gap-1 mt-1 px-1">
                  <span className="text-[10px] text-slate-400">{msg.time}</span>
                  {msg.sender === "user" && (
                    <CheckCheck className="w-3 h-3 text-[#375a79]" />
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-slate-200/70 rounded-2xl px-3.5 py-2 w-fit text-slate-400 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto custom-scrollbar shrink-0">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(action.prompt)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-[#375a79]/10 hover:text-[#375a79] text-slate-700 transition-colors border border-slate-200/60 shrink-0"
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* WhatsApp Quick Banner */}
          <a
            href="https://wa.me/18408412569?text=Hello%20PRESSIO,%20I%20need%20assistance%20with%20laundry%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border-t border-emerald-100 transition-colors shrink-0 group"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Prefer WhatsApp? Chat with valet supervisor
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 rounded-full bg-slate-100/80 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#375a79] focus:bg-white transition-all"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              aria-label="Send message"
              className="w-10 h-10 rounded-full bg-[#375a79] hover:bg-[#2b4760] disabled:opacity-40 disabled:hover:bg-[#375a79] text-white flex items-center justify-center transition-all shrink-0 shadow-md shadow-[#375a79]/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button & "Chat with us!" Pill */}
      <div
        className="fixed bottom-6 right-5 sm:right-6 z-[85] flex items-center gap-2.5 select-none"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {/* White "Chat with us!" Pill */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle chat assistance"
          className="bg-white hover:bg-slate-50 text-slate-900 font-bold px-4 py-2.5 rounded-full shadow-lg shadow-black/10 border border-slate-200/80 text-xs sm:text-sm tracking-tight transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-1.5"
        >
          <span>Chat with us!</span>
        </button>

        {/* Green Circular Launcher Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close chat widget" : "Open chat widget"}
          className="w-12 h-12 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white flex items-center justify-center shadow-xl shadow-emerald-500/35 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative"
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 fill-current" />
              {/* Online Notification Pulse Ping */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
