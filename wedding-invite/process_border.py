import sys
import math
try:
    from PIL import Image
except ImportError:
    print("PIL not installed. Installing Pillow...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def process_image(input_path, output_path):
    print("Opening image...")
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    
    for item in data:
        r, g, b, a = item
        
        # Calculate HSV
        # we want to key out green/teal
        # A simple method: if Green is dominant over Red by a certain margin, or if it's a dark color
        
        # Instead, let's keep only pixels that have higher Red and Green than Blue (yellowish/golden)
        # The background is dark green/teal, so R is low, G is medium, B is medium (e.g. 30, 70, 58)
        # Gold is high R, high G, low B (e.g. 243, 236, 186 or 200, 180, 100)
        
        if r > 100 and g > 100 and r > b + 20 and g > b + 20:
            # It's golden/yellow, keep it opaque
            new_data.append((r, g, b, a))
        else:
            # Check if it's anti-aliased edge (mix of gold and green)
            # We can use an alpha gradient based on how "gold" it is
            goldness = max(0, r - b) + max(0, g - b)
            # If goldness is high, more opaque
            alpha = min(255, max(0, goldness - 20))
            if alpha < 50:
                alpha = 0
            new_data.append((r, g, b, alpha))
            
    img.putdata(new_data)
    # Save as PNG first
    png_path = output_path.replace('.avif', '.png')
    img.save(png_path, "PNG")
    print(f"Saved {png_path}")

process_image("public/timeline.png", "public/timeline.avif")
print("Done")
