
from PyPDF2 import PdfReader

# def extract_pdf():
reader = PdfReader('uploads/uploaded_file.pdf')
for i in range(len(reader.pages)):
    page = reader.pages[i]
    text = page.extract_text()
    print(text)
        # return text
