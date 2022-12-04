import { HomeContent } from "../organism/home-content";
import { HomeAppBar } from "../organism/navbar";

export function HomeTemplate() {
  return (
    <div
      id="home"
      className="flex flex-col space-y-10"
      style={{
        backgroundImage: "url(home-background.png)",
        height: 1000,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HomeAppBar />
      <HomeContent />
    </div>
  );
}
