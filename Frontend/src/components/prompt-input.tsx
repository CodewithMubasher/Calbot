import { useState } from "react"
import { Add01Icon, ArrowUp02Icon, Mic01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PromptInputProps = {
  placeholder?: string
  className?: string
  /** Called when the send button is pressed. Optional: nothing is sent unless
   *  the parent wires this up. */
  onSend?: (value: string) => void
}

/** Chat composer: "+" on the left, auto-growing text box, and a button on the
 *  right that shows a mic while empty and turns into "send" once you type. */
export function PromptInput({
  placeholder = "Message",
  className,
  onSend,
}: PromptInputProps) {
  const [value, setValue] = useState("")
  const hasText = value.trim().length > 0

  return (
    <div
      className={cn(
        "flex items-end gap-2 rounded-3xl border border-border bg-input/30 p-2 transition-[box-shadow,border-color] focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30",
        className
      )}
    >
      <Button
        type="button"
        variant="secondary"
        size="icon"
        aria-label="Add attachment"
        className="size-8 rounded-full"
      >
        <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
      </Button>

      <textarea
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="[field-sizing:content] max-h-40 min-h-8 flex-1 resize-none bg-transparent py-1 text-sm leading-6 outline-none placeholder:text-muted-foreground"
      />

      <Button
        type="button"
        size="icon"
        aria-label={hasText ? "Send message" : "Voice message"}
        onClick={() => {
          if (hasText) onSend?.(value)
        }}
        className="size-8 rounded-full"
      >
        <HugeiconsIcon
          icon={hasText ? ArrowUp02Icon : Mic01Icon}
          strokeWidth={2}
        />
      </Button>
    </div>
  )
}
