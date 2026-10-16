#!/usr/bin/env python3
"""Download all candidate images, verify integrity, build contact sheet."""
import json, os, urllib.request
from PIL import Image

ASSETS = "/home/z/my-project/assets"
IMGDIR = os.path.join(ASSETS, "img")
os.makedirs(IMGDIR, exist_ok=True)

with open(os.path.join(ASSETS, "all_urls.json")) as f:
    groups = json.load(f)

urls = []
for g, arr in groups.items():
    for u in arr:
        urls.append((g, u))

print(f"Total urls: {len(urls)}")

manifest = {}
for g, u in urls:
    name = u.split("/")[-1]
    dest = os.path.join(IMGDIR, name)
    if os.path.exists(dest) and os.path.getsize(dest) > 10000:
        manifest[name] = {"group": g, "url": u}
        continue
    try:
        req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=90) as resp, open(dest, "wb") as out:
            out.write(resp.read())
        sz = os.path.getsize(dest)
        ok = sz > 10000
        print(("OK " if ok else "SMALL ") + name, sz)
        if ok:
            manifest[name] = {"group": g, "url": u}
    except Exception as e:
        print("FAIL", name, str(e)[:80])

with open(os.path.join(ASSETS, "manifest.json"), "w") as f:
    json.dump(manifest, f, indent=1)
print(f"Downloaded {len(manifest)} ok")

# Build contact sheet with filename labels
names = sorted(manifest.keys())
cols, thumb = 7, 260
rows = (len(names) + cols - 1) // cols
sheet = Image.new("RGB", (cols * thumb, rows * (thumb + 26)), "white")
from PIL import ImageDraw
draw = ImageDraw.Draw(sheet)
for i, n in enumerate(names):
    try:
        im = Image.open(os.path.join(IMGDIR, n)).convert("RGB")
        im.thumbnail((thumb - 8, thumb - 8))
        x = (i % cols) * thumb
        y = (i // cols) * (thumb + 26)
        sheet.paste(im, (x + 4, y + 4))
        draw.text((x + 6, y + thumb - 14), n[:36], fill="black")
    except Exception as e:
        print("thumb fail", n, e)
sheet.save(os.path.join(ASSETS, "contact_sheet.jpg"), quality=80)
print("Contact sheet saved", sheet.size)
