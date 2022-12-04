import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <a href="/" className="flex justify-center items-center bg-kedaBlue h-10">
        <img height={100} width={100} src="home-icon.png" />
        <h1>ERP</h1>
      </a>
      <div className=" grid grid-cols-4 my-40">
        <div className="col-start-2 items-center">
          <img className="mx-auto" height={500} width={500} src="chart.png" />
        </div>
        <form className="text-center flex flex-col space-y-8" onSubmit={console.log}>
          <h1 className="flex items-center text-center">Login</h1>
          <input className="focus:border-kedaBlue border-b-4" placeholder="Email" type={"email"} />
          <input className="focus:border-kedaBlue border-b-4" placeholder="Password" type={"password"} />
          <button className="bg-kedaBlue p-4 rounded-xl hover:drop-shadow-xl" type={"submit"}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
