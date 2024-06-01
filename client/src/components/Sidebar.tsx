import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export function Sidebar({ show, setShow }: Props) {
  return (
    <div
      key="1"
      className={`flex fixed top-0 right-0 z-10 h-screen w-60 overflow-hidden side-shadow transition ease-in-out  ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="group flex h-full w-[280px] flex-col bg-white p-4 transition-all duration-300 ease-in-out dark:bg-gray-900">
        <div className="flex items-center justify-between">
          <Link
            onClick={() => setShow(false)}
            className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50"
            to="/"
          >
            <MountainIcon className="h-6 w-6" />
            <span>Asset Manager</span>
          </Link>
          <Button
            className="rounded-full text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            size="icon"
            variant="ghost"
            onClick={() => setShow(false)}
          >
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <nav className="mt-8 flex flex-1 flex-col gap-2">
          <Link
            onClick={() => setShow(false)}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 group-[.collapsed]:justify-center group-[.collapsed]:px-0 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            to="/dashBoard"
          >
            <LayoutDashboardIcon className="h-5 w-5" />
            <span className="group-[.collapsed]:hidden">Dashboard</span>
          </Link>
          <Link
            onClick={() => setShow(false)}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 group-[.collapsed]:justify-center group-[.collapsed]:px-0 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            to="/assets"
          >
            <PackageIcon className="h-5 w-5" />
            <span className="group-[.collapsed]:hidden">Assets</span>
          </Link>
          <Link
            onClick={() => setShow(false)}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 group-[.collapsed]:justify-center group-[.collapsed]:px-0 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            to="/maintenance"
          >
            <WrenchIcon className="h-5 w-5" />
            <span className="group-[.collapsed]:hidden">Maintenance</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

function LayoutDashboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function WrenchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
