import { createRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { rootRoute } from "./__root"

export const manageBotsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bots",
  component: () => <ComingSoon page="Manage Bots" />,
})
