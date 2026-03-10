import re
from pathlib import Path

def inject_front_matter(docs_path: str) -> None:
    """Scans markdown files, extracts titles and day numbers, and injects Docusaurus front-matter."""
    base_dir = Path(docs_path)
    
    # Regex to find 'day_XX' in the filename
    day_pattern = re.compile(r'day_(\d+)')
    # Regex to find the first H1 tag (# Title)
    h1_pattern = re.compile(r'^#\s+(.+)$', re.MULTILINE)

    # Iterate recursively through all .md files in the directory
    # Using rglob is generally cleaner and safer than os.walk
    for file_path in base_dir.rglob('*.md'):
        
        # 1. Extract sidebar position from filename
        match = day_pattern.search(file_path.name)
        if not match:
            continue # Skip files that don't match the 'day_XX' convention
        
        sidebar_position = int(match.group(1))

        # 2. Read the current file content
        content = file_path.read_text(encoding='utf-8')

        # Prevent double-injection if the file already has front-matter
        if content.startswith('---'):
            print(f"Skipped: {file_path.name} (Front-matter already exists)")
            continue

        # 3. Extract the title from the H1 tag
        title_match = h1_pattern.search(content)
        title = title_match.group(1).strip() if title_match else f"Day {sidebar_position} Module"

        # 4. Construct the new file content
        front_matter = (
            "---\n"
            f"title: \"{title}\"\n"
            f"sidebar_position: {sidebar_position}\n"
            "---\n\n"
        )

        # 5. Write the updated data back to the file
        file_path.write_text(front_matter + content, encoding='utf-8')
        print(f"Updated: {file_path.name} | Position: {sidebar_position} | Title: {title}")

if __name__ == '__main__':
    # Execute the function on the docs folder
    inject_front_matter('./docs')