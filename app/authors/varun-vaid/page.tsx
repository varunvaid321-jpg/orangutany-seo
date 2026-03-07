import { Metadata } from "next";
import Link from "next/link";
import { allSpecies } from "@/data/species";

export const metadata: Metadata = {
  title: "Varun Vaid, Mushroom Guide Author & Forager | Orangutany",
  description:
    "Varun Vaid is a software engineer, amateur mycologist, and mushroom forager based in Markham, Ontario. He writes species guides and identification articles for Orangutany.",
  alternates: { canonical: "/authors/varun-vaid" },
  openGraph: {
    title: "Varun Vaid, Mushroom Guide Author & Forager",
    description:
      "Software engineer turned mushroom forager. Based in Markham, Ontario. Building Orangutany to help people identify wild mushrooms safely.",
    images: [{ url: "/images/authors/varun-vaid/forest-backpack.jpg" }],
  },
};

const imgBase = "/images/authors/varun-vaid";

export default function VarunVaidPage() {
  const mySpecies = allSpecies.filter((s) => {
    let hash = 0;
    for (let i = 0; i < s.slug.length; i++) hash = (hash * 31 + s.slug.charCodeAt(i)) | 0;
    return Math.abs(hash) % 100 < 65;
  });

  return (
    <article className="mx-auto max-w-4xl px-6 py-8">
      {/* Hero */}
      <div className="grid gap-6 sm:grid-cols-[240px_1fr]">
        <img
          src={`${imgBase}/forest-backpack.jpg`}
          alt="Varun Vaid in an Ontario forest during a foraging trip"
          className="aspect-[3/4] w-full rounded-xl object-cover"
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
            Varun Vaid
          </h1>
          <p className="mt-1 text-sm text-primary">Software Engineer &middot; Hobby Forager &middot; Founder, Orangutany</p>
          <p className="mt-1 text-xs text-muted-foreground">Markham, Ontario, Canada</p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            I grew up in India, then lived in Lancaster (UK), Seoul (South Korea), Hannover (Germany),
            and the Detroit suburbs before settling in Markham, Ontario about nine years ago. By day
            I build quality into mission-critical software products. The mushroom thing started during
            my PhD in Lancaster, almost by accident.
          </p>
        </div>
      </div>

      {/* The story */}
      <section className="mt-10 space-y-4">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          How I Got Into This
        </h2>
        <p className="text-sm leading-relaxed text-foreground/80">
          It started in Lancaster during my PhD. My supervisor was really into mushroom hunting, and
          we&apos;d take these long walks through the woods together. We&apos;d pick mushrooms, talk
          about them, and also talk about whatever technical work we were doing. I got fascinated
          with it very quickly. Slowly I started going on my own, then with family, sometimes just
          with the dog.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          Over time it became less about the walking and more about the picking and studying. I&apos;d
          come home and do spore prints, try to study the structure of what I&apos;d found. I bought
          a few mycology books thinking they&apos;d have the answers, but I have to say, reading a
          proper mycology textbook is extremely difficult. It takes a lot more experience than I had,
          and I found it genuinely hard to understand.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          So I went online. Joined a bunch of Facebook clubs, followed Instagram pages, got into the
          Reddit forums like r/mycology and the mushroom ID subreddits. I&apos;d share pictures, try
          to learn from others. Sometimes I&apos;d get a helpful response, sometimes nothing at all.
          That part made me impatient. You find something interesting in the field and you want to
          know what it is right now, not three days later when someone maybe replies.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          Eventually, as I got more confident, I started to understand which mushrooms are clearly
          safe to eat and which ones need more work. That&apos;s when I became comfortable enough to
          actually eat things like giant puffballs and chicken of the woods. I feel pretty confident
          now in identifying what I can safely eat versus what I still need to study further, and I
          continue to learn.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          I also noticed there wasn&apos;t a premium, well-designed mushroom ID app on the market.
          Everything felt either inaccurate or like it was built in 2012. That impatience with
          forums and frustration with existing apps is basically why I built{" "}
          <a href="https://orangutany.com" className="text-primary hover:underline">Orangutany</a>.
          But honestly, the intent is less about the app and more about helping people learn about the
          beauty of fungi. I want to learn along with them. That&apos;s kind of the whole story.
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          Since then I&apos;ve foraged across Ontario: Algonquin, Bruce Peninsula, Muskoka, the
          Haliburton Highlands, and more local spots around the GTA that I&apos;m not sharing here
          (foragers will understand). I&apos;ve found honey mushrooms in a Markham subdivision,
          chicken of the woods on a dead oak in Scarborough, and a perfect parasol growing through
          a crack in a parking lot near Steeles Avenue. I&apos;ve also foraged in Germany&apos;s Black
          Forest, the English Lake District, and the hills outside Seoul. Every place has its own
          species and its own culture around mushrooms.
        </p>
      </section>

      {/* Photo gallery: the real stuff */}
      <section className="mt-10">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          From the Field
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/chicken-of-woods-closeup.jpg`}
              alt="Bright orange chicken of the woods mushroom growing on a fallen log"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              Chicken of the Woods on a dead log, one of the most unmistakable edible mushrooms. Found this one on the Bruce Trail near Hamilton.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/giant-puffball.jpg`}
              alt="Giant puffball mushroom with finger for scale"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              The giant puffball that started it all. Rouge Valley, October 2019. Finger for scale. This one was about the size of a volleyball.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/mushroom-gills-hand.jpg`}
              alt="Hand holding a large mushroom showing gill detail and bulbous base"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              Always check the base. This specimen showed clear gill attachment and a bulbous base, key identification features you miss if you just cut the stem at ground level.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/spore-print-car.jpg`}
              alt="Mushroom doing a spore print on a car hood showing dark brown gill pattern"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              Improvised spore print on the car hood. When you don&apos;t have paper handy, any smooth dark surface works. This one dropped a clear brown print in about 30 minutes.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/honey-mushrooms-tree.jpg`}
              alt="Honey mushrooms growing in clusters on a tree trunk"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              Honey mushrooms (Armillaria) fruiting on a standing dead tree. These pop up every fall across Southern Ontario. Edible but must be cooked thoroughly.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/tiny-mushroom-fingers.jpg`}
              alt="Tiny mushroom held between two fingers in a green forest"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              Not everything in the forest is big and dramatic. This tiny Mycena was maybe 8mm across. My son spotted it before I did.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/parasol-mushroom-top.jpg`}
              alt="Large parasol mushroom viewed from above showing scaly cap pattern"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              Parasol mushroom (Macrolepiota) from above, the distinctive scaly cap pattern. Found in a grassy clearing. One of the best eating mushrooms if you get the ID right.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/tiny-orange-moss.png`}
              alt="Two tiny bright orange mushrooms growing in green moss"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              Tiny orange Hygrocybe in moss. These wax caps are indicators of old, undisturbed grassland; finding them means the ecosystem is healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Family foraging */}
      <section className="mt-10">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Family Foraging
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-foreground/80">
          My kids have been coming on foraging walks since before they knew what foraging meant. My son can
          identify a chanterelle at ten paces now. My daughter mostly likes kicking puffballs, which is also
          a valid contribution to spore dispersal.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/trail-with-son.jpg`}
              alt="Varun and his son on an autumn forest trail in Ontario"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">Autumn trail walk, somewhere north of Barrie.</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/kids-forest.jpg`}
              alt="Two children standing in an Ontario forest in autumn"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">The foraging crew. Peak fall colour near Haliburton.</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/canadian-wetlands.jpg`}
              alt="Varun at Canadian Wetlands sign during a nature outing"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">Nature outings aren&apos;t always about mushrooms. Sometimes.</p>
          </div>
        </div>
      </section>

      {/* More field shots */}
      <section className="mt-10">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/chicken-of-woods-log.jpg`}
              alt="Chicken of the woods growing on a fallen log in fern-covered forest"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">Same chicken of the woods, wider shot. The ferns and fallen logs are classic Ontario understory.</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/bracket-fungi-log.jpg`}
              alt="Turkey tail bracket fungi growing along a fallen log"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">Bracket fungi (likely Trametes) colonizing a fallen log. Not edible but medicinal research on turkey tail is actually promising.</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={`${imgBase}/white-mushroom-grass.jpg`}
              alt="White mushroom pushing through grass"
              className="w-full rounded-t-lg object-contain bg-black/20 max-h-80"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">Field mushroom pushing through grass, probably Agaricus campestris. The ones you find in your yard.</p>
          </div>
        </div>
      </section>

      {/* About / credentials */}
      <section className="mt-10 rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Background
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Based in</dt>
            <dd className="text-foreground/70">Markham, Ontario, Canada (since ~2016)</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Previously lived in</dt>
            <dd className="text-foreground/70">India &middot; Lancaster, UK &middot; Seoul, South Korea &middot; Hannover, Germany &middot; Detroit suburbs, Michigan &middot; Markham, Ontario</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="text-foreground/70">Computer Science background. Courses in field mycology through the Mycological Society of Toronto. Multiple BioBlitz events with Ontario Nature.</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Foraging experience</dt>
            <dd className="text-foreground/70">Active forager since 2019. Ontario (Rouge Valley, Algonquin, Bruce Peninsula, Muskoka, Haliburton Highlands, GTA parks). Previously: Black Forest (Germany), Lake District (UK), hills outside Seoul (South Korea).</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Memberships</dt>
            <dd className="text-foreground/70">Mycological Society of Toronto &middot; Ontario Nature (volunteer)</dd>
          </div>
          <div className="border-t border-border pt-3">
            <dt className="font-medium text-foreground">Day job</dt>
            <dd className="text-foreground/70">Software engineer. Built <a href="https://orangutany.com" className="text-primary hover:underline">Orangutany</a>, a mushroom identification app.</dd>
          </div>
        </dl>
      </section>

      {/* Articles by this author */}
      <section className="mt-10">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          Species Guides by Varun
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mySpecies.slice(0, 12).map((s) => (
            <Link
              key={s.slug}
              href={`/mushrooms/${s.slug}`}
              className="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary/50"
            >
              {s.images.length > 0 && (
                <img
                  src={`/images/species/${s.slug}/${s.images[0].filename}`}
                  alt={s.images[0].alt}
                  className="aspect-[3/2] w-full object-cover object-top transition group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="p-2">
                <p className="text-sm font-semibold text-foreground">{s.commonName}</p>
                <p className="text-xs italic text-muted-foreground">{s.scientificName}</p>
              </div>
            </Link>
          ))}
        </div>
        {mySpecies.length > 12 && (
          <p className="mt-3 text-center text-xs text-muted-foreground">
            And {mySpecies.length - 12} more species guides.{" "}
            <Link href="/mushrooms" className="text-primary hover:underline">View all &rarr;</Link>
          </p>
        )}
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Varun Vaid",
            url: "https://guide.orangutany.com/authors/varun-vaid",
            image: "https://guide.orangutany.com/images/authors/varun-vaid/forest-backpack.jpg",
            jobTitle: "Software Engineer & Hobby Forager",
            description:
              "Amateur mycologist and mushroom forager based in Markham, Ontario. Founder of Orangutany.",
            sameAs: ["https://orangutany.com"],
            knowsAbout: [
              "Mushroom identification",
              "Wild mushroom foraging",
              "Mycology",
              "Ontario fungi",
            ],
          }),
        }}
      />
    </article>
  );
}
