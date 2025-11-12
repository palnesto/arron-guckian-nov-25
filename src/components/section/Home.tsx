export default function Home() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 py-12 md:py-20 bg-red-500">
        <div className="space-y-6">
          <p className="text-xs tracking-widest font-semibold">
            A NEW COURSE FOR THE OCEAN STATE
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Rhode Island <span className="text-blue-900">Rises Together</span>
          </h1>
          <p className="text-base md:text-lg">
            Modern leadership. Local focus. Real results for every Rhode
            Islander.
          </p>
          <div className="flex gap-3">
            <a
              href="/join"
              className="px-5 py-3 rounded-full bg-black text-white"
            >
              Join the Movement
            </a>
            <a href="/donate" className="px-5 py-3 rounded-full border">
              Donate Now
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Lead image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section className="py-16 border-t">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Priorities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Economy"
            desc="Grow small businesses and create good jobs."
          />
          <Card
            title="Education"
            desc="High standards and real support for teachers and students."
          />
          <Card
            title="Public Safety"
            desc="Safe neighborhoods with accountability and trust."
          />
        </div>
      </section>

      <section className="py-16 border-t">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Get Involved
        </h2>
        <div className="flex flex-wrap gap-3">
          <a href="/volunteer" className="px-4 py-2 rounded-full border">
            Volunteer
          </a>
          <a href="/events" className="px-4 py-2 rounded-full border">
            Events
          </a>
          <a href="/newsletter" className="px-4 py-2 rounded-full border">
            Sign Up
          </a>
        </div>
      </section>
    </>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
