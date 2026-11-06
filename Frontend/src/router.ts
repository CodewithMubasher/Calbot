import { createRouter } from "@tanstack/react-router"
import { rootRoute } from "./routes/__root"
import { connectorsRoute } from "./routes/connectors"
import { inboxRoute } from "./routes/inbox"
import { indexRoute } from "./routes/index"
import { manageBotsRoute } from "./routes/manage-bots"
import { settingsRoute } from "./routes/settings"

const routeTree = rootRoute.addChildren([
  indexRoute,
  inboxRoute,
  connectorsRoute,
  manageBotsRoute,
  settingsRoute,
])

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
