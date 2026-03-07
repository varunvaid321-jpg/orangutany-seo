import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const SPECIES_DIR = '/Users/varunvaid/orangutany-seo/data/species';
const IMAGES_DIR = '/Users/varunvaid/orangutany-seo/public/images/species';

const speciesFiles = fs.readdirSync(SPECIES_DIR).filter(f => f.endsWith('.ts'));
const manifest = {};

for (const file of speciesFiles) {
  const slug = file.replace('.ts', '');
  const imgDir = path.join(IMAGES_DIR, slug);

  if (!fs.existsSync(imgDir) || !fs.statSync(imgDir).isDirectory()) continue;

  // Parse the .ts file to extract images and identificationImages
  const content = fs.readFileSync(path.join(SPECIES_DIR, file), 'utf8');

  // Extract images array
  const images = [];
  const imagesMatch = content.match(/images:\s*\[([\s\S]*?)\],\s*(?:\n\s*identificationImages|\n\s*\})/);
  if (imagesMatch) {
    const imagesBlock = imagesMatch[1];
    const imgEntries = imagesBlock.split(/\},\s*\{/).map(s => s.replace(/^\s*\{/, '').replace(/\}\s*$/, ''));
    for (const entry of imgEntries) {
      const getField = (name) => {
        const m = entry.match(new RegExp(`${name}:\\s*"([^"]*?)"`)) || entry.match(new RegExp(`${name}:\\s*'([^']*?)'`));
        return m ? m[1] : '';
      };
      const filename = getField('filename');
      if (filename) {
        images.push({
          filename,
          alt: getField('alt'),
          source: getField('source'),
          sourceUrl: getField('sourceUrl'),
          author: getField('author'),
          license: getField('license'),
          licenseUrl: getField('licenseUrl'),
        });
      }
    }
  }

  // Extract identificationImages
  const idImages = {};
  const idMatch = content.match(/identificationImages:\s*\{([\s\S]*?)\}/);
  if (idMatch) {
    for (const key of ['cap', 'gills', 'stem', 'sporePrint']) {
      const m = idMatch[1].match(new RegExp(`${key}:\\s*"([^"]+)"`));
      if (m) idImages[key] = m[1];
    }
  }

  // Build filename->image data lookup
  const imgLookup = {};
  for (const img of images) {
    imgLookup[img.filename] = img;
  }

  // Get actual files on disk
  const diskFiles = fs.readdirSync(imgDir).filter(f => f !== 'distribution-map.png' && !fs.statSync(path.join(imgDir, f)).isDirectory());

  const entries = [];
  let counter = 1;

  for (const diskFile of diskFiles) {
    const filePath = path.join(imgDir, diskFile);
    const stat = fs.statSync(filePath);
    const imgData = imgLookup[diskFile] || {};

    const isHero = images.length > 0 && images[0].filename === diskFile;
    const isLookalike = diskFile.startsWith('lookalike-');

    const imageClass = [];
    if (isHero) imageClass.push('hero');
    imageClass.push('gallery_general');

    const showsFeatures = [];
    const sectionRelevance = { hero: isHero, cap: false, gills: false, stem: false, habitat_context: false };

    if (idImages.cap === diskFile) { showsFeatures.push('cap_top'); sectionRelevance.cap = true; }
    if (idImages.gills === diskFile) { showsFeatures.push('gills'); sectionRelevance.gills = true; }
    if (idImages.stem === diskFile) { showsFeatures.push('stem'); sectionRelevance.stem = true; }
    if (idImages.sporePrint === diskFile) { showsFeatures.push('spore_print'); }

    // Default features based on filename patterns
    if (showsFeatures.length === 0 && !isLookalike) {
      if (diskFile.includes('cap')) showsFeatures.push('cap_top');
      else if (diskFile.includes('gill')) showsFeatures.push('gills');
      else if (diskFile.includes('stem')) showsFeatures.push('stem');
      else showsFeatures.push('cap_top');
    }
    if (isLookalike) showsFeatures.push('lookalike');

    const imageId = `${slug}-${isHero ? 'hero' : isLookalike ? 'lookalike' : 'gallery'}-${String(counter).padStart(3, '0')}`;
    counter++;

    entries.push({
      imageId,
      speciesSlug: slug,
      source: (imgData.source || 'wikimedia').toLowerCase().includes('wiki') ? 'wikimedia' : (imgData.source || 'unknown'),
      sourcePageUrl: imgData.sourceUrl || '',
      fileUrl: '',
      localPath: `/images/species/${slug}/${diskFile}`,
      creator: imgData.author || 'Unknown',
      license: imgData.license || 'Unknown',
      licenseUrl: imgData.licenseUrl || '',
      attributionText: `Photo by ${imgData.author || 'Unknown'}`,
      width: 0,
      height: 0,
      orientation: 'unknown',
      imageClass,
      showsFeatures,
      speciesConfidence: 'high',
      sectionRelevance,
      cropPolicy: 'contain',
      visualReviewStatus: 'approved',
      approved: true,
    });
  }

  if (entries.length > 0) {
    manifest[slug] = entries;
  }
}

const outPath = '/Users/varunvaid/orangutany-seo/data/images/image-manifest.json';
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2));
console.log(`Manifest written with ${Object.keys(manifest).length} species and ${Object.values(manifest).reduce((s, a) => s + a.length, 0)} total images.`);
