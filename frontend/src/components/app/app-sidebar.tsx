import { Home } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ForwardRefExoticComponent, ReactNode } from "react";
import { routeItems } from "./app-routes";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Wails Shadcn/ui</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {(routeItems.map(i => (
                                <SidebarMenuItem key={i.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={i.path}>
                                            <i.icon />
                                            <span>{i.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}