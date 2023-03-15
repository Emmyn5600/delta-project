import PyPDF2
import sys

def extract_text(filename):
    with open(filename, 'rb') as f:
        reader = PyPDF2.PdfFileReader(f)
        text = ''
        for page in reader.pages:
            text += page.extractText()
    return text

text = extract_text(sys.argv[1])
print(text)
