import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@/hooks/use-chat";
import { Loader2, Send, Bot, User, Globe, MapPin, Compass, Building, Coffee, Utensils } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DIGITAL_NOMAD_CITIES } from "@/lib/constants";

// Enhanced loading animation variants
const loadingVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

// Message animation variants
const messageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2
    }
  }
};

// Update quick prompts array
const quickPrompts = [
  {
    text: "Best cafes for digital nomads",
    icon: Coffee,
    ariaLabel: "Find cafes suitable for digital nomads"
  },
  {
    text: "Local food recommendations",
    icon: Utensils,
    ariaLabel: "Get local food recommendations"
  },
  {
    text: "Best Restaurants Near Me",
    icon: Utensils,
    ariaLabel: "Find best restaurants nearby"
  },
  {
    text: "Best Coffeeshops to Work Near Me",
    icon: Coffee,
    ariaLabel: "Find best coffeeshops for working"
  },
  {
    text: "Safe neighborhoods to stay",
    icon: Building,
    ariaLabel: "Find safe neighborhoods"
  },
  {
    text: "Getting around the city",
    icon: MapPin,
    ariaLabel: "Learn about city transportation"
  }
];

export default function ChatbotPage() {
  const { messages, isLoading, sendMessage } = useChat();
  const [input, setInput] = useState("");
  const [selectedCity, setSelectedCity] = useState("Mexico City");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = `[City: ${selectedCity}] ${input.trim()}`;
    setInput("");
    try {
      await sendMessage(message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleQuickPrompt = async (prompt: string) => {
    if (isLoading) return;
    const message = `[City: ${selectedCity}] ${prompt}`;
    try {
      await sendMessage(message);
    } catch (error) {
      console.error("Error sending quick prompt:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Implement keyboard shortcuts
    if (e.key === 'Escape') {
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4">
      <Card className="max-w-2xl mx-auto h-[calc(100vh-12rem)] flex flex-col bg-black/40 border-white/10 shadow-card">
        <CardContent className="flex-1 p-4 flex flex-col">
          {/* Header with City Selection */}
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <h1 className="text-sm font-medium uppercase tracking-[.5em] gradient-text">Guide</h1>
            </div>
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-black/40 border border-white/10 rounded-md px-2 py-1 text-sm focus-visible"
              aria-label="Select a city"
            >
              {DIGITAL_NOMAD_CITIES.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Quick Prompts with Icons */}
          <ScrollArea className="flex-none py-4 whitespace-nowrap">
            <div className="flex gap-2">
              {quickPrompts.map(({ text, icon: Icon, ariaLabel }) => (
                <Button
                  key={text}
                  variant="outline"
                  size="sm"
                  className="border-white/10 hover:bg-white/5 glass-hover flex items-center gap-2 interactive-hover"
                  onClick={() => handleQuickPrompt(text)}
                  disabled={isLoading}
                  aria-label={ariaLabel}
                >
                  <Icon className="w-4 h-4" />
                  {text}
                </Button>
              ))}
            </div>
          </ScrollArea>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 pr-4 my-4 relative">
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`flex gap-3 mb-4 ${
                      message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.role === "assistant"
                          ? "bg-gradient-to-r from-purple-600 via-pink-600 to-red-500"
                          : "bg-white/10"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <Bot className="w-5 h-5" />
                      ) : (
                        <User className="w-5 h-5" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-4 max-w-[80%] ${
                        message.role === "assistant"
                          ? "bg-white/5 glass"
                          : "bg-gradient-to-r from-purple-600 via-pink-600 to-red-500"
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Enhanced Loading Animation */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    variants={loadingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex gap-3 mb-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="rounded-lg p-4 bg-white/5 glass flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-white/60">Searching local insights...</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>

          {/* Input Form */}
          <form 
            onSubmit={handleSubmit} 
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Ask anything about ${selectedCity}...`}
              disabled={isLoading}
              className="bg-white/5 border-white/10 glass-hover focus-visible"
              aria-label="Type your message"
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="px-8 interactive-hover"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Premium Ad Partner Banner */}
      <div className="max-w-2xl mx-auto mt-4 border-t border-white/10">
        <div className="py-4">
          <p className="text-center text-sm font-medium text-muted-foreground mb-4">
            Premium Ad Partner
          </p>
          <img
            src="/attached_assets/Screenshot 2025-03-05 at 8.12.59 AM.png"
            alt="Premium Ad Partner"
            className="w-full max-w-md mx-auto h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}