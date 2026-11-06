import { useState } from "react"
import { createRoute } from "@tanstack/react-router"
import { BotSettingsPanel } from "@/components/bot-settings-panel"
import { ChatView } from "@/components/chat-view"
import { InboxPanel } from "@/components/inbox-panel"
import { bots as initialBots, type Bot } from "@/data/bots"
import { rootRoute } from "./__root"

export const inboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/inbox",
  component: InboxPage,
})

function InboxPage() {
  const [bots, setBots] = useState<Bot[]>(initialBots)
  const [selectedId, setSelectedId] = useState("chief")
  const [settingsOpen, setSettingsOpen] = useState(false)

  const bot = bots.find((b) => b.id === selectedId) ?? bots[0]

  const updateBot = (patch: Partial<Omit<Bot, "id">>) =>
    setBots((all) => all.map((b) => (b.id === bot.id ? { ...b, ...patch } : b)))

  return (
    // Fixed-height shell: only the message list (and long panels) scroll.
    <div className="h-svh min-w-0 overflow-hidden">
      <div className="flex h-full flex-row">
        <InboxPanel
          bots={bots}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <ChatView
          bot={bot}
          settingsOpen={settingsOpen}
          onToggleSettings={() => setSettingsOpen((o) => !o)}
        />
        <BotSettingsPanel
          bot={bot}
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          onChange={updateBot}
        />
      </div>
    </div>
  )
}
