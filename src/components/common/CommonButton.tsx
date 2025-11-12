"use client";

import type React from "react";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface CampaignButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  showArrow?: boolean;
}

export function CommonButton({
  children,
  onClick,
  className,
  fullWidth = false,
  showArrow = true,
}: CampaignButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "bg-brown hover:bg-brown/90 text-white font-semibold px-8 py-6 rounded-full text-base",
        fullWidth && "w-full",
        className
      )}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </Button>
  );
}
