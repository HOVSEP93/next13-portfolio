import { IconType } from "react-icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface TechProps {
  name: string
  icon: IconType
}

export const TechItem = ({ name, icon }: TechProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <li className="flex p-2">
          <TooltipTrigger title={name}>
            <span>{icon({ className: "h-10 w-10" })}</span>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </TooltipTrigger>
        </li>
      </Tooltip>
    </TooltipProvider>
  )
}
