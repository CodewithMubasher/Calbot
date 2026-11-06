import { useEffect, useRef } from "react"
import { Settings03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { BotAvatar } from "@/components/bot-avatar"
import {
  ChatMessage,
  ChatTimestamp,
  CheckLine,
} from "@/components/chat-message"
import { PromptInput } from "@/components/prompt-input"
import { Button } from "@/components/ui/button"
import type { Bot } from "@/data/bots"

type ChatViewProps = {
  bot: Bot
  settingsOpen: boolean
  onToggleSettings: () => void
}

/** Main Inbox area: top bar, conversation, composer. Same background as the
 *  sidebar. Topbar and composer stay put; only the message list scrolls. */
export function ChatView({
  bot,
  settingsOpen,
  onToggleSettings,
}: ChatViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Open each conversation scrolled to the newest message.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [bot.id])

  return (
    <section className="flex min-h-0 min-w-0 flex-1 flex-col bg-sidebar">
      {/* Top bar */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
        <button
          type="button"
          onClick={onToggleSettings}
          aria-expanded={settingsOpen}
          aria-label={`${bot.name} settings`}
          className="-ml-2 flex min-w-0 items-center gap-2.5 rounded-xl px-2 py-1.5 transition-colors outline-none hover:bg-muted/60 focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          <BotAvatar color={bot.color} className="size-6" />
          <h1 className="truncate text-sm font-semibold">{bot.name}</h1>
        </button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Bot settings"
          aria-pressed={settingsOpen}
          onClick={onToggleSettings}
        >
          <HugeiconsIcon icon={Settings03Icon} strokeWidth={2} />
        </Button>
      </header>

      {/* Conversation: the only scrolling part of the chat */}
      <div
        ref={scrollRef}
        className="min-h-0 flex-1 scrollbar-thin overflow-y-auto"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-6 py-6">
          {bot.id === "chief" ? <ChiefConversation /> : <EmptyConversation />}
        </div>
      </div>

      {/* Composer */}
      <div className="shrink-0 px-6 pt-2 pb-5">
        <PromptInput
          placeholder={`Message ${bot.name}`}
          className="mx-auto max-w-4xl"
        />
      </div>
    </section>
  )
}

function EmptyConversation() {
  return (
    <p className="py-16 text-center text-sm text-muted-foreground">
      No messages yet
    </p>
  )
}

/** Sample conversation (static, for the UI mock-up). */
function ChiefConversation() {
  return (
    <>
      <ChatMessage from="bot">
        <div className="flex flex-col gap-3">
          <div>
            <CheckLine label="Deck">
              numbers checked against finance's sheet · 2 stale slides flagged
            </CheckLine>
            <CheckLine label="Offsite">
              3 venues shortlisted · dates held on each
            </CheckLine>
          </div>
          <p>
            two things need you today: the deck review at 2pm, and a yes/no on
            the venue. everything else is handled.
          </p>
        </div>
      </ChatMessage>

      <ChatTimestamp>Yesterday 12:25 PM</ChatTimestamp>

      <ChatMessage from="user">take the venue, i'll do the deck</ChatMessage>

      <ChatMessage from="bot">
        the marina house is the pick: seats all 40, the mid-week rate came in
        15% under budget, and they'll hold the date until tomorrow.
      </ChatMessage>

      <ChatTimestamp>Yesterday 1:25 PM</ChatTimestamp>

      <ChatMessage from="user" reaction="👍">
        book it
      </ChatMessage>

      <ChatMessage from="bot">
        <CheckLine label="Venue">marina house booked · deposit paid</CheckLine>
        <CheckLine label="Calendar">invites updated for all 40</CheckLine>
        <CheckLine label="Holds">other two released with a thank-you</CheckLine>
      </ChatMessage>

      <ChatMessage from="bot">
        booked the venue and sent the confirmation around. you're clear until
        the 2pm deck review.
      </ChatMessage>
    </>
  )
}
