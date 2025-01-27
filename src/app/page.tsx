import Image from "next/image";
import PortfolioLink from "./components/PortfolioLink";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <div>
            <div className="w-44 lg:w-60 h-44 lg:h-60">
              <Image
                priority
                src={"/profileImg.jpeg"}
                width={4032}
                height={3024}
                alt="Profile image"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>

          <h1 className="pt-5 font-mono text-2xl text-center lg:text-left">
            Hey, I&apos;m a junior software developer!
          </h1>
        </div>
        <div className="py-10">
          <PortfolioLink />
        </div>
      </div>
    </main>
  );
}
