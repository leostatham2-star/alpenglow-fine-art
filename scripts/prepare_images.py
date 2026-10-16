#!/usr/bin/env python3
"""Copy every image referenced by src/lib/photos.ts from assets/img/ to public/images/
so the site no longer depends on the external CDN. Verifies all files exist first."""
import re
import shutil
from pathlib import Path

ROOT = Path("/home/z/my-project")
PHOTOS_TS = ROOT / "src/lib/photos.ts"
SRC_DIR = ROOT / "assets/img"
DEST_DIR = ROOT / "public/images"

content = PHOTOS_TS.read_text()
# Match filenames used in template literals like ${CDN}/xxxxxxxx.jpg
files = sorted(set(re.findall(r"\$\{CDN\}/([A-Za-z0-9._-]+)", content)))
print(f"Found {len(files)} referenced image files")

DEST_DIR.mkdir(parents=True, exist_ok=True)

missing = []
copied = 0
for name in files:
    src = SRC_DIR / name
    dst = DEST_DIR / name
    if not src.exists():
        missing.append(name)
        continue
    if not dst.exists():
        shutil.copy2(src, dst)
        copied += 1

print(f"Copied {copied} new files into public/images")
print(f"Already present: {len(files) - copied - len(missing)}")
print(f"Missing from assets/img: {missing if missing else 'NONE - all good'}")
