ALTER TABLE "event_participants" ADD COLUMN "ticket_identifier" text;--> statement-breakpoint
ALTER TABLE "event_participants" ADD CONSTRAINT "event_participants_ticket_identifier_unique" UNIQUE("ticket_identifier");