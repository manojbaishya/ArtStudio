import os
from PIL import Image

rootdir = "../../../frontend/assets/img/large/unsplash/"
savedir = "../../../frontend/assets/img/preview/unsplash/"

for filename in os.listdir(rootdir):
    if filename.endswith(".jpg"):
        print(f"Resizing {filename}.. ", end="")
        Image.open(os.path.join(rootdir, filename)).resize((400, 400)).save(os.path.join(savedir, filename))
        print("Done!")
    else:
        continue
