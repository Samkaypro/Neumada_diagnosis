import type { Request, Response } from 'express';
import { openai, SYSTEM_PROMPT } from './config/openai';
import { db } from '../db';
import { events, users } from '../db/schema';
import { desc, eq } from 'drizzle-orm';
import { webSearch } from './services/search';

async function searchLocalEvents(city?: string) {
  try {
    const query = db.query.events.findMany({
      orderBy: [desc(events.date)],
      limit: 10,
      with: {
        creator: true
      }
    });

    if (city) {
      return query.where(eq(events.city, city));
    }
    return query;
  } catch (error) {
    console.error('Error querying local events:', error);
    return null;
  }
}

export async function handleChatMessage(req: Request, res: Response) {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Check if message is asking about events
    if (message.toLowerCase().includes('events') || 
        message.toLowerCase().includes('going on') || 
        message.toLowerCase().includes('happening')) {

      const cityMatch = message.match(/in\s+([^?.,]+)(?:[?,.]|$)/i);
      const city = cityMatch ? cityMatch[1].trim() : undefined;

      const localEvents = await searchLocalEvents(city);
      if (localEvents && localEvents.length > 0) {
        let response = '### Local Events\n\n';
        localEvents.forEach(event => {
          response += `**${event.title}**\n`;
          response += `- Date: ${new Date(event.date).toLocaleDateString()}\n`;
          response += `- Location: ${event.location}\n`;
          response += `- Category: ${event.category}\n`;
          response += `- Price: ${event.price || 'Free'}\n\n`;
        });
        return res.json({ response });
      }
    }

    // Default handling
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      max_tokens: 500
    });

    const response = completion.choices[0].message.content;
    res.json({ response });

  } catch (error: any) {
    console.error("Chat error:", error);
    res.status(500).json({ 
      error: "Failed to get response",
      details: error.message 
    });
  }
}