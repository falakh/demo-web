import Link from "next/link";

export function HomeAppBar() {
  return (
    <div className="flex  flex-row justify-between  font-bold p-4 static  text-xl first-letter:capitalize items-center">
      <Link className="text-white  " href={"#home"}>
        <div className=" flex-row flex items-center">
          <img src="home-icon.png" className="md:w-14 w-7 md:h-50px h-25px" />
          <p className="py-auto text-white">Home</p>
        </div>
      </Link>
      <div className="space-x-3 flex  flex-row first-letter:capitalize  items-center">
        <Link className="h-full" href={"#about"}>
          About
        </Link>
        <Link className="h-full" href={"#pricing"}>
          Pricing
        </Link>

        <Link className="h-full" href={"#contact"}>
          Contact
        </Link>
        <Link href={"/login"} className="px-8 py-1 h-full bg-white  text-kedaBlue border-kedaBlue border-4 rounded-lg">
          Login
        </Link>
      </div>
    </div>
  );
}
