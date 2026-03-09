import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psilocybin Therapy: The Race for FDA Approval",
  description:
    "Compass Pathways expects an FDA decision on psilocybin therapy for severe depression by late 2026 or early 2027. Five phase 3 trials are underway. Oregon, Colorado, and other states are building legal frameworks. Here is where psilocybin therapy stands in 2026.",
  alternates: { canonical: "/articles/psilocybin-therapy-fda-approval" },
  openGraph: {
    title: "Psilocybin Therapy: The Race for FDA Approval",
    description:
      "Compass Pathways expects an FDA decision on psilocybin therapy for severe depression by late 2026 or early 2027. Five phase 3 trials are underway. Here is where psilocybin therapy stands.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Psilocybin Therapy: The Race for FDA Approval",
  description:
    "Compass Pathways expects an FDA decision on psilocybin therapy for severe depression by late 2026 or early 2027. Five phase 3 trials are underway.",
  author: {
    "@type": "Person",
    name: "Mei Lin Chen",
  },
  publisher: {
    "@type": "Organization",
    name: "Orangutany",
    url: "https://orangutany.com",
  },
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://guide.orangutany.com/articles/psilocybin-therapy-fda-approval",
  },
};

export default function PsilocybinTherapyFdaApprovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-10">
        {/* Header */}
        <header>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl md:text-4xl leading-tight">
            Psilocybin Therapy: The Race for FDA Approval
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            By{" "}
            <Link href="/authors/mei-lin-chen" className="text-primary hover:underline">
              Mei Lin Chen
            </Link>{" "}
            &middot; Orangutany &middot; March 2026
          </p>
        </header>

        {/* Opening */}
        <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
            For the first time in half a century, a psychedelic compound is on
            a plausible path to becoming a federally approved medicine in the
            United States. Compass Pathways, a UK-based biotechnology company,
            is running five phase 3 clinical trials of synthetic psilocybin
            for treatment-resistant depression, with an FDA decision expected
            in late 2026 or early 2027.
          </p>
          <p>
            Meanwhile, states are not waiting. Oregon launched the
            nation&apos;s first legal psilocybin therapy program in 2023.
            Colorado followed with its own framework. New Mexico is set to
            begin regulated access in December 2026. Washington state has
            approved a pilot program. And dozens of cities have
            decriminalized psilocybin possession.
          </p>
          <p>
            The compound at the center of all this comes from a group of
            mushrooms that humans have been consuming for thousands of years:{" "}
            <Link
              href="/mushrooms/psilocybe-cubensis"
              className="text-primary underline hover:text-primary/80 transition"
            >
              <em>Psilocybe cubensis</em>
            </Link>
            ,{" "}
            <Link
              href="/mushrooms/psilocybe-semilanceata"
              className="text-primary underline hover:text-primary/80 transition"
            >
              <em>Psilocybe semilanceata</em>
            </Link>
            , and more than 200 other psilocybin-producing species found on
            every inhabited continent.
          </p>
          <p>
            This article covers where the science stands, what the clinical
            trials have found, how therapy sessions work, the state-level
            landscape, and what FDA approval would actually mean.
          </p>
        </section>

        <figure className="my-8">
          <img
            src="/articles/psilocybin-therapy-fda-approval/01.jpg"
            alt="Psilocybe cubensis mushrooms growing from cow dung in Zimbabwe, showing golden-brown caps and white stems"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Psilocybe cubensis, the most commonly known psilocybin mushroom, growing in its natural habitat — Photo: Robert van der Horst / Wikimedia Commons (CC BY-SA 4.0)
          </figcaption>
        </figure>

        {/* What Is Psilocybin */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            What Is Psilocybin?
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Psilocybin is a naturally occurring psychedelic compound produced
              by more than 200 species of fungi, most belonging to the genus{" "}
              <em>Psilocybe</em>. When ingested, psilocybin is rapidly
              converted by the body into psilocin, which binds to serotonin
              5-HT2A receptors in the brain. This triggers a cascade of
              neurological effects including altered perception, profound
              changes in mood and cognition, and what researchers describe as
              increased neural connectivity &mdash; brain regions that do not
              normally communicate begin to interact.
            </p>
            <p>
              The most commonly known psilocybin mushroom is{" "}
              <Link
                href="/mushrooms/psilocybe-cubensis"
                className="text-primary underline hover:text-primary/80 transition"
              >
                <em>Psilocybe cubensis</em>
              </Link>
              , a tropical and subtropical species found across the Americas,
              Southeast Asia, and Australia. In temperate climates, the
              liberty cap (
              <Link
                href="/mushrooms/psilocybe-semilanceata"
                className="text-primary underline hover:text-primary/80 transition"
              >
                <em>Psilocybe semilanceata</em>
              </Link>
              ) is the most widespread species. The Pacific Northwest is home
              to several potent species including{" "}
              <Link
                href="/mushrooms/psilocybe-cyanescens"
                className="text-primary underline hover:text-primary/80 transition"
              >
                <em>Psilocybe cyanescens</em>
              </Link>{" "}
              and{" "}
              <Link
                href="/mushrooms/psilocybe-azurescens"
                className="text-primary underline hover:text-primary/80 transition"
              >
                <em>Psilocybe azurescens</em>
              </Link>
              , the latter considered the most potent psilocybin mushroom known.
            </p>
            <p>
              Psilocybin was first isolated in 1958 by Albert Hofmann, the
              Swiss chemist who had also discovered LSD. It was classified as a
              Schedule I controlled substance in the United States in 1970 under
              the Controlled Substances Act, effectively halting research for
              decades.
            </p>
          </div>
        </section>

        {/* Clinical Evidence */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The Clinical Evidence
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Modern psilocybin research restarted in the early 2000s, led by
              Roland Griffiths at Johns Hopkins University and Stephen Ross at
              NYU. Since then, a substantial body of clinical evidence has
              accumulated across multiple conditions.
            </p>

            <div className="rounded-xl border border-border bg-card p-5 space-y-4">
              <h3 className="text-base font-semibold text-foreground">
                Treatment-Resistant Depression
              </h3>
              <p>
                The most advanced indication. Compass Pathways&apos; phase 2b
                trial (published in <em>The New England Journal of
                Medicine</em> in 2022) enrolled 233 patients with
                treatment-resistant depression who had failed at least two
                prior antidepressant treatments. A single 25mg dose of
                synthetic psilocybin, administered with psychological support,
                produced rapid and significant reductions in depression scores
                at three weeks. The response rate (50% reduction in MADRS
                score) was 37% for the 25mg group versus 18% for the 1mg
                control.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Major Depressive Disorder
              </h3>
              <p>
                A 2023 Johns Hopkins study found that two sessions of psilocybin
                therapy produced antidepressant effects lasting at least 12
                months in patients with major depression. The study, published
                in the <em>Journal of Psychopharmacology</em>, reported that
                75% of participants showed clinically significant response at
                12 months, and 58% were in remission.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                End-of-Life Anxiety
              </h3>
              <p>
                Some of the most compelling evidence comes from studies of
                patients with terminal cancer diagnoses. A landmark 2016 NYU
                trial found that a single dose of psilocybin produced
                immediate, substantial, and sustained decreases in anxiety and
                depression in patients with life-threatening cancer. At
                six-month follow-up, approximately 80% of participants showed
                clinically significant reductions in distress. These effects
                were still present at 4.5-year follow-up.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Addiction
              </h3>
              <p>
                A 2022 Johns Hopkins trial of psilocybin for alcohol use
                disorder found that participants who received psilocybin
                therapy had an 83% reduction in heavy drinking days compared to
                51% for active placebo, with effects sustained at 8 months.
                Separate pilot studies have shown promising results for tobacco
                cessation, with an 80% abstinence rate at six months (compared
                to ~35% for the best available pharmacotherapy).
              </p>

              <h3 className="text-base font-semibold text-foreground">
                PTSD and Other Conditions
              </h3>
              <p>
                Early-stage trials are underway for PTSD, obsessive-compulsive
                disorder, anorexia nervosa, cluster headaches, and chronic pain.
                Results are preliminary but have been sufficiently promising to
                attract significant research funding.
              </p>
            </div>
          </div>
        </section>

        <figure className="my-8">
          <img
            src="/articles/psilocybin-therapy-fda-approval/02.jpg"
            alt="Psilocybe semilanceata liberty cap mushroom with its distinctive pointed conical cap and slender stem"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Psilocybe semilanceata (liberty cap), the most widespread psilocybin mushroom in temperate climates — Photo: Alan Rockefeller / Wikimedia Commons (CC BY-SA 3.0)
          </figcaption>
        </figure>

        {/* The FDA Path */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The Path to FDA Approval
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              The FDA designated psilocybin a &ldquo;Breakthrough
              Therapy&rdquo; for treatment-resistant depression in 2018, a
              status that accelerates the review process for drugs that show
              substantial improvement over existing treatments.
            </p>
            <p>
              Compass Pathways is the furthest along in the regulatory
              process. The company is running five phase 3 trials across the
              United States, enrolling patients with treatment-resistant
              depression who have failed at least two adequate courses of
              antidepressant therapy. The trials are testing COMP360, a
              synthetic formulation of psilocybin, administered in a
              single 25mg dose under clinical supervision.
            </p>
            <p>
              The phase 3 program was designed in consultation with the FDA
              and includes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Two pivotal efficacy trials comparing psilocybin 25mg to a 1mg
                active control (the 1mg dose is intended to produce minimal
                psychoactive effects while maintaining blinding)
              </li>
              <li>
                A long-term safety trial tracking outcomes over 12 months
              </li>
              <li>
                An open-label extension study for non-responders
              </li>
              <li>
                A study examining repeat dosing in patients who initially
                respond but later relapse
              </li>
            </ul>
            <p>
              Compass expects to submit its New Drug Application (NDA) in
              2026, with an FDA decision potentially in late 2026 or early
              2027. If approved, psilocybin would become the first
              psychedelic compound to receive FDA marketing authorization.
            </p>
            <p>
              The FDA&apos;s August 2024 rejection of MDMA-assisted therapy
              for PTSD (Lykos Therapeutics, formerly MAPS) cast a shadow over
              the psychedelic medicine field. The agency cited concerns about
              trial methodology, functional unblinding (patients could tell
              whether they received MDMA or placebo), and the difficulty of
              separating drug effects from therapy effects. Compass has stated
              that its trial design accounts for these concerns, but the MDMA
              rejection raised the bar for all psychedelic drug applications.
            </p>
          </div>
        </section>

        {/* How Therapy Sessions Work */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            How Psilocybin Therapy Sessions Work
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Psilocybin therapy is not &ldquo;take a pill and go home.&rdquo;
              It is a structured process involving preparation, a guided
              psychedelic experience, and integration. This model has been
              consistent across virtually all clinical trials and state-level
              programs.
            </p>
            <div className="rounded-xl border border-border bg-card p-5 space-y-4">
              <h3 className="text-base font-semibold text-foreground">
                Preparation (1&ndash;2 sessions before dosing)
              </h3>
              <p>
                The patient meets with a trained therapist or facilitator to
                discuss their mental health history, set intentions for the
                experience, and learn what to expect. The therapist establishes
                a relationship of trust that will be crucial during the dosing
                session. Patients are screened for contraindications including
                personal or family history of psychotic disorders, certain
                cardiac conditions, and current use of serotonergic medications.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                The Dosing Session (6&ndash;8 hours)
              </h3>
              <p>
                The patient takes a capsule containing a measured dose of
                synthetic psilocybin (typically 25mg in clinical trials) in a
                comfortable, controlled setting, often a room designed to feel
                more like a living room than a clinic. One or two trained
                facilitators remain present throughout the session. Patients
                typically wear an eye mask and listen to a curated music
                playlist. The experience lasts 4&ndash;6 hours, during which
                the facilitators provide supportive presence but minimal
                direction. The effects peak at approximately 2&ndash;3 hours
                and gradually subside.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Integration (1&ndash;3 sessions after dosing)
              </h3>
              <p>
                In the days and weeks following the dosing session, the patient
                meets with the therapist to process the experience, discuss
                insights that emerged, and work on translating any
                psychological shifts into lasting changes. Integration is
                considered by researchers to be a critical component of the
                therapeutic process.
              </p>
            </div>
          </div>
        </section>

        {/* State-Level Landscape */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            The State-Level Landscape
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              While federal approval remains pending, several states have
              created their own legal frameworks for psilocybin access.
            </p>

            <div className="rounded-xl border border-border bg-card p-5 space-y-4">
              <h3 className="text-base font-semibold text-foreground">
                Oregon (Measure 109)
              </h3>
              <p>
                Oregon became the first state to legalize regulated psilocybin
                therapy when voters passed Measure 109 in November 2020. The
                Oregon Health Authority spent two years developing the
                regulatory framework, and the first licensed psilocybin
                service centers opened in mid-2023. The program allows adults
                21 and older to receive psilocybin in supervised sessions at
                licensed facilities. No diagnosis or prescription is required.
                As of early 2026, approximately 30 licensed service centers are
                operating statewide. Sessions typically cost $1,500&ndash;$3,500,
                which is not covered by insurance. Facilitators complete a
                state-mandated training program. Early reports indicate strong
                demand, particularly from people with depression, anxiety, and
                end-of-life distress.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Colorado (Proposition 122)
              </h3>
              <p>
                Colorado voters passed Proposition 122 in November 2022,
                decriminalizing psilocybin possession and establishing a
                framework for regulated &ldquo;healing centers.&rdquo; The
                state&apos;s Natural Medicine Division has been developing
                rules for licensed facilitator training and service center
                operations. The first healing centers are expected to open in
                2025&ndash;2026. Colorado&apos;s law also decriminalized
                possession of several other natural psychedelics including
                DMT, ibogaine, and mescaline (excluding peyote).
              </p>

              <h3 className="text-base font-semibold text-foreground">
                New Mexico
              </h3>
              <p>
                New Mexico passed legislation in 2024 creating a regulated
                psilocybin therapy program, with the state health department
                tasked with developing regulations. Licensed access is expected
                to begin in December 2026. New Mexico has a long history of
                psychedelic research &mdash; the University of New Mexico hosted
                some of the earliest modern psilocybin studies.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Washington
              </h3>
              <p>
                Washington state approved a psilocybin therapy pilot program
                in 2024, allowing a limited number of licensed providers to
                offer supervised psilocybin sessions. The pilot is designed to
                generate data on safety and efficacy in a real-world clinical
                setting before the state considers broader legalization.
              </p>

              <h3 className="text-base font-semibold text-foreground">
                Other States
              </h3>
              <p>
                Psilocybin legislation has been introduced in more than 20
                states. Connecticut, Hawaii, Maryland, New York, and Texas have
                all considered bills related to psilocybin research, therapy
                programs, or decriminalization. Most have not advanced to a
                vote, but the legislative momentum is notable.
              </p>
            </div>
          </div>
        </section>

        {/* Current Legal Status */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            Current Legal Status
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Psilocybin remains a Schedule I controlled substance under
              federal law in the United States, meaning it is classified as
              having &ldquo;no currently accepted medical use&rdquo; and a
              &ldquo;high potential for abuse.&rdquo; This classification
              creates a legal tension with state programs: Oregon&apos;s
              psilocybin service centers operate legally under state law while
              technically violating federal law, similar to the situation with
              state-legal cannabis.
            </p>
            <p>
              The Department of Justice has not signaled an intent to enforce
              federal law against state-licensed psilocybin programs. However,
              the Schedule I status complicates research funding, banking for
              psilocybin businesses, and insurance coverage.
            </p>
            <p>
              Internationally, psilocybin&apos;s legal status varies widely.
              It is legal for therapeutic use in Jamaica and the Netherlands
              (where psilocybin-containing truffles are sold openly). It is
              decriminalized in Portugal and parts of Brazil. Australia
              rescheduled psilocybin for therapeutic use in July 2023, making
              it available by prescription from specially authorized
              psychiatrists. Canada has granted individual exemptions for
              psilocybin therapy in palliative care settings.
            </p>
          </div>
        </section>

        {/* Risks and Contraindications */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            Risks and Contraindications
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Psilocybin is physiologically one of the safest psychoactive
              compounds known. It is not addictive, does not produce physical
              dependence, and has an extremely wide safety margin &mdash; the
              ratio between a psychoactive dose and a lethal dose is estimated
              at roughly 1,000:1. No deaths from psilocybin toxicity alone
              have been documented in clinical settings.
            </p>
            <p>
              However, psilocybin is not without risks:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Psychiatric contraindications:</strong> Psilocybin is
                contraindicated in people with a personal or family history of
                schizophrenia, psychotic disorders, or bipolar I disorder. The
                compound can trigger psychotic episodes in vulnerable
                individuals, and all clinical trials screen rigorously for
                these conditions.
              </li>
              <li>
                <strong>Psychological distress during sessions:</strong>{" "}
                Psilocybin can produce intense anxiety, fear, paranoia, or
                feelings of losing control during the experience. In clinical
                settings, trained facilitators manage these episodes through
                reassurance and grounding techniques. In uncontrolled settings,
                these experiences can be traumatic.
              </li>
              <li>
                <strong>Cardiovascular effects:</strong> Psilocybin causes
                modest, transient increases in heart rate and blood pressure.
                This is generally not dangerous in healthy individuals but may
                be a concern for people with uncontrolled hypertension or
                certain cardiac conditions.
              </li>
              <li>
                <strong>Drug interactions:</strong> Psilocybin interacts with
                serotonergic medications, particularly SSRIs and MAOIs. Most
                clinical trials require patients to taper off antidepressants
                before receiving psilocybin, which itself carries risks.
              </li>
              <li>
                <strong>Hallucinogen persisting perception disorder
                (HPPD):</strong> A rare condition in which visual disturbances
                (trailing images, halos, geometric patterns) persist long after
                the psychedelic experience has ended. Incidence in clinical
                trials has been extremely low but not zero.
              </li>
            </ul>
            <p>
              The risk profile of psilocybin in controlled clinical settings is
              markedly different from unsupervised use. Almost all serious
              adverse events in the literature have occurred outside clinical
              contexts, often involving unknown doses, pre-existing psychiatric
              conditions, or concurrent substance use.
            </p>
          </div>
        </section>

        <figure className="my-8">
          <img
            src="/articles/psilocybin-therapy-fda-approval/03.jpg"
            alt="A single Psilocybe semilanceata liberty cap mushroom growing in a grassy field"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            A liberty cap in its natural grassland habitat — clinical psilocybin therapy uses synthetic compounds, not wild mushrooms — Photo: Dohduhdah / Wikimedia Commons (Public Domain)
          </figcaption>
        </figure>

        {/* Wild Psilocybin Mushrooms */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            A Note on Wild Psilocybin Mushrooms
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              Clinical psilocybin therapy uses synthetically produced,
              precisely dosed psilocybin in capsule form. This is different
              from consuming wild psilocybin mushrooms, which carry additional
              risks including variable potency, species misidentification, and
              contamination.
            </p>
            <p>
              The most serious risk of foraging for psilocybin mushrooms is
              misidentification. Several deadly species resemble psilocybin
              mushrooms, most notably{" "}
              <Link
                href="/mushrooms/galerina-marginata"
                className="text-primary underline hover:text-primary/80 transition"
              >
                <em>Galerina marginata</em>
              </Link>
              , a small brown mushroom that contains the same lethal amatoxins
              as the death cap and frequently grows in the same habitats as{" "}
              <Link
                href="/mushrooms/psilocybe-cyanescens"
                className="text-primary underline hover:text-primary/80 transition"
              >
                <em>Psilocybe cyanescens</em>
              </Link>
              . Multiple fatalities have been attributed to foragers confusing
              <em> Galerina</em> with <em>Psilocybe</em> species.
            </p>
            <p>
              The legalization of psilocybin therapy does not make foraging for
              wild psilocybin mushrooms legal or safe. Even in Oregon and
              Colorado, possession of psilocybin mushrooms outside of licensed
              settings remains restricted.
            </p>
          </div>
        </section>

        {/* What Approval Would Mean */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl">
            What FDA Approval Would Mean
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
            <p>
              If the FDA approves Compass Pathways&apos; psilocybin therapy
              for treatment-resistant depression, it would represent a
              watershed moment for psychedelic medicine and for mental health
              treatment more broadly.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Insurance coverage:</strong> FDA-approved treatments
                can be covered by insurance. This would make psilocybin therapy
                accessible to patients who cannot afford the $1,500&ndash;$3,500
                out-of-pocket cost of state-level programs.
              </li>
              <li>
                <strong>Rescheduling:</strong> FDA approval would likely trigger
                DEA rescheduling of psilocybin from Schedule I (no accepted
                medical use) to Schedule II or III (accepted medical use with
                restrictions). This would ease research barriers and resolve
                some of the federal-state legal conflicts.
              </li>
              <li>
                <strong>Clinical access:</strong> Psychiatrists and other
                qualified prescribers could offer psilocybin therapy under FDA
                guidelines, dramatically expanding access beyond the handful of
                states with their own programs.
              </li>
              <li>
                <strong>Research acceleration:</strong> Rescheduling would
                simplify the regulatory burden on researchers, enabling larger,
                more diverse trials for additional indications including PTSD,
                addiction, and eating disorders.
              </li>
              <li>
                <strong>Precedent:</strong> Approval of psilocybin would
                establish a regulatory pathway for other psychedelic compounds,
                including MDMA (pending resubmission), LSD (in early-stage
                trials for anxiety), and DMT (being studied for depression).
              </li>
            </ul>
            <p>
              FDA approval would not make psilocybin available over the counter
              or for unsupervised use. The drug would almost certainly be
              approved under a Risk Evaluation and Mitigation Strategy (REMS),
              requiring administration in certified clinical settings by trained
              healthcare providers. Patients would not take psilocybin home.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed">
          <p>
            The path from a mushroom growing in a cow pasture to an
            FDA-approved medicine has taken decades, involved thousands of
            patients in clinical trials, and navigated one of the most complex
            regulatory and cultural landscapes in modern medicine. Whether the
            FDA says yes or no to Compass Pathways&apos; application, the
            science of psilocybin therapy has already fundamentally changed the
            conversation about how we treat depression, addiction, and
            existential distress.
          </p>
          <p>
            For species profiles of psilocybin-producing mushrooms, including
            identification characteristics and distribution, see our pages on{" "}
            <Link
              href="/mushrooms/psilocybe-cubensis"
              className="text-primary underline hover:text-primary/80 transition"
            >
              <em>Psilocybe cubensis</em>
            </Link>
            ,{" "}
            <Link
              href="/mushrooms/psilocybe-semilanceata"
              className="text-primary underline hover:text-primary/80 transition"
            >
              <em>Psilocybe semilanceata</em>
            </Link>
            ,{" "}
            <Link
              href="/mushrooms/psilocybe-cyanescens"
              className="text-primary underline hover:text-primary/80 transition"
            >
              <em>Psilocybe cyanescens</em>
            </Link>
            , and{" "}
            <Link
              href="/mushrooms/psilocybe-azurescens"
              className="text-primary underline hover:text-primary/80 transition"
            >
              <em>Psilocybe azurescens</em>
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
