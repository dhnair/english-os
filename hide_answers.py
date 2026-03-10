from pathlib import Path

def hide_answer_keys(answers_path: str) -> None:
    """Injects 'draft: true' into the front-matter of all answer key markdown files."""
    base_dir = Path(answers_path)
    
    for file_path in base_dir.rglob('*.md'):
        content = file_path.read_text(encoding='utf-8')
        
        # Skip if it's already a draft to prevent duplicates
        if 'draft: true' in content:
            print(f"Skipped: {file_path.name} (Already a draft)")
            continue
            
        # Inject draft: true immediately after the first ---
        new_content = content.replace('---\n', '---\ndraft: true\n', 1)
        
        # Write it back to the file
        file_path.write_text(new_content, encoding='utf-8')
        print(f"Secured: {file_path.name}")

if __name__ == '__main__':
    # Target only the answers directory
    hide_answer_keys('./docs/answers')