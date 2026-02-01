import os
from PIL import Image

def optimize_images(root_dir, max_width=1200, quality=80):
    print(f"Starting optimization in: {root_dir}")
    count = 0
    saved_space = 0
    
    extensions = ('.jpg', '.jpeg', '.png')
    
    for subdir, dirs, files in os.walk(root_dir):
        for filename in files:
            if filename.lower().endswith(extensions):
                filepath = os.path.join(subdir, filename)
                
                # Create WebP path
                base_name = os.path.splitext(filename)[0]
                webp_filename = f"{base_name}.webp"
                webp_filepath = os.path.join(subdir, webp_filename)
                
                try:
                    with Image.open(filepath) as img:
                        # Convert to RGB if necessary
                        if img.mode in ('RGBA', 'P'):
                            img = img.convert('RGB')
                        
                        # Resize if too large
                        original_size = img.size
                        if img.width > max_width:
                            ratio = max_width / float(img.width)
                            new_height = int(float(img.height) * float(ratio))
                            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                            print(f"Resized: {filename} from {original_size} to {img.size}")

                        # Save as WebP
                        img.save(webp_filepath, 'WEBP', quality=quality, optimize=True)
                        
                        old_size = os.path.getsize(filepath)
                        new_size = os.path.getsize(webp_filepath)
                        saved = old_size - new_size
                        saved_space += saved
                        
                        print(f"Converted: {filepath} ({old_size/1024:.1f}KB) -> {webp_filename} ({new_size/1024:.1f}KB) | Saved: {saved/1024:.1f}KB")
                        count += 1
                        
                        # Optionally remove the old file to save space in the repo
                        # os.remove(filepath)
                        
                except Exception as e:
                    print(f"Error processing {filename}: {e}")

    print(f"\nTotal images processed: {count}")
    print(f"Total space saved: {saved_space / 1024 / 1024:.2f} MB")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    images_path = os.path.join(current_dir, "assets", "images")
    if os.path.exists(images_path):
        optimize_images(images_path)
    else:
        print(f"Error: {images_path} not found.")
