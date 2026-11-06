import { createRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { rootRoute } from "./__root"

export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: () => <ComingSoon page="Settings" />,
})
