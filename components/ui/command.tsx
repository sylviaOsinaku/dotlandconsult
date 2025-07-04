// components/ui/command.tsx

"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

// Wrapper with no TS type headaches
const Command = React.forwardRef((props: any, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", props.className)}
    {...props}
  />
))
Command.displayName = "Command"

export function CommandDialog({ children, ...props }: any) {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:mr-2 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export const CommandInput = React.forwardRef((props: any, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground",
        props.className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = "CommandInput"

export const CommandList = React.forwardRef((props: any, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", props.className)}
    {...props}
  />
))
CommandList.displayName = "CommandList"

export const CommandEmpty = React.forwardRef((props: any, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))
CommandEmpty.displayName = "CommandEmpty"

export const CommandGroup = React.forwardRef((props: any, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted-foreground", props.className)}
    {...props}
  />
))
CommandGroup.displayName = "CommandGroup"

export const CommandSeparator = React.forwardRef((props: any, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", props.className)}
    {...props}
  />
))
CommandSeparator.displayName = "CommandSeparator"

export const CommandItem = React.forwardRef((props: any, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground",
      props.className
    )}
    {...props}
  />
))
CommandItem.displayName = "CommandItem"

export function CommandShortcut({ className, ...props }: any) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  )
}
