import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Logo from "@/components/Logo";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  if (!session) {
    return (
<div className="bg-primary w-screen h-screen flex flex-col justify-center items-center text-white font-tillana">
  <img
    src="/coffee.png"
    className="w-12.5 h-12.5 self-center mb-4"
    style={{
      filter: "brightness(0) invert(1)",
    }}
    alt="Coffee Icon"
  />
  <div className="text-center w-full">
    <button
      onClick={() => signIn("google")}
      className="bg-transparent border-[1px] border-[solid] border-[#fff] p-3 px-16 rounded-lg text-white"
    >
      Login with Google
    </button>
  </div>
</div>




    );
  }
  return (
    <div className="bg-bgGray min-h-screen">
      <div className="md:hidden flex items-center justify-center">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className=" flex-grow p-4 ">{children}</div>
      </div>
    </div>
  );
}
