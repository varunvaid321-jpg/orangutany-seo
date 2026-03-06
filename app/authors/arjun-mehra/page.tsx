import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/shared/breadcrumb";

export const metadata: Metadata = {
  title: "Arjun Mehra, Ethnomycologist & Field Researcher | Orangutany",
  description:
    "Arjun Mehra is an ethnomycologist from Rajasthan who studies traditional mushroom use in the Aravalli hills and across South Asia.",
  alternates: { canonical: "/authors/arjun-mehra" },
  openGraph: {
    title: "Arjun Mehra, Ethnomycologist & Field Researcher",
    description:
      "Field researcher studying psychoactive and medicinal fungi in the Aravalli hills and Western Ghats. Based in Udaipur, Rajasthan.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arjun Mehra",
  url: "https://guide.orangutany.com/authors/arjun-mehra",
  description:
    "Ethnomycologist and field researcher studying psychoactive and traditional mushroom use across South Asia.",
  jobTitle: "Ethnomycologist & Field Researcher",
};

export default function ArjunMehraPage() {
  const crumbs = [
    { label: "Authors", href: "/authors" },
    { label: "Arjun Mehra" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Authors", url: "/authors" },
              { name: "Arjun Mehra", url: "/authors/arjun-mehra" },
            ])
          ),
        }}
      />

      <Breadcrumb items={crumbs} />

      <header>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
          Arjun Mehra
        </h1>
        <p className="mt-1 text-sm text-primary">
          Ethnomycologist &middot; Field Researcher &middot; Udaipur, Rajasthan
        </p>
      </header>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
        <p>
          I grew up in Udaipur, in the foothills of the Aravallis. During monsoon season the hills
          turn green almost overnight, and if you know where to look, the forest floor comes alive
          with fungi. My grandfather called them different names in Mewari, most of which I have
          never found in any textbook. That gap between what local people know and what gets
          published in English is basically what drives all my work.
        </p>
        <p>
          I studied botany at the University of Rajasthan in Jaipur, then did my masters in
          mycology at TERI in Delhi. My thesis was on ethnomycological knowledge among
          Bhil and Garasia tribal communities in southern Rajasthan. These communities have
          used specific fungi for generations, sometimes as food, sometimes in healing rituals,
          sometimes recreationally. Almost none of it is documented in Western literature.
        </p>
        <p>
          After my masters I spent two years doing fieldwork in the Western Ghats, Meghalaya,
          and the Kumaon hills. The diversity is staggering. India has at least 80 recorded
          species of <em>Psilocybe</em> alone, though the real number is probably much higher.
          In Kodaikanal and parts of Meghalaya, psilocybin mushrooms grow wild in cattle
          pastures, and there is a long oral tradition around their use that predates any
          Western &quot;discovery&quot; of psychedelics.
        </p>
        <p>
          I currently split my time between Udaipur and fieldwork across South and Southeast
          Asia. I consult for a couple of research groups studying psilocybin therapy, and I
          write about the intersection of traditional knowledge, psychoactive fungi, and
          conservation. The Aravallis are one of the oldest mountain ranges on Earth, and
          the fungal biodiversity here is under-studied and under threat from mining and
          deforestation. Documenting what grows here before it disappears feels urgent.
        </p>
        <p>
          When I am not in the field I teach a short course on Indian ethnomycology at
          the Forest Research Institute in Dehradun. I also keep a small mushroom garden
          at my family home in Udaipur where I grow oysters, shiitake, and paddy straw
          mushrooms. My mother thinks I should have become a doctor. She is probably right.
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Focus Areas
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Ethnomycology",
            "Psychoactive Fungi",
            "Psilocybe Species",
            "Traditional Knowledge",
            "Indian Mycology",
            "Aravalli Biodiversity",
            "Western Ghats",
            "Fungal Conservation",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Background
        </h2>
        <dl className="mt-3 space-y-2 text-sm">
          <div>
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="text-foreground/70">
              MSc Mycology, TERI School of Advanced Studies, Delhi. BSc Botany, University of Rajasthan, Jaipur.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Fieldwork</dt>
            <dd className="text-foreground/70">
              Aravalli Range (Rajasthan), Western Ghats (Karnataka, Kerala, Tamil Nadu), Khasi Hills (Meghalaya), Kumaon (Uttarakhand). Also Thailand, Laos, Nepal.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Affiliations</dt>
            <dd className="text-foreground/70">
              Mycological Society of India. Forest Research Institute, Dehradun (visiting faculty). Indian Society of Ethnobiology.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">From</dt>
            <dd className="text-foreground/70">Udaipur, Rajasthan, India</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Articles by Arjun
        </h2>
        <ul className="mt-3 space-y-2">
          <li>
            <Link
              href="/articles/psychoactive-mushrooms-science"
              className="text-sm text-primary hover:underline"
            >
              Psychoactive Mushrooms: What Science Actually Knows
            </Link>
            <span className="text-xs text-muted-foreground"> (co-contributor)</span>
          </li>
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">
          More articles coming on Indian ethnomycology and Aravalli fungi.
        </p>
      </section>
    </div>
  );
}
