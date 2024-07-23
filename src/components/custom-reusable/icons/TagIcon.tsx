import { SVGProps } from "react";

export const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} height={"20px"} fill="none" {...props}>
    <path
      fill="current"
      d="m23.297 10.594-9.89-9.89C13.03.327 12.327 0 11.811 0H2.25A2.25 2.25 0 0 0 0 2.25v9.61c0 .515.281 1.218.656 1.593l9.89 9.89c.892.891 2.345.891 3.188 0l9.563-9.562c.89-.844.89-2.297 0-3.187ZM12.14 21.75 2.25 11.86V2.25h9.563l9.937 9.938-9.61 9.562ZM9 6.75C9 5.531 7.969 4.5 6.75 4.5A2.25 2.25 0 0 0 4.5 6.75C4.5 8.016 5.484 9 6.75 9A2.25 2.25 0 0 0 9 6.75Z"
    />
  </svg>
);
export default TagIcon;
