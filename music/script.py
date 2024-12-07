import re
import html

class LyricsPageGenerator:
    def __init__(self, input_file, output_file='index.html'):
        """
        Initialize the generator with input and output file paths
        
        :param input_file: Path to the input text file
        :param output_file: Path to the output HTML file
        """
        self.input_file = input_file
        self.output_file = output_file

    def parse_content(self):
        """
        Parse the input file into structured content
        
        :return: List of content sections
        """
        with open(self.input_file, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Split content into sections
        sections = re.split(r'\n\n', content.strip())
        
        parsed_content = []
        current_section = {}
        
        for section in sections:
            lines = section.split('\n')
            
            # Determine section type based on first line
            if lines[0].startswith('"') and lines[0].endswith('"'):
                # Lyric line
                current_section = {
                    'type': 'lyric',
                    'text': lines[0].strip('"')
                }
                parsed_content.append(current_section)
            
            elif any(key in lines[0].lower() for key in ['pronunciation', 'translation', 'grammar', 'practice', 'background', 'motivation']):
                # Additional information section
                section_type = lines[0].lower()
                current_section[section_type] = '\n'.join(lines[1:]).strip()
        
        return parsed_content

    def generate_html(self):
        """
        Generate HTML from parsed content
        
        :return: Formatted HTML string
        """
        content = self.parse_content()
        
        html_parts = [
            '<!DOCTYPE html>',
            '<html lang="ko">',
            '<head>',
            '    <meta charset="UTF-8">',
            '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
            '    <title>K-Pop Lyrics Learning</title>',
            '    <style>',
            '        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }',
            '        .lyric { font-size: 1.5em; font-weight: bold; color: #333; margin: 30px 0 15px; }',
            '        .section { background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin-bottom: 15px; }',
            '        .pronunciation { color: #0066cc; }',
            '        .translation { color: #009900; }',
            '        .grammar { color: #cc6600; }',
            '        .practice { color: #660066; }',
            '        .background { color: #666; font-style: italic; }',
            '    </style>',
            '</head>',
            '<body>',
            '    <h1>K-Pop Lyrics Learning</h1>'
        ]
        
        for item in content:
            # Lyric
            html_parts.append(f'    <div class="lyric">{html.escape(item["text"])}</div>')
            
            # Additional sections
            section_classes = {
                'pronunciation': 'pronunciation',
                'translation': 'translation',
                'grammar': 'grammar',
                'practice': 'practice',
                'background': 'background',
                'motivation': 'background'
            }
            
            for section_type, section_class in section_classes.items():
                if section_type in item:
                    escaped_content = html.escape(item[section_type])
                    html_parts.append(f'    <div class="section {section_class}">')
                    html_parts.append(f'        <h3>{section_type.capitalize()}</h3>')
                    html_parts.append(f'        <p>{escaped_content}</p>')
                    html_parts.append('    </div>')
        
        html_parts.extend([
            '</body>',
            '</html>'
        ])
        
        return '\n'.join(html_parts)

    def save_html(self):
        """
        Save generated HTML to output file
        """
        html_content = self.generate_html()
        with open(self.output_file, 'w', encoding='utf-8') as file:
            file.write(html_content)
        print(f"HTML file generated: {self.output_file}")

# Example usage
if __name__ == "__main__":
    generator = LyricsPageGenerator('input.txt', 'index.html')
    generator.save_html()


generator = LyricsPageGenerator('input.txt', 'index.html')
generator.save_html()

# Sample input.txt format:
"""
"바람에 나풀거리는 꽃잎처럼"
pronunciation
ba ra me, na pul goe ri neun, ggo nib choe roem
translation
Like a flower petal fluttering in the wind
grammar
꽃잎 (ggo nib) involves special pronunciation rules

"다음 가사 라인"
pronunciation
pronunciation details here
background
interesting background about this lyric line
"""

