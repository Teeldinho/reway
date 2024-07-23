import { SVGProps } from "react";

const StoreAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} height={"20px"} fill="none" {...props}>
    <path
      fill="current"
      d="M23.324 6.473 20.125.848c-.21-.352-.563-.598-.984-.598H5.324c-.386 0-.773.246-.984.598l-3.2 5.625c-.421.738.106 1.652.985 1.652H3.25v8.895c0 .703.492 1.23 1.125 1.23h9c.598 0 1.125-.527 1.125-1.23V8.125h5.063v9.563c0 .316.246.562.562.562h.563a.578.578 0 0 0 .562-.563V8.126h1.125c.844 0 1.371-.914.95-1.652Zm-10.512 10.09H4.939v-3.34h7.875v3.34Zm0-5.028H4.939v-3.41h7.875v3.41ZM3.075 6.437l2.567-4.5h13.183l2.567 4.5H3.074Z"
    />
  </svg>
);
export default StoreAltIcon;
