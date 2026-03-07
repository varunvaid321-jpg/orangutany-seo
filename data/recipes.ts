export type RecipeEntry = {
  slug: string;
  speciesSlug: string;
  recipeName: string;
  recipeIntro: string;
  ingredients: string[];
  steps: string[];
  sourceLabel: string;
  sourceUrl: string;
  cookingTip: string;
  prepTime: string;
  servings: string;
  tasteNote: string;
};

export const RECIPES: RecipeEntry[] = [
  {
    slug: "chanterelle-risotto",
    speciesSlug: "cantharellus-cibarius",
    recipeName: "Chanterelle Risotto with Thyme and Parmesan",
    recipeIntro:
      "Chanterelles have a delicate apricot-like aroma that pairs beautifully with the creaminess of risotto. This is the kind of dish that makes foragers feel like they've earned dinner. The key is to cook the chanterelles separately so they get golden and crispy instead of steaming into mush inside the rice.",
    ingredients: [
      "300g fresh chanterelles, cleaned and torn into pieces",
      "300g arborio rice",
      "1 small onion, finely diced",
      "2 cloves garlic, minced",
      "150ml dry white wine",
      "1 liter warm chicken or vegetable stock",
      "3 tbsp butter (divided)",
      "60g Parmesan, freshly grated",
      "Fresh thyme leaves",
      "Salt and black pepper",
    ],
    steps: [
      "Melt 1 tbsp butter in a wide pan over medium-high heat. Add chanterelles in a single layer, season with salt, and cook without stirring for 2-3 minutes until golden. Stir once, cook another minute. Set aside.",
      "In a heavy-bottomed pot, melt 1 tbsp butter over medium heat. Saute onion until translucent (about 4 minutes). Add garlic, cook 30 seconds.",
      "Add rice and stir for 1-2 minutes until the grains are slightly translucent at the edges. Pour in wine and stir until absorbed.",
      "Add stock one ladle at a time, stirring frequently. Wait until each addition is mostly absorbed before adding the next. This takes about 18-20 minutes.",
      "When the rice is creamy but still has a slight bite, remove from heat. Stir in remaining butter, Parmesan, and most of the chanterelles. Season to taste.",
      "Serve topped with remaining chanterelles and fresh thyme.",
    ],
    sourceLabel: "Bon Appetit",
    sourceUrl: "https://www.bonappetit.com/recipe/mushroom-risotto",
    cookingTip:
      "Avoid soaking chanterelles, but a quick rinse under running water is fine if needed. They're less absorbent than people claim. The real trick is to dry them thoroughly on a towel afterward, then start cooking in a dry pan to evaporate any remaining moisture before adding butter.",
    prepTime: "45 min",
    servings: "4",
    tasteNote:
      "Chanterelles taste subtly peppery with a faint apricot-like sweetness. The texture is firm and meaty, almost chewy. In risotto, they add a gentle woodsy warmth that lingers. Nothing else tastes quite like them.",
  },
  {
    slug: "porcini-pappardelle",
    speciesSlug: "boletus-edulis",
    recipeName: "Porcini Pappardelle with Brown Butter and Sage",
    recipeIntro:
      "Porcini is one of the few wild mushrooms that is genuinely better than anything you can buy in a store. The flavor is deep, nutty, almost meaty. Italians have been pairing it with wide pasta and brown butter since forever, and for good reason. The brown butter amplifies the earthiness, and sage adds a savory bite that keeps it from getting too heavy.",
    ingredients: [
      "250g fresh porcini (or 40g dried, rehydrated in hot water for 30 min)",
      "400g pappardelle pasta",
      "80g unsalted butter",
      "8-10 fresh sage leaves",
      "2 cloves garlic, thinly sliced",
      "60g Pecorino Romano, grated",
      "Squeeze of lemon juice",
      "Salt, black pepper, flaky sea salt for finishing",
    ],
    steps: [
      "If using fresh porcini, slice them about 1cm thick. If dried, drain and reserve the soaking liquid (gold for sauces).",
      "Cook pappardelle in well-salted boiling water until al dente. Reserve 1 cup of pasta water before draining.",
      "While pasta cooks, melt butter in a large skillet over medium heat. Let it foam and start to turn golden brown (about 3-4 minutes). The moment it smells nutty, add sage leaves. They'll crackle and crisp in about 30 seconds.",
      "Add garlic slices and porcini to the brown butter. Saute for 3-4 minutes until mushrooms are golden at the edges.",
      "Add drained pasta to the skillet with a splash of pasta water. Toss everything together, adding more pasta water as needed until you have a silky, glossy sauce.",
      "Finish with lemon juice, Pecorino, and flaky salt. Serve immediately.",
    ],
    sourceLabel: "Serious Eats",
    sourceUrl: "https://www.seriouseats.com/porcini-mushroom-pasta",
    cookingTip:
      "If you find fresh porcini with worm holes (common in older specimens), slice them and check the tubes. A few small holes are fine; heavily infested ones should be discarded or dried at high heat to kill larvae.",
    prepTime: "30 min",
    servings: "4",
    tasteNote:
      "Porcini has the deepest, most intensely nutty flavor of any mushroom. Think roasted hazelnuts meets beef broth. The brown butter and sage amplify this into something almost overwhelmingly savory. The texture is dense and satisfying, like a well-cooked potato.",
  },
  {
    slug: "morels-cream-toast",
    speciesSlug: "morchella-esculenta",
    recipeName: "Morels in Cream Sauce on Toast",
    recipeIntro:
      "This is the dish that morel hunters have been making in cabins and kitchens across the Midwest and Pacific Northwest for generations. It is absurdly simple, almost embarrassingly so, but morels in cream on good bread is one of the peak experiences in wild food. The honeycomb texture of morels holds the cream sauce in every ridge.",
    ingredients: [
      "200g fresh morels, halved lengthwise and rinsed",
      "2 tbsp butter",
      "2 shallots, finely sliced",
      "200ml heavy cream",
      "1 tbsp dry sherry or Madeira",
      "1 tbsp fresh chives, chopped",
      "4 thick slices of sourdough, toasted",
      "Salt and white pepper",
    ],
    steps: [
      "Rinse morels quickly in cold water and pat very dry. Halve lengthwise so the insides are visible (also lets you check for bugs hiding in the honeycomb).",
      "Melt butter in a skillet over medium heat. Add shallots and cook until soft (3 minutes).",
      "Add morels and cook for 5-6 minutes, stirring occasionally, until they release their liquid and start to brown slightly.",
      "Pour in the sherry and let it reduce for 30 seconds. Add cream, bring to a gentle simmer, and cook for 3-4 minutes until the sauce thickens enough to coat a spoon.",
      "Season with salt and white pepper. Spoon generously over toasted sourdough. Top with chives.",
    ],
    sourceLabel: "New York Times Cooking",
    sourceUrl: "https://cooking.nytimes.com/recipes/morel-mushrooms",
    cookingTip:
      "Always cook morels thoroughly. They contain hydrazine compounds that break down with heat. Never eat morels raw. Crucially, verify you have true morels (Morchella), not false morels (Gyromitra esculenta), which are deadly. The test: cut one lengthwise. True morels are completely hollow from cap to stem. False morels have dense, brain-like folds inside. Start with a small portion your first time, as some people have mild reactions even to properly cooked morels.",
    prepTime: "25 min",
    servings: "4",
    tasteNote:
      "Morels taste earthy and nutty with a deep, almost smoky undertone. The honeycomb texture soaks up cream sauce, so every bite is rich and complex. People describe it as somewhere between a roasted walnut and a grilled portobello, but more refined.",
  },
  {
    slug: "lions-mane-crab-cakes",
    speciesSlug: "hericium-erinaceus",
    recipeName: "Lion's Mane 'Crab Cakes'",
    recipeIntro:
      "Lion's mane has one of the most interesting textures in the mushroom kingdom. When you shred it and saute it, the fibers pull apart like crabmeat. Seriously, the resemblance is uncanny. This recipe leans into that by making crab cakes entirely out of lion's mane. They're convincing enough to fool people who don't know what they're eating, and delicious enough that it doesn't matter if they figure it out.",
    ingredients: [
      "350g lion's mane mushroom, shredded into thin strands by hand",
      "1 egg, beaten",
      "3 tbsp mayonnaise",
      "1 tsp Dijon mustard",
      "1 tsp Old Bay seasoning",
      "1 tbsp fresh lemon juice",
      "2 green onions, thinly sliced",
      "50g panko breadcrumbs (plus more for coating)",
      "2 tbsp butter or oil for frying",
      "Lemon wedges and tartar sauce for serving",
    ],
    steps: [
      "Shred the lion's mane by pulling it apart with your hands into thin, crab-like strands. Saute in a dry pan over medium-high heat for 5-6 minutes until moisture evaporates and edges turn golden. Let cool.",
      "In a bowl, combine the cooled lion's mane with egg, mayonnaise, mustard, Old Bay, lemon juice, green onions, and panko. Mix gently (don't compress it; you want a loose texture like crab cakes).",
      "Form into 6-8 patties, about 2cm thick. If the mixture is too wet, add more panko. Lightly coat the outside in additional panko.",
      "Heat butter in a skillet over medium heat. Cook patties for 3-4 minutes per side until golden brown and crispy.",
      "Serve hot with lemon wedges and tartar sauce.",
    ],
    sourceLabel: "Food52",
    sourceUrl: "https://food52.com/recipes/lions-mane-crab-cakes",
    cookingTip:
      "Wild lion's mane grows on hardwood trees (beech, oak, maple) and looks like a white waterfall of icicles. No poisonous look-alikes exist. But make sure it's still white and firm; yellow or brown specimens are past their prime.",
    prepTime: "35 min",
    servings: "3-4",
    tasteNote:
      "Lion's mane tastes like lobster or crab, with a mild sweetness and a clean ocean-like undertone. Seriously. The shredded texture reinforces the illusion. When pan-fried with butter, the edges get crispy and the center stays tender. People who swear they don't like mushrooms love these cakes.",
  },
  {
    slug: "maitake-miso-roasted",
    speciesSlug: "grifola-frondosa",
    recipeName: "Roasted Hen of the Woods with Miso Glaze",
    recipeIntro:
      "Hen of the woods (maitake) is the mushroom that most reliably converts skeptics. It grows in enormous rosettes at the base of oak trees, and when you roast big pieces of it at high heat, the edges crisp up like chips while the center stays tender and meaty. The miso glaze here adds umami on top of umami. It's almost unfair.",
    ingredients: [
      "400g hen of the woods, torn into large pieces along natural fracture lines",
      "2 tbsp white miso paste",
      "1 tbsp rice vinegar",
      "1 tbsp maple syrup",
      "1 tbsp toasted sesame oil",
      "1 tbsp neutral oil (grapeseed or vegetable)",
      "1 tsp grated fresh ginger",
      "Sesame seeds and sliced green onion for garnish",
    ],
    steps: [
      "Preheat oven to 220C/425F. Tear the hen of the woods into large, steak-like pieces by following the natural layers. You want pieces roughly the size of your palm.",
      "Whisk together miso, rice vinegar, maple syrup, sesame oil, neutral oil, and ginger.",
      "Arrange mushroom pieces on a parchment-lined baking sheet in a single layer, frilly side up. Brush generously with the miso glaze.",
      "Roast for 20-25 minutes until the edges are deeply browned and crispy. The thin, frilly parts will get chip-like while the thick base stays juicy.",
      "Garnish with sesame seeds and green onion. Serve as a main course with rice, or as a side.",
    ],
    sourceLabel: "Epicurious",
    sourceUrl: "https://www.epicurious.com/recipes/maitake-mushrooms",
    cookingTip:
      "Hen of the woods can get massive, sometimes over 20 kg. If you find a big one, tear it into portions and store in paper bags in the fridge. It stays good for a week. Do not wash it; just brush off debris.",
    prepTime: "35 min",
    servings: "4",
    tasteNote:
      "Maitake has a deep, earthy flavor with a slight nuttiness. The roasted edges become intensely savory, almost like crispy bacon. The miso glaze adds sweetness and umami. The texture varies from crispy-thin at the edges to tender and succulent at the thick base.",
  },
  {
    slug: "black-trumpet-butter-steak",
    speciesSlug: "craterellus-cornucopioides",
    recipeName: "Black Trumpet Mushroom Butter on Steak",
    recipeIntro:
      "Black trumpets are the truffles of the poor. That's the old French saying, and it undersells them. These thin, dark, horn-shaped mushrooms have a rich, almost smoky flavor that concentrates beautifully when dried and rehydrated. Making a compound butter with them is one of the best things you can do. A pat melting over a hot steak turns a good dinner into an unreasonable one.",
    ingredients: [
      "100g fresh black trumpets (or 20g dried, rehydrated)",
      "115g unsalted butter, at room temperature",
      "1 small clove garlic, finely grated",
      "1 tsp fresh thyme, minced",
      "1/2 tsp flaky sea salt",
      "4 steaks of your choice (ribeye, strip, or filet)",
      "Freshly ground black pepper",
    ],
    steps: [
      "Clean the black trumpets by slicing lengthwise and rinsing quickly (they tend to harbor grit inside the trumpet). Pat dry thoroughly, then chop finely.",
      "Saute the chopped trumpets in a dry pan over medium heat until all moisture evaporates and they smell intensely earthy (about 5 minutes). Let cool completely.",
      "Mix the cooled mushrooms into softened butter along with garlic, thyme, and salt. Roll into a log using plastic wrap and refrigerate for at least 1 hour.",
      "Season steaks with salt and pepper. Sear in a smoking-hot cast iron pan, 3-4 minutes per side for medium-rare.",
      "Rest steaks for 5 minutes. Slice a thick round of the black trumpet butter and place on top of each steak. Let it melt.",
    ],
    sourceLabel: "Saveur",
    sourceUrl: "https://www.saveur.com/black-trumpet-mushroom-recipes",
    cookingTip:
      "Black trumpets are notoriously hard to spot on the forest floor. They grow in dark leaf litter under oaks and beeches, and they're black. Once you find one, stop and scan the ground carefully. Where there's one, there are usually dozens.",
    prepTime: "20 min (plus 1 hr chill)",
    servings: "4",
    tasteNote:
      "Black trumpets taste smoky, rich, and almost truffle-like. The French call them 'trompettes de la mort' and use them as a truffle substitute for a reason. When concentrated into butter, that smoky depth melts into the steak juices. Deeply savory.",
  },
  {
    slug: "chicken-of-the-woods-tacos",
    speciesSlug: "laetiporus-sulphureus",
    recipeName: "Chicken of the Woods Tacos with Lime Crema",
    recipeIntro:
      "Chicken of the woods gets its name honestly. The texture, when cooked right, is remarkably similar to chicken breast. Shredded and seasoned with cumin and chili, it makes some of the best mushroom tacos you'll ever eat. The trick is to use only the tender outer edges; the tough inner portions near the tree are woody and unpleasant.",
    ingredients: [
      "400g chicken of the woods, outer tender edges only, torn into strips",
      "2 tbsp olive oil",
      "1 tsp ground cumin",
      "1 tsp smoked paprika",
      "1/2 tsp chili powder",
      "Juice of 1 lime",
      "8 small corn tortillas",
      "Quick-pickled red onion (1 red onion, sliced, in lime juice + pinch of salt for 20 min)",
      "Fresh cilantro, sliced avocado",
      "Lime crema: 100ml sour cream + juice of half a lime + pinch of salt",
    ],
    steps: [
      "Tear the chicken of the woods into thin, chicken-like strips. Only use the soft, pliable edges. Discard any woody or tough portions.",
      "Heat olive oil in a skillet over medium-high heat. Add the mushroom strips and cook without stirring for 3 minutes to get a good sear. Flip and cook another 2 minutes.",
      "Add cumin, paprika, chili powder, and lime juice. Toss to coat and cook 1 more minute.",
      "Warm tortillas in a dry pan or over a gas flame.",
      "Assemble: tortilla, seasoned mushroom strips, pickled onion, avocado, cilantro, drizzle of lime crema.",
    ],
    sourceLabel: "Forager Chef (Alan Bergo)",
    sourceUrl: "https://foragerchef.com/chicken-of-the-woods-recipes/",
    cookingTip:
      "A small number of people have gastrointestinal reactions to chicken of the woods, especially when it grows on eucalyptus or conifers. Eat a small amount first if it's your first time, and always harvest from hardwood trees (oak is best).",
    prepTime: "30 min",
    servings: "4",
    tasteNote:
      "Chicken of the woods genuinely tastes like chicken. Mild, savory, slightly lemony. The texture is what sells it: firm and fibrous, with a pull-apart quality that mimics poultry breast. With cumin and smoked paprika, it's indistinguishable in a taco.",
  },
  {
    slug: "oyster-mushroom-katsu",
    speciesSlug: "pleurotus-ostreatus",
    recipeName: "Oyster Mushroom Katsu",
    recipeIntro:
      "Japanese katsu, traditionally made with pork or chicken, works surprisingly well with large oyster mushroom caps. The mushroom holds together through the breading and frying, and you end up with something that has a crispy outside and a soft, savory inside. With tonkatsu sauce, shredded cabbage, and rice, this is proper comfort food.",
    ingredients: [
      "4-6 large oyster mushroom caps (the biggest you can find)",
      "60g all-purpose flour",
      "2 eggs, beaten",
      "120g panko breadcrumbs",
      "Neutral oil for frying (about 3cm deep)",
      "Tonkatsu sauce (or mix: 2 tbsp ketchup + 2 tbsp Worcestershire + 1 tsp soy sauce + 1 tsp sugar)",
      "Shredded cabbage, steamed rice, lemon wedges",
    ],
    steps: [
      "Select the largest oyster mushroom caps. Gently press them flat between your palms to compress slightly (this helps them hold the breading).",
      "Set up a breading station: flour in one dish, beaten eggs in another, panko in a third. Season the flour with salt and pepper.",
      "Dredge each mushroom cap in flour (shake off excess), dip in egg, then press firmly into panko on both sides.",
      "Heat oil to 170C/340F in a deep pan. Fry the katsu pieces for 2-3 minutes per side until deep golden brown. Drain on a wire rack.",
      "Slice into strips, arrange over shredded cabbage with rice. Drizzle with tonkatsu sauce and serve with lemon wedges.",
    ],
    sourceLabel: "Just One Cookbook",
    sourceUrl: "https://www.justonecookbook.com/tonkatsu/",
    cookingTip:
      "Oyster mushrooms are one of the easiest wild mushrooms to identify. They grow in shelf-like clusters on dead or dying hardwood trees, have white to grey caps, and decurrent gills running down a stubby off-center stem. No deadly species exist within the Pleurotus genus. However, angel wings (Pleurocybella porrigens), a different genus, can be confused with them. Angel wings are thinner, grow on conifer wood, and have caused fatalities in Japan. Stick to hardwood-growing oysters and you're safe.",
    prepTime: "25 min",
    servings: "2-3",
    tasteNote:
      "Oyster mushrooms have a mild, slightly anise-like flavor. The taste is gentle, almost delicate, which makes them a perfect blank canvas for bold seasonings. In katsu form, the crispy panko contrasts with the silky mushroom inside. Think of a chicken nugget, but softer and more interesting.",
  },
];

export function getRecipeBySlug(slug: string): RecipeEntry | undefined {
  return RECIPES.find((r) => r.slug === slug);
}
