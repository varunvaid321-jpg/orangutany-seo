#!/usr/bin/env python3
"""
Regenerate the equirectangular basemap from Natural Earth 110m data.
This produces a true PlateCarree (equirectangular) world map that aligns
with GBIF occurrence density tiles at EPSG:4326.

IMPORTANT: Do NOT use tile.gbif.org/omt tiles as basemap — those use
Mercator-style rendering and misalign with EPSG:4326 occurrence tiles.

Usage: python3 scripts/regen-basemap.py
"""

import urllib.request, zipfile, os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images" / "species" / "_basemap.png"
TMP = Path("/tmp/ne_countries")

def fetch(url, dest):
    print(f"Downloading {url}...")
    req = urllib.request.Request(url, headers={"User-Agent": "OrangutanyBot/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    with open(dest, "wb") as f:
        f.write(data)
    return dest

def main():
    TMP.mkdir(exist_ok=True)
    zip_path = TMP / "ne_110m.zip"
    shp_url = "https://naciscdn.org/naturalearth/110m/cultural/ne_110m_admin_0_countries.zip"

    if not (TMP / "ne_110m_admin_0_countries.shp").exists():
        fetch(shp_url, zip_path)
        with zipfile.ZipFile(zip_path) as z:
            z.extractall(TMP)
        print("Extracted shapefiles")

    try:
        import shapefile
    except ImportError:
        os.system("pip3 install pyshp -q")
        import shapefile

    try:
        import matplotlib
        matplotlib.use('Agg')
        import matplotlib.pyplot as plt
    except ImportError:
        os.system("pip3 install matplotlib -q")
        import matplotlib
        matplotlib.use('Agg')
        import matplotlib.pyplot as plt

    from PIL import Image

    sf = shapefile.Reader(str(TMP / "ne_110m_admin_0_countries.shp"))
    fig, ax = plt.subplots(1, 1, figsize=(20.48, 10.24), dpi=100)
    fig.patch.set_facecolor('#0d0d0d')
    ax.set_facecolor('#0d0d0d')
    ax.set_xlim(-180, 180)
    ax.set_ylim(-90, 90)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.margins(0)

    for shape in sf.shapes():
        if shape.shapeType == 5:
            parts = list(shape.parts) + [len(shape.points)]
            for i in range(len(parts) - 1):
                pts = shape.points[parts[i]:parts[i+1]]
                if len(pts) > 2:
                    x, y = zip(*pts)
                    ax.fill(x, y, color='#2a2a2a', linewidth=0, edgecolor='none')

    plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
    tmp_out = "/tmp/basemap_raw.png"
    fig.savefig(tmp_out, dpi=100, bbox_inches='tight', pad_inches=0, facecolor='#0d0d0d')
    plt.close()

    img = Image.open(tmp_out).convert('RGBA')
    img = img.resize((2048, 1024), Image.LANCZOS)
    img.save(OUT)
    print(f"Saved: {OUT} ({OUT.stat().st_size} bytes, {img.size})")

if __name__ == "__main__":
    main()
