import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('professional')}>
          Professional
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('forest')}>
          Forest
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('ocean')}>
          Ocean
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}