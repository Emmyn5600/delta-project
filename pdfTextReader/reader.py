import PyPDF2

def extract_text_pypdf2(filename):
    with open(filename, 'rb') as f:
        reader = PyPDF2.PdfFileReader(f)
        text = ''
        for page in reader.pages:
            text += page.extractText()
    return text
