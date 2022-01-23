import os
import requests

HOST = "https://api.unsplash.com/photos/random"

params = {
    "count": 24,
    "orientation": "squarish"
}

headers = {
    "Accept": "application/json",
    "Authorization": f"Client-ID {os.environ.get('UNSPLASHAPIKEY')}"
}

try:
    response = requests.get(HOST, params=params, headers=headers)
    data = response.json()

    for idx, photo in enumerate(data):
        img_url = photo["links"]["download"]
        img = requests.get(img_url)
        print(f"Saving {idx + 1}: {img_url} as JPEG")
        with open(f"../../../frontend/img/large/unsplash/img{idx}.jpg", "wb") as file:
            file.write(img.content)
except requests.exceptions.HTTPError as err:
    print(f"Error fetching images: {err.response.status_code}")
