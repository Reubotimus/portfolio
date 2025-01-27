import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function PortfolioLink() {
  return (
    <Link
      href="/portfolio"
      className="hover:text-teal-600 flex flex-row items-center justify-center"
    >
      <h1 className="font-mono text-xl pr-1">See my portfolio</h1>
      <MdOutlineArrowForwardIos />
    </Link>
  );
}
