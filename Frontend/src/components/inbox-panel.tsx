import { useState } from "react"
import { Search01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { BotAvatar } from "@/components/bot-avatar"
import { Input } from "@/components/ui/input"
import type { Bot } from "@/data/bots"
import { cn } from "@/lib/utils"

/** List pane shown on the Inbox page. Fixed width (it does NOT follow the
 *  sidebar's collapsed/expanded state), transparent background, outlined only
 *  on its right edge. */
export function InboxPanel({
  bots,
  selectedId,
  onSelect,
}: {
  bots: Bot[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  const [query, setQuery] = useState("")

  const q = query.trim().toLowerCase()
  const visible = q
    ? bots.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.preview.toLowerCase().includes(q)
      )
    : bots

  return (
    <aside
      style={{ width: "calc(var(--sidebar-width) * 1.25)" }}
      className="flex min-h-0 shrink-0 flex-col border-r border-border bg-transparent"
    >
      <div className="flex items-center p-3">
        <div className="relative w-full">
          <HugeiconsIcon
            icon={Search01Icon}
            strokeWidth={2}
            className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search"
            aria-label="Search inbox"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-xl pl-8"
          />
        </div>
      </div>

      <ul className="flex min-h-0 flex-1 scrollbar-thin flex-col gap-0.5 overflow-y-auto px-2 pb-3">
        {visible.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              aria-pressed={item.id === selectedId}
              onClick={() => onSelect(item.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors outline-none hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring/50",
                item.id === selectedId && "bg-muted"
              )}
            >
              <span className="relative shrink-0">
                <BotAvatar color={item.color} className="size-10" />
                {item.unread && (
                  <span
                    aria-label="Unread"
                    className="absolute -top-0.5 -right-0.5 size-3 rounded-full bg-red-500 ring-2 ring-background"
                  />
                )}
              </span>

              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-sm font-semibold">
                    {item.name}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {item.preview}
                </span>
              </span>
            </button>
          </li>
        ))}

        {visible.length === 0 && (
          <li className="px-3 py-6 text-center text-sm text-muted-foreground">
            No results
          </li>
        )}
      </ul>
    </aside>
  )
}
