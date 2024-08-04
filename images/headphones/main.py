from PIL import Image
from sklearn.cluster import KMeans

def get_dominant_colors(image_path, k=3):
    image = Image.open(image_path)
    image = image.convert('RGB')
    image_data = list(image.getdata())

    kmeans = KMeans(n_clusters=k)
    kmeans.fit(image_data)

    return kmeans.cluster_centers_

dominant_colors = get_dominant_colors('noisecancellingheadphones1.jpg')
for i, color in enumerate(dominant_colors):
    print(f'Dominant color {i+1}: {color}')