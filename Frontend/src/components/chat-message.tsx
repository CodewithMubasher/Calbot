import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ChatMessageProps = {
  from: "bot" | "user"
  children: ReactNode
  /** Emoji reaction shown on the bubble's bottom corner. */
  reaction?: string
}

export function ChatMessage({ from, children, reaction }: ChatMessageProps) {
  const isUser = from === "user"

  return (
    <div
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "relative max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground",
          reaction && "mb-2"
        )}
      >
        {children}
        {reaction && (
          <span className="absolute -right-1 -bottom-3 rounded-full border border-border bg-background px-1.5 text-xs leading-5">
            {reaction}
          </span>
        )}
      </div>
    </div>
  )
}

export function ChatTimestamp({ children }: { children: ReactNode }) {
  return (
    <p className="py-1 text-center text-xs font-medium text-muted-foreground">
      {children}
    </p>
  )
}

/** One "✓ Label → detail" line of a bot status report. */
export function CheckLine({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div>
      ✓ <strong className="font-semibold">{label}</strong> → {children}
    </div>
  )
}
