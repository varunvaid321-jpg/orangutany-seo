import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psychoactive Mushrooms: What Science Actually Knows (2025)",
  description:
    "Psilocybin clinical trials, brain effects, microdosing evidence, and real risks. A science-based look at what we know about psychoactive mushrooms, and what's still hype.",
  alternates: { canonical: "/psychoactive-mushrooms-science" },
  openGraph: {
    title: "Psychoactive Mushrooms: What Science Actually Knows (2025)",
    description:
      "Psilocybin clinical trials, brain effects, microdosing evidence, and real risks. A science-based look at what we know about psychoactive mushrooms, and what's still hype.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Psychoactive Mushrooms: What Science Actually Knows (2025)",
  description:
    "Psilocybin clinical trials, brain effects, microdosing evidence, and real risks. A science-based look at what we know about psychoactive mushrooms.",
  author: {
    "@type": "Person",
    name: "Mei Lin Chen",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2025-11-18",
  dateModified: "2025-12-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://orangutany.com/psychoactive-mushrooms-science",
  },
};

export default function PsychoactiveMushroomsSciencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-6 py-8">
        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">
            Psychoactive Mushrooms: What Science Actually Knows (2025)
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Mei Lin Chen for Orangutany
          </p>
        </header>

        {/* TODO: photo */}

        <div className="mt-8 space-y-10 text-base leading-loose text-foreground/80">
          {/* --- Opening --- */}
          <section>
            <p>
              Psilocybin mushrooms have been used by humans for at least 6,000
              years. But it&apos;s only in the last decade that modern science
              has started taking them seriously. Here&apos;s what we actually
              know, and what&apos;s still just hype.
            </p>
          </section>

          {/* --- What Psilocybin Does to the Brain --- */}
          <section>
            <h2 className="text-xl font-bold text-foreground">
              What Psilocybin Does to the Brain
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                When you ingest psilocybin, your body converts it into psilocin
               , the compound which actually crosses the blood-brain barrier.
                Psilocin binds primarily to serotonin 5-HT2A receptors, the same
                receptors that regulate mood, cognition, and perception. This
                isn&apos;t a gentle nudge. It&apos;s a full-scale disruption of
                normal serotonin signaling.
              </p>
              <p>
                One of the most consistent findings in neuroimaging research is
                that psilocybin reduces activity in the default mode network
                (DMN), the set of brain regions active during self-referential
                thinking, mind-wandering, and what researchers sometimes call the
                &ldquo;ego&rdquo; network. At the same time, psilocybin creates
                temporary hyperconnectivity between brain regions that don&apos;t
                normally communicate with each other. Brain areas which handle
                vision might start cross-talking with areas that process emotion
                or memory.
              </p>
              <p>
                Think of it as temporarily loosening the brain&apos;s usual
                wiring, letting signals flow in new patterns.
              </p>
              <p>
                The timeline is reasonably predictable: onset at 30–60 minutes
                after ingestion, peak effects at 1–2 hours, total duration of
                4–6 hours. The intensity depends on dose, individual metabolism,
                and, crucially, the setting.
              </p>
            </div>
          </section>

          {/* --- The Clinical Trials That Changed Everything --- */}
          <section>
            <h2 className="text-xl font-bold text-foreground">
              The Clinical Trials That Changed Everything
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                The modern era of psilocybin research started with one study.
                In 2006, Roland Griffiths at Johns Hopkins gave psilocybin to 36
                healthy volunteers in a controlled setting. The results were
                striking: 60% of participants rated the experience among the
                most personally meaningful of their entire lives. Not
                immediately after. 14 months later, when the novelty had long
                worn off.
              </p>
              <p>
                That study cracked open a door. In 2016, two landmark trials at
                NYU and Johns Hopkins tested psilocybin-assisted therapy in
                patients with cancer-related depression and anxiety. Roughly 80%
                showed significant reductions in distress, with effects lasting
                six months or longer. For context, conventional antidepressants
                often take weeks to kick in and require daily dosing.
              </p>
              <p>
                In 2022, Imperial College London published a head-to-head
                comparison of psilocybin versus escitalopram, a widely
                prescribed SSRI. Psilocybin was at least as effective for
                depression, and participants reported fewer side effects , 
                notably less emotional blunting and sexual dysfunction than the
                SSRI group.
              </p>
              <p>
                Ongoing Phase 2 and Phase 3 trials through the MAPS and Usona
                Institute are now testing psilocybin for treatment-resistant
                depression, patients who haven&apos;t responded to multiple
                conventional treatments. The results aren&apos;t published yet,
                but the fact that the FDA granted psilocybin
                &ldquo;breakthrough therapy&rdquo; designation in 2018 tells you
                something about the early data.
              </p>
              <p>
                Oregon became the first US state to create a legal framework for
                psilocybin therapy under Measure 109, with licensed service
                centers opening in 2023. Colorado followed with its own
                framework shortly after.
              </p>
            </div>
          </section>

          {/* --- Microdosing --- */}
          <section>
            <h2 className="text-xl font-bold text-foreground">
              Microdosing: The Evidence Is... Complicated
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                Microdosing means taking a sub-perceptual dose of psilocybin,
                typically 1/10th to 1/20th of a full dose, every few days. You
                shouldn&apos;t feel &ldquo;high.&rdquo; Proponents claim
                improvements in focus, creativity, and mood. The practice has
                exploded in popularity, particularly in tech and creative
                industries.
              </p>
              <p>
                The evidence, however, is less exciting than the testimonials.
                The most rigorous study to date came from Imperial College London
                in 2021, a &ldquo;self-blinding&rdquo; design where
                participants prepared their own microdoses and placebos, then
                took them without knowing which was which. The microdosers
                reported improvements in wellbeing and cognition. But so did the
                placebo group. There was no statistically significant difference
                between the two.
              </p>
              <p>
                Right now, the strongest evidence for microdosing is that
                expecting it to work... might make you feel better regardless.
                That doesn&apos;t mean it&apos;s useless; the placebo effect is
                real and measurable. But it does mean we can&apos;t credit the
                psilocybin itself based on current data.
              </p>
            </div>
          </section>

          {/* --- Risks --- */}
          <section>
            <h2 className="text-xl font-bold text-foreground">
              The Risks No One Wants to Talk About
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                If you spend any time in online psychedelic communities,
                you&apos;d think psilocybin is basically harmless. The data
                tells a more nuanced story.
              </p>
              <p>
                &ldquo;Bad trips&rdquo; are real and measurable. In clinical
                trial settings, with screened participants, trained therapists,
                and controlled environments, roughly 7–8% of participants still
                report significant anxiety, fear, or psychological distress
                during sessions. Outside clinical settings, that number is
                almost certainly higher.
              </p>
              <p>
                HPPD (Hallucinogen Persisting Perception Disorder) is rare but
                documented. Some users experience persistent visual disturbances
               (trailing images, halos, or visual snow) that continue weeks
                or months after a single use. The mechanism isn&apos;t well
                understood, and there&apos;s no reliable treatment.
              </p>
              <p>
                Drug interactions matter. SSRIs can blunt psilocybin&apos;s
                effects, which some people compensate for by taking higher doses
               , a risky approach. MAOIs combined with psilocybin can trigger
                serotonin syndrome, a potentially life-threatening condition.
              </p>
              <p>
                The most serious risk is for individuals with a personal or
                family history of psychosis. Psilocybin can trigger or worsen
                psychotic episodes in vulnerable individuals. Every major
                clinical trial screens for this, and there&apos;s a reason for
                that.
              </p>
              <p>
                This is not a risk-free substance. The clinical setting matters
                enormously.
              </p>
            </div>
          </section>

          {/* --- Amanita muscaria --- */}
          <section>
            <h2 className="text-xl font-bold text-foreground">
              Amanita muscaria: The Other Psychoactive Mushroom
            </h2>

            {/* TODO: photo */}

            <div className="mt-4 space-y-3">
              <p>
                When most people picture a &ldquo;magic mushroom,&rdquo; they
                picture the red cap with white spots. That&apos;s{" "}
                <Link
                  href="/mushrooms/amanita-muscaria"
                  className="text-primary underline hover:text-primary/80 transition"
                >
                  Amanita muscaria
                </Link>
                , and it&apos;s a completely different pharmacological animal.
              </p>
              <p>
                Amanita muscaria doesn&apos;t contain psilocybin. Its active
                compounds are ibotenic acid and muscimol. Where psilocybin acts
                on serotonin receptors, muscimol is a GABA agonist; it works on
                the same system that alcohol and benzodiazepines target. The
                experience is accordingly different: sedation, altered
                perception, and a characteristic size distortion effect
                (objects appearing larger or smaller than they are) that
                almost certainly inspired the &ldquo;Alice in Wonderland&rdquo;
                imagery.
              </p>
              <p>
                Amanita muscaria has a long history in Siberian shamanic
                traditions, where it was consumed ceremonially, sometimes by
                feeding it to reindeer first and drinking the reindeer&apos;s
                urine, which filtered out some of the more toxic compounds. It
                is not used in any modern clinical research. The effects are
                unpredictable, the dosing is difficult to standardize, and the
                toxicity profile is significantly worse than psilocybin.
              </p>
            </div>
          </section>

          {/* --- Legal Status --- */}
          <section>
            <h2 className="text-xl font-bold text-foreground">
              Legal Status Around the World
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                Psilocybin remains a Schedule I substance in most of the United
                States and the United Kingdom. But the landscape is shifting
                faster than at any point in the last 50 years.
              </p>
              <p>
                Oregon and Colorado have created legal frameworks for supervised
                psilocybin therapy. Several US cities, including Denver,
                Oakland, and Washington DC, have decriminalized possession. The
                Netherlands permits psilocybin truffles (a legal distinction
                from mushrooms). Jamaica and Brazil have no laws prohibiting
                psilocybin. Canada has granted exemptions for therapeutic and
                end-of-life use.
              </p>
              <p>
                Australia made the biggest move in 2023, becoming the first
                country to formally approve psilocybin for therapeutic use under
                the Therapeutic Goods Administration (TGA). Authorized
                psychiatrists can now prescribe psilocybin for treatment-resistant
                depression.
              </p>
              <p>
                The regulatory trajectory is clear, even if the timeline
                isn&apos;t. More jurisdictions will follow. The question is
                whether the frameworks will prioritize clinical rigor or rush to
                market.
              </p>
            </div>
          </section>

          {/* --- Closing --- */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground">
              The Bottom Line
            </h2>
            <p className="mt-3">
              The science is promising but early. What we know for certain:
              psilocybin is pharmacologically active, clinically interesting,
              and not to be taken casually. The rest is still being figured out.
            </p>
            <p className="mt-3">
              If you&apos;re interested in the species most commonly associated
              with psilocybin research, start with{" "}
              <Link
                href="/mushrooms/psilocybe-cubensis"
                className="text-primary underline hover:text-primary/80 transition"
              >
                Psilocybe cubensis
              </Link>
              . For the other psychoactive mushroom discussed above, see our
              guide to{" "}
              <Link
                href="/mushrooms/amanita-muscaria"
                className="text-primary underline hover:text-primary/80 transition"
              >
                Amanita muscaria
              </Link>
              .
            </p>
          </section>
        </div>
      </article>

      {/* SEO keyword targets (hidden, for internal reference) */}
      {/*
        psilocybin mushrooms science, psychoactive mushrooms research,
        psilocybin clinical trials, magic mushrooms brain effects,
        microdosing mushrooms evidence, psilocybin for depression,
        are psychedelic mushrooms safe, psilocybin legal status 2025,
        amanita muscaria psychoactive, johns hopkins psilocybin study,
        psilocybin vs SSRI, mushroom therapy
      */}
    </>
  );
}
