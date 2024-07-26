import { SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} height={"20px"} fill="none" {...props}>
    <path
      fill="current"
      d="M36.75 2.926c0-1.067-.984-2.051-2.05-2.051H1.968C.902.875 0 1.859 0 2.925v32.731c0 1.067.902 1.969 1.969 1.969h17.636V23.434h-4.84v-5.579h4.84v-4.101c0-4.676 2.872-7.3 7.137-7.3 1.969 0 3.774.163 4.266.245v4.922h-2.953c-2.297 0-2.707 1.149-2.707 2.707v3.527h5.496l-.739 5.579h-4.757v14.191h9.351c1.067 0 2.051-.902 2.051-1.969V2.926Z"
    />
  </svg>
);
export default FacebookIcon;
