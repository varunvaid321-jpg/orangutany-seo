import agaricusCampestris from "./agaricus-campestris";
import amanitaCaesarea from "./amanita-caesarea";
import amanitaMuscaria from "./amanita-muscaria";
import amanitaPhalloides from "./amanita-phalloides";
import amanitaVirosa from "./amanita-virosa";
import armillariaMellea from "./armillaria-mellea";
import boletusEdulis from "./boletus-edulis";
import calvatiaGigantea from "./calvatia-gigantea";
import cantharellusCibarius from "./cantharellus-cibarius";
import chlorophyllumRhacodes from "./chlorophyllum-rhacodes";
import coprinopsisAtramentaria from "./coprinopsis-atramentaria";
import coprinusComatus from "./coprinus-comatus";
import craterellusCornucopioides from "./craterellus-cornucopioides";
import galerinaMarginata from "./galerina-marginata";
import ganodermaLucidum from "./ganoderma-lucidum";
import gyromitraEsculenta from "./gyromitra-esculenta";
import hericiumErinaceus from "./hericium-erinaceus";
import hydnumRepandum from "./hydnum-repandum";
import inocybeErubescens from "./inocybe-erubescens";
import laetiporusSulphureus from "./laetiporus-sulphureus";
import lentinulaEdodes from "./lentinula-edodes";
import lycoperdonPerlatum from "./lycoperdon-perlatum";
import macrolepiotaProcera from "./macrolepiota-procera";
import morchellaEsculenta from "./morchella-esculenta";
import omphalotusOlearius from "./omphalotus-olearius";
import pleurotusOstreatus from "./pleurotus-ostreatus";
import psilocybeCubensis from "./psilocybe-cubensis";
import psilocybeSemilanceata from "./psilocybe-semilanceata";
import rubroboletsSatanas from "./rubroboletus-satanas";
import tricholomaMatsutake from "./tricholoma-matsutake";
import trametesVersicolor from "./trametes-versicolor";
import grifolaFrondosa from "./grifola-frondosa";
import type { SpeciesRecord } from "@/lib/types";

export const allSpecies: SpeciesRecord[] = [
  agaricusCampestris,
  amanitaCaesarea,
  amanitaMuscaria,
  amanitaPhalloides,
  amanitaVirosa,
  armillariaMellea,
  boletusEdulis,
  calvatiaGigantea,
  cantharellusCibarius,
  chlorophyllumRhacodes,
  coprinopsisAtramentaria,
  coprinusComatus,
  craterellusCornucopioides,
  galerinaMarginata,
  ganodermaLucidum,
  grifolaFrondosa,
  gyromitraEsculenta,
  hericiumErinaceus,
  hydnumRepandum,
  inocybeErubescens,
  laetiporusSulphureus,
  lentinulaEdodes,
  lycoperdonPerlatum,
  macrolepiotaProcera,
  morchellaEsculenta,
  omphalotusOlearius,
  pleurotusOstreatus,
  psilocybeCubensis,
  psilocybeSemilanceata,
  rubroboletsSatanas,
  tricholomaMatsutake,
  trametesVersicolor,
];

export function getSpeciesBySlug(slug: string): SpeciesRecord | undefined {
  return allSpecies.find((s) => s.slug === slug);
}
