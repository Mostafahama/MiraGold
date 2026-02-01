import os
from PIL import Image

image_dir = r"c:/Users/raya/Desktop/Mira Gold/assets/images"
extensions = ['.jpg', '.jpeg']

print(f"Scanning {image_dir}...")

count = 0
saved_space = 0

for filename in os.listdir(image_dir):
    if any(filename.lower().endswith(ext) for ext in extensions):
        filepath = os.path.join(image_dir, filename)
        new_filename = os.path.splitext(filename)[0] + ".webp"
        new_filepath = os.path.join(image_dir, new_filename)

        try:
            with Image.open(filepath) as img:
                # Convert to RGB if necessary (e.g. if CMYK)
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Save as WebP
                img.save(new_filepath, 'WEBP', quality=80, optimize=True)
                
                old_size = os.path.getsize(filepath)
                new_size = os.path.getsize(new_filepath)
                saved = old_size - new_size
                saved_space += saved
                
                print(f"Converted: {filename} ({old_size/1024:.1f}KB) -> {new_filename} ({new_size/1024:.1f}KB) | Saved: {saved/1024:.1f}KB")
                count += 1
        except Exception as e:
            print(f"Error converting {filename}: {e}")

print(f"\nTotal images converted: {count}")
print(f"Total space saved: {saved_space / 1024 / 1024:.2f} MB")
