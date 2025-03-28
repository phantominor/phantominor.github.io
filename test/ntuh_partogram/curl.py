import requests

def download_html(url, output_file='downloaded_page.html'):
    try:
        # Create a session to maintain cookies and headers
        session = requests.Session()
        
        # Set headers to mimic a browser request
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        }
        
        # Parameters from the URL (you might need to adjust these)
        params = {
            'SESSION': 'CAA84E81EFEA874CFF9E8144878E8FE8C4',
            'PatClass': 'I',
            'AccountIDSE': '25T02055871',
            'PersonID': 'F228209287',
            'Hosp': 'T0',
            'Seed': '142035',
            'HospCode': 'T0',
            'DepCode': 'OBGY',
            'TableSeqNo': '25'
        }
        
        # Send GET request
        response = session.get(url, headers=headers, params=params)
        
        # Raise an exception for bad status codes
        response.raise_for_status()
        
        # Write the content to a file
        with open(output_file, 'w', encoding='utf-8') as file:
            file.write(response.text)
        
        print(f"Successfully downloaded HTML to {output_file}")
        return response.text
    
    except requests.RequestException as e:
        print(f"Error downloading the HTML file: {e}")
        return None

# Usage
url = 'https://rhisaw.ntuh.gov.tw/WebApplication/WebEforms/WriteEforms.aspx?SESSION=CAA84E81EFEA874CFF9E8144878E8FE8C4&PatClass=I&AccountIDSE=25T02055871&PersonID=F228209287&Hosp=T0&Seed=142035&HospCode=T0&DepCode=OBGY&TableSeqNo=25'
downloaded_content = download_html(url)