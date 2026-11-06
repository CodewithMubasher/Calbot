import {
  Blockchain01Icon,
  ChartRelationshipIcon,
  InboxIcon,
  Settings03Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  createRootRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Inbox", to: "/inbox", icon: InboxIcon },
  { title: "Connectors", to: "/connectors", icon: ChartRelationshipIcon },
  { title: "Manage Bots", to: "/bots", icon: Blockchain01Icon },
  { title: "Settings", to: "/settings", icon: Settings03Icon },
] as const

export const rootRoute = createRootRoute({ component: RootLayout })

function RootLayout() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <img
                  src="/logo.svg"
                  alt="Calbot logo"
                  className="size-8 shrink-0"
                />
                <div className="grid flex-1 text-left text-lg leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-semibold">Cal bot</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={pathname === item.to}
                  tooltip={item.title}
                  render={<Link to={item.to} />}
                >
                  <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Mubasher Developer">
                <img
                  src="/avatars/blue.jpg"
                  alt="User avatar"
                  className="size-8 shrink-0 rounded-full object-cover"
                />
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-medium">
                    Mubasher Developer
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    user@calbot.app
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
