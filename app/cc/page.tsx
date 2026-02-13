import Link from "next/link";

export default function CCPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header banner + intro in purple area */}
      <header className="w-full mx-auto text-center pt-2">
        <img
          src="/cc/banner.gif"
          alt="Pokemon-Digimon"
          className="w-full h-auto block max-w-3xl mx-auto"
        />
        <div className="px-4 py-3 text-black text-sm">
          <p>
            <strong>Reached 1000 kisses in Sunday 26th November 2024!</strong>
          </p>
          <p className="text-xs mt-0.5 text-black">
            Site created on Sunday 26th May 2024
          </p>
          <p className="mt-1">
            E-mail address:{" "}
            <a
              href="mailto:sunilsandhu@another.com"
              className="text-black underline"
            >
              sunilsandhu@another.com
            </a>{" "}
            ✉
          </p>
        </div>
      </header>

      <div className="flex gap-0 min-h-[80vh]">
        {/* Left sidebar - hidden on mobile */}
        <aside className="hidden md:block w-44 flex-shrink-0 py-4 px-3">
          <section className="mb-4">
            <nav className="pl-1 space-y-1">
              <Link href="#" className="block">
                <img
                  src="/cc/pictures_button.gif"
                  alt="Pictures1"
                  className="w-[128px] h-auto block"
                />
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Minty
              </Link>
            </nav>
          </section>
          <section className="mb-4">
            <nav className="pl-1">
              <Link href="#" className="text-blue-700 underline text-sm block">
                Linty
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Milky <span className="text-red-600">NEW!</span>
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Cookie
              </Link>
            </nav>
          </section>
          <section className="mb-4">
            <img
              src="/cc/Downloads_button.gif"
              alt="Downloads"
              className="w-[128px] h-auto block mb-1"
            />
            <nav className="pl-1">
              <Link href="#" className="text-blue-700 underline text-sm block">
                pop holdin it down
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Other downloads
              </Link>
            </nav>
          </section>
          <section className="mb-4">
            <img
              src="/cc/TCG_button.gif"
              alt="tcg"
              className="w-[128px] h-auto block mb-1"
            />

            <nav className="pl-1">
              <Link href="#" className="text-blue-700 underline text-sm block">
                Pokemon card pics
              </Link>
            </nav>
            <img
              src="/cc/pikaconstruction.gif"
              alt="Under construction"
              className="w-full h-auto block"
            ></img>
          </section>
          <section className="mb-4">
            <nav className="pl-1">
              <Link href="#" className="block">
                <img
                  src="/cc/Other_button.gif"
                  alt="Fan art"
                  className="w-[128px] h-auto block"
                />
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Online Pokedex
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                My Gold and Silver pokedex
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Adopted Pokemon & Digimon
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Sign up for Sunil&apos;s free e-mail/check e-mail
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                My Awards
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Win an award <span className="text-red-600">NEW!</span>
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Advertise your site for free
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Banner exchange <span className="text-red-600">NEW!</span>
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                link to my site
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Get 15,000 hit on your site a day.
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                The poke-news <span className="text-red-600">NEW!</span>
              </Link>
            </nav>
          </section>
          <section className="mb-4">
            <img
              src="/cc/Other_section_button.gif"
              alt="Other sections"
              className="w-full h-auto block mb-1"
            />
            <nav className="pl-1">
              <Link href="#" className="text-blue-700 underline text-sm block">
                Boss Baby Section
              </Link>
              <Link href="#" className="text-blue-700 underline text-sm block">
                Kardashian Section
              </Link>
            </nav>
          </section>
          <div className="mt-6 overflow-hidden text-center">
            <div
              className="h-2 w-full"
              style={{
                background:
                  "repeating-linear-gradient(90deg, #ffcc00 0, #ffcc00 8px, #000 8px, #000 16px)",
              }}
            />

            <div
              className="h-2 w-full"
              style={{
                background:
                  "repeating-linear-gradient(90deg, #ffcc00 0, #ffcc00 8px, #000 8px, #000 16px)",
              }}
            />
            <div className="py-1 text-2xl" aria-hidden>
              ⚡
            </div>
          </div>
        </aside>

        {/* Main content - Pokémon pattern bg */}
        <main className="flex-1 p-0 min-w-0 bg-[#8384ff] p-4">
          <div
            className="flex-1 min-w-0"
            style={{
              backgroundImage: "url('/cc/pokemon-bg.png')",
              backgroundRepeat: "repeat",
            }}
          >
            <div className="mb-4 text-sm p-4">
              <p>
                If you are the 2000th, 2500th or 3000th visitor to my site then
                e-mail me and you can have a Pokemon ROM!!!
              </p>
            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold text-center mb-2 underline">
                News
              </h2>
              <div className="flex gap-3 items-start mb-4">
                <div className="flex-1 text-sm">
                  <p>
                    <strong>14th Feb 2026:</strong> Sorry that I haven&apos;t
                    been updating this site but it is because I have been busy
                    falling in love.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/cc/moving_pikachu.gif"
                    alt="Pikachu"
                    className="w-32 h-auto block"
                  />
                </div>
              </div>
              <img
                src="/cc/pbm_animated_banner_1.gif"
                alt=""
                className="w-full max-w-[460px] h-auto block"
              />
              <div className="flex gap-4 items-start mt-4 flex-col md:flex-row">
                <div className="flex-1 text-sm">
                  <p className="mb-2">
                    <strong>26th May 2024:</strong> Just when you thought that
                    you had the best Pokemon card collection.You had Here comes
                    Team Rocket in Japanese.You had Imakuni's Doduo from the gym
                    set 2 set.You all the best rares there are except
                    one......Gigglezzz.Yes Gigglezzz but this ain't any old
                    Gigglezzz this is from the latest set wthelly 3. The
                    Gigglezzz is quintuple Rare yes quintuple Rare because it
                    has not one not two, not three, not four, but five black
                    stars. It is said that it is in one in a million packs. To
                    buy it would be impossible. So if you get this card keep it
                    and I mean keep it.
                  </p>
                </div>

                <img
                  src="/cc/gigglezzz-rare-card.jpg"
                  alt="Gigglezzz"
                  className="w-64 md:w-48 flex-shrink-0 rounded-sm"
                ></img>
              </div>
            </div>
            <div className="h-[300px]"></div>
            {/* Purple footer with banners */}
            <footer className="w-full bg-[#8384ff]  px-4 py-4 mt-4">
              <p className="text-sm text-center text-black mb-3">
                Don&apos;t forget to bookmark us! (CTRL-D)
              </p>
              <div className="max-w-3xl mx-auto space-y-3 flex flex-col items-center">
                <img
                  src="/cc/dd_banner_1.gif"
                  alt="Digi-Destined"
                  className="w-full max-w-[460px] h-auto block"
                />
                <img
                  src="/cc/dd_banner_2.gif"
                  alt=""
                  className="w-full max-w-[460px] h-auto block"
                />
              </div>
            </footer>
          </div>
        </main>

        {/* Right sidebar - hidden on mobile */}
        <aside className="hidden md:block w-40 flex-shrink-0 py-4 px-3 ">
          <section className="mb-4">
            <h3 className="font-bold text-sm mb-1">Networks</h3>
            <a href="#" className="block mb-2">
              <img
                src="/cc/pokecrater_button.gif"
                alt=""
                className="inline-block w-full h-8 text-xs items-center justify-center"
              ></img>
            </a>
          </section>
          <section className="mb-4">
            <h3 className="font-bold text-sm mb-1">Affiliates</h3>
            <Link href="#" className="block">
              <img
                src="/cc/pbmbutton1.gif"
                alt="Pictures2"
                className="w-full h-auto block"
              />
            </Link>
            <a href="#" className="block mb-2">
              <img
                src="/cc/pokecrater_button.gif"
                alt=""
                className="inline-block w-full h-8 text-xs items-center justify-center"
              ></img>
            </a>
            <Link href="#" className="block mt-2">
              <img
                src="/cc/dd_button_animated_1.gif"
                alt="Pictures2"
                className="w-full h-auto block"
              />
            </Link>
            <a href="#" className="block mb-2">
              <img
                src="/cc/pokecrater_button.gif"
                alt=""
                className="inline-block w-full h-8 text-xs items-center justify-center"
              ></img>
            </a>
            <a href="#" className="block mb-2">
              <img
                src="/cc/pokecrater_button.gif"
                alt=""
                className="inline-block w-full h-8 text-xs items-center justify-center"
              ></img>
            </a>
          </section>
          <section className="mb-4">
            <h3 className="font-bold text-sm mb-1">My other sites</h3>
            <Link href="#" className="text-blue-700 underline text-sm block">
              The CC Project
            </Link>
            <Link href="#" className="text-blue-700 underline text-sm block">
              Lovers Rock
            </Link>
            <Link href="#" className="text-blue-700 underline text-sm block">
              Kisses by mail
            </Link>
          </section>
          <section className="mb-4">
            <h3 className="font-bold text-sm mb-1">My links</h3>
            <Link href="#" className="text-blue-700 underline text-sm block">
              Timmy&apos;s site
            </Link>
            <Link href="#" className="text-blue-700 underline text-sm block">
              Esteban&apos;s site
            </Link>
            <Link href="#" className="text-blue-700 underline text-sm block">
              El Rey autismo awareness
            </Link>
          </section>
          <section className="mb-4">
            <h3 className="font-bold text-sm mb-1">Website rankings</h3>
            <a href="#" className="block mb-2">
              <img
                src="/cc/pokecrater_button.gif"
                alt=""
                className="inline-block w-full h-8 text-xs items-center justify-center"
              ></img>
            </a>

            <a href="#" className="block mb-2">
              <img
                src="/cc/pokecrater_button.gif"
                alt=""
                className="inline-block w-full h-8 text-xs items-center justify-center"
              ></img>
            </a>
            <div className="space-y-2">
              <img
                src="/cc/borders_for_site.gif"
                alt=""
                className="w-full h-auto block"
              />
              <img
                src="/cc/borders_for_site_2.gif"
                alt=""
                className="w-full h-auto block"
              />
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
