import { createRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { rootRoute } from "./__root"

export const inboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/inbox",
  component: () => <ComingSoon page="Inbox" />,
})
