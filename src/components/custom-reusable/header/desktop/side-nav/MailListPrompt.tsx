"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MailListForm } from "@/components/custom-reusable/header/desktop/side-nav/forms/MailListForm";
import EnvelopeIcon from "@/components/custom-reusable/icons/EnvelopeIcon";
import TimesIcon from "@/components/custom-reusable/icons/TimesIcon";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MailListPrompt() {
  const [isHidden, setIsHidden] = useState(false);

  const handleHide = () => {
    setIsHidden(true);
  };

  return !isHidden ? (
    <Card className="bg-primary border-none w-full relative">
      <CardHeader className="flex flex-col items-center gap-1">
        <div className="h-[34px] w-[40px]">
          <EnvelopeIcon className=" text-white w-full h-full fill-white" />
        </div>

        <CardTitle className="font-suezOne text-white text-[20px] leading-[26.12px] uppercase">Sign up to our mailing list!</CardTitle>
      </CardHeader>
      <CardContent>
        <MailListForm />
      </CardContent>

      <Button
        variant={"ghost"}
        className="hidden absolute h-[13px] w-[10px] top-3 right-3 lg:flex items-center hover:bg-transparent group"
        size={"icon"}
        onClick={handleHide}
      >
        <TimesIcon className="w-full h-full fill-white group-hover:fill-white/80" />
      </Button>
    </Card>
  ) : null;
}
