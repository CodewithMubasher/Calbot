import { useId, type CSSProperties, type ReactNode } from "react"
import { ArrowLeft01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { BotAvatar } from "@/components/bot-avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import type { Bot } from "@/data/bots"

const PANEL_WIDTH = "20rem"

type BotSettingsPanelProps = {
  bot: Bot
  open: boolean
  onClose: () => void
  onChange: (patch: Partial<Omit<Bot, "id">>) => void
}

/** Right-hand panel that slides open next to the chat. Edits apply live. */
export function BotSettingsPanel({
  bot,
  open,
  onClose,
  onChange,
}: BotSettingsPanelProps) {
  const uid = useId()

  return (
    <aside
      aria-label="Bot settings"
      aria-hidden={!open}
      inert={!open}
      style={{ width: open ? PANEL_WIDTH : 0 }}
      className={`shrink-0 overflow-hidden bg-sidebar transition-[width] duration-200 ease-linear ${
        open ? "border-l border-border" : ""
      }`}
    >
      <div
        style={{ width: PANEL_WIDTH }}
        className="h-full scrollbar-thin overflow-y-auto"
      >
        <header className="grid h-14 grid-cols-[2.25rem_1fr_2.25rem] items-center border-b border-border px-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Back"
            onClick={onClose}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
          </Button>
          <h2 className="text-center text-sm font-semibold">Settings</h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close settings"
            onClick={onClose}
          >
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </Button>
        </header>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex justify-center py-2">
            <BotAvatar color={bot.color} className="size-20" />
          </div>

          <Field label="Name" htmlFor={`${uid}-name`}>
            <Input
              id={`${uid}-name`}
              value={bot.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="h-9 rounded-xl"
            />
          </Field>

          <Field label="Title (optional)" htmlFor={`${uid}-title`}>
            <Input
              id={`${uid}-title`}
              value={bot.title}
              onChange={(e) => onChange({ title: e.target.value })}
              className="h-9 rounded-xl"
            />
          </Field>

          <Field label="Description" htmlFor={`${uid}-description`}>
            <Textarea
              id={`${uid}-description`}
              value={bot.description}
              onChange={(e) => onChange({ description: e.target.value })}
              className="min-h-24"
            />
          </Field>

          <div className="flex items-start justify-between gap-3 rounded-xl bg-muted/50 p-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor={`${uid}-notifications`}
                className="text-sm font-medium"
              >
                Notifications
              </label>
              <p className="text-xs text-muted-foreground">
                Get notified when this agent finishes or needs input
              </p>
            </div>
            <Switch
              id={`${uid}-notifications`}
              checked={bot.notifications}
              onCheckedChange={(checked) =>
                onChange({ notifications: checked })
              }
              style={{ "--switch-color": bot.color } as CSSProperties}
              className="mt-0.5 data-checked:bg-(--switch-color)"
            />
          </div>
        </div>
      </div>
    </aside>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
