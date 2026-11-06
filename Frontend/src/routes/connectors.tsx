import { createRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { rootRoute } from "./__root"

export const connectorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/connectors",
  component: () => <ComingSoon page="Connectors" />,
})
