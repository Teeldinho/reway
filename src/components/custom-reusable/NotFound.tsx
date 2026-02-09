import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import NotFoundIMG from "../../../public/assets/not-found.svg";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { NOT_FOUND_IMAGE_SIZES } from "@/lib/constants/image-sizes";

type NotFoundProps = {
  title?: string;
  message?: string;
  children?: React.ReactNode;
};

export default function NotFound({ title = "404 - Not Found", message = "Sorry. This page was not found.", children }: NotFoundProps) {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <AspectRatio ratio={3 / 2} className="relative h-full overflow-hidden">
          <Image
            src={NotFoundIMG}
            alt="Page not found"
            fill
            sizes={NOT_FOUND_IMAGE_SIZES}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="text-center space-y-3 pt-4 justify-center">
        <CardTitle className={cn("text-center text-4xl font-bold font-suezOne text-rewayBlack capitalize")}>{title}</CardTitle>
        <CardDescription className="font-ptSans text-xl">{message}</CardDescription>
      </CardContent>

      {children && <CardFooter className="text-center flex items-center justify-center">{children}</CardFooter>}
    </Card>
  );
}
