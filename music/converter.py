import json
import html

def convert_lyrics_to_html(input_file, output_file):
    """
    Convert a JSON file of K-pop lyrics to an advanced HTML page
    
    :param input_file: Path to the input JSON file
    :param output_file: Path to the output HTML file
    """
    # Read the JSON file
    with open(input_file, 'r', encoding='utf-8') as file:
        lyrics_data = json.load(file)

    # Start HTML generation
    html_parts = [
        '<!DOCTYPE html>',
        '<html lang="ko">',
        '<head>',
        '    <meta charset="UTF-8">',
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '    <title>K-Pop Lyrics Learning</title>',
        '    <style>',
        '        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }',
        '    .song-title { text-align: center; color: #2c3e50; margin-bottom: 15px; }',
        '    .song-info { text-align: center; background-color: #f4f7f6; padding: 15px; margin-bottom: 20px; border-radius: 8px; }',
        '    .song-info-item { margin: 5px 0; color: #34495e; }',
        '    .lyrics-container { margin-top: 20px; }',
        '    .lyric-line { ',
        '        position: relative; ',
        '        cursor: pointer; ',
        '        padding: 10px; ',
        '        transition: background-color 0.3s; ',
        '        border-bottom: 1px solid #ecf0f1; ',
        '    }',
        '    .lyric-line:hover { background-color: #f1f4f6; }',
        '    .lyric-line::after { ',
        '        content: "Click to expand"; ',
        '        position: absolute; ',
        '        right: 10px; ',
        '        top: 50%; ',
        '        transform: translateY(-50%); ',
        '        color: #3498db; ',
        '        opacity: 0; ',
        '        transition: opacity 0.3s; ',
        '    }',
        '    .lyric-line:hover::after { opacity: 1; }',
        '    .lyric-details { ',
        '        display: none; ',
        '        background-color: #f4f7f6; ',
        '        padding: 15px; ',
        '        margin-top: 10px; ',
        '        border-radius: 8px; ',
        '    }',
        '    .lyric-details.active { display: block; }',
        '    .section-title { color: #2980b9; border-bottom: 2px solid #3498db; padding-bottom: 5px; margin-bottom: 10px; }',
        '    .section-content { color: #2c3e50; }',
        '    .pronunciation { color: #16a085; }',
        '    .translation { color: #27ae60; }',
        '    .grammar { color: #d35400; }',
        '    .background { color: #7f8c8d; font-style: italic; }',
        '    </style>',
        '</head>',
        '<body>'
    ]

    # Add song title
    if 'song_title' in lyrics_data:
        html_parts.append(f'    <h1 class="song-title">{html.escape(lyrics_data["song_title"])}</h1>')

    # Add song information section
    html_parts.append('    <div class="song-info">')
    song_info_items = [
        'singer', 'album', 'year', 'achievements', 
        'additional_info', 'personal_feedback'
    ]
    
    for item in song_info_items:
        if item in lyrics_data:
            display_name = ' '.join(word.capitalize() for word in item.split('_'))
            html_parts.append(f'        <div class="song-info-item"><strong>{display_name}:</strong> {html.escape(lyrics_data[item])}</div>')
    
    html_parts.append('    </div>')

    # Start lyrics container
    html_parts.append('    <div class="lyrics-container">')

    # Process each lyric section
    for index, section in enumerate(lyrics_data.get('lyrics', [])):
        # Lyric line
        if 'lyric' in section:
            html_parts.append(f'        <div class="lyric-line" data-index="{index}">')
            html_parts.append(f'            {html.escape(section["lyric"])}')
            html_parts.append('        </div>')
            
            # Lyric details (hidden by default)
            html_parts.append(f'        <div class="lyric-details" data-index="{index}">')
            
            # Additional sections
            sections_to_add = [
                ('pronunciation', 'Pronunciation'),
                ('translation', 'Translation'),
                ('grammar', 'Grammar Analysis'),
                ('background', 'Background'),
                ('practice', 'Practice')
            ]
            
            for key, display_name in sections_to_add:
                if key in section:
                    html_parts.append(f'            <div class="{key}">')
                    html_parts.append(f'                <h3 class="section-title">{display_name}</h3>')
                    html_parts.append(f'                <div class="section-content">{html.escape(section[key])}</div>')
                    html_parts.append('            </div>')
            
            html_parts.append('        </div>')

    # Close lyrics container
    html_parts.append('    </div>')

    # Add JavaScript for interactivity
    html_parts.extend([
        '    <script>',
        '    document.querySelectorAll(".lyric-line").forEach(line => {',
        '        line.addEventListener("click", function() {',
        '            const index = this.dataset.index;',
        '            const details = document.querySelector(`.lyric-details[data-index="${index}"]`);',
        '            details.classList.toggle("active");',
        '        });',
        '    });',
        '    </script>',
        '</body>',
        '</html>'
    ])

    # Write to output file
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write('\n'.join(html_parts))
    
    print(f"HTML file generated: {output_file}")

# Run the conversion
if __name__ == "__main__":
    convert_lyrics_to_html('lyrics.json', 'index.html')