import AnimeList from "@/components/AnimeList";

function Home() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 bg-[#0A0023] justify-center items-center">
      <h2 className="text-3xl font-bold">Explore Anime</h2>
      <div className="w-full flex justify-center items-center"></div>
      <AnimeList />
    </main>
  );
}

export default Home;
