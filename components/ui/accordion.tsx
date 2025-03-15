import * as React from "react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
  React.ElementRef<typeof import("@radix-ui/react-accordion").Root>,
  React.ComponentPropsWithoutRef<typeof import("@radix-ui/react-accordion").Root>
>(({ className, children, ...props }, ref) => (\
  <import("@radix-ui/react-accordion").Root
    type="single"
    collapsible
    className={cn("w-full", className)}
    {...props}
    ref={ref}
  >
    {children}
</
import("@radix-ui/react-accordion").Root>
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof import("@radix-ui/react-accordion").Item>,
  React.ComponentPropsWithoutRef<typeof import("@radix-ui/react-accordion").Item>
>(({ className, children, ...props }, ref) => (
  <import("@radix-ui/react-accordion").Item
    className={cn("border-b last:border-b-0", className)}
    {...props}
    ref={ref}
  >
    {children}
  </import("@radix-ui/react-accordion").Item>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof import("@radix-ui/react-accordion").Trigger>,
  React.ComponentPropsWithoutRef<typeof import("@radix-ui/react-accordion").Trigger>
>(({ className, children, ...props }, ref) => (
  <import("@radix-ui/react-accordion").Header className="flex">
    <import("@radix-ui/react-accordion").Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0 transition-transform duration-200"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </import("@radix-ui/react-accordion").Trigger>
  </import("@radix-ui/react-accordion").Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof import("@radix-ui/react-accordion").Content>,
  React.ComponentPropsWithoutRef<typeof import("@radix-ui/react-accordion").Content>
>(({ className, children, ...props }, ref) => (
  <import("@radix-ui/react-accordion").Content
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
    ref={ref}
  >
    <div className="pb-4 pt-0">{children}</div>
  </import("@radix-ui/react-accordion").Content>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

