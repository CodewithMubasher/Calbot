export type Bot = {
  id: string
  name: string
  time: string
  preview: string
  color: string
  unread?: boolean
  title: string
  description: string
  notifications: boolean
}

export const bots: Bot[] = [
  {
    id: "chief",
    name: "Chief",
    time: "Yesterday",
    preview: "booked the venue and sent the confirmation around.",
    color: "#5CC4A9",
    title: "Right hand",
    description:
      "Runs your day: triages asks, preps decisions, and keeps the rest of the team pointed at what matters.",
    notifications: true,
  },
  {
    id: "sales-outbound",
    name: "Sales Outbound",
    time: "8:54 AM",
    preview: "Done.",
    color: "#F7A642",
    title: "Outbound sales",
    description:
      "Finds leads, writes first-touch emails in your voice, and follows up until they reply.",
    notifications: true,
  },
  {
    id: "inbox-manager",
    name: "Inbox Manager",
    time: "5:55 AM",
    preview: "sent. inbox at zero, 5 drafts parked for your review",
    color: "#5B47E0",
    unread: true,
    title: "Email triage",
    description:
      "Sorts your inbox, drafts replies, and parks anything that needs your eyes.",
    notifications: true,
  },
  {
    id: "account-manager",
    name: "Account Manager",
    time: "3:55 AM",
    preview: "invite's out to vicky. globex note held for your review",
    color: "#8B5CF6",
    title: "Client accounts",
    description:
      "Keeps client threads moving, sends invites, and flags notes that need review.",
    notifications: true,
  },
  {
    id: "talent-scout",
    name: "Talent Scout",
    time: "12:55 AM",
    preview: "3 intros drafted in your voice, held for your approval",
    color: "#3B82F6",
    title: "Recruiting",
    description:
      "Sources candidates, drafts intros in your voice, and holds them for your approval.",
    notifications: true,
  },
  {
    id: "expense-manager",
    name: "Expense Manager",
    time: "4:55 AM",
    preview: "report filed. 9 receipts, nothing out of policy",
    color: "#F26F2B",
    title: "Finance ops",
    description:
      "Collects receipts, files expense reports, and flags anything out of policy.",
    notifications: true,
  },
]
