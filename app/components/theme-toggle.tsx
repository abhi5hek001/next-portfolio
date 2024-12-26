"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/app/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"

export function ThemeToggle() {
    const { setTheme, theme, themes } = useTheme()

    const themeColorMap: Record<string, string> = {
        light: "bg-[hsl(240,4.8%,95.9%)] text-[hsl(240,5.9%,10%)]",
        dark: "bg-[hsl(240,3.7%,15.9%)] text-[hsl(0,0%,98%)]",
        blue: "bg-[hsl(210,50%,96%)] text-[hsl(221.2,85%,60%)]",
        green: "bg-[hsl(166,50%,98%)] text-[hsl(142.1,76.2%,36.3%)]",
        orange: "bg-[hsl(28,80%,95%)] text-[hsl(28,95%,60%)]",
        purple: "bg-[hsl(270,22.4%,92.9%)] text-[hsl(270,89.8%,64.1%)]",
        yellow: "bg-[hsl(44,70%,90%)] text-[hsl(44,85%,40%)]",
        pink: "bg-[hsl(340,40%,95.1%)] text-[hsl(340,89.6%,72.6%)]",
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {
                    themes.map((themeOption) => (
                        <DropdownMenuItem
                            key={themeOption}
                            onClick={() => setTheme(themeOption)}
                            className={theme === themeOption ? themeColorMap[themeOption as keyof typeof themeColorMap] : ""}
                        >
                            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
