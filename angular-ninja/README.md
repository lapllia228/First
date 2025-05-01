# Image-to-Text OCR Uploader (Angular)

## Overview

Image-to-Text OCR Uploader is a  Angular web application that allows users to upload an image (JPEG/PNG) and extract text from it using the API Ninjas OCR API.

This project demonstrates how to validate files, preview images, and integrate external APIs in a clean and responsive UI.

---

## Features

- Upload images via file input
- Validation for file type and size (JPEG/PNG, max 2MB)
- Image preview using FileReader
- OCR API integration for text recognition
- Copy recognized text to clipboard
- Clear and user-friendly error handling

---

## Technologies Used

- Angular 17+ with standalone components
- TypeScript
- RxJS
- HTML/CSS
- API Ninjas OCR API
- Clipboard API

---

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/lapllia228/First.git
cd First
Install dependencies:


npm install
Run the development server:


ng serve
Visit http://localhost:4200 in your browser.

Usage
Click the file input and select an image (JPG/PNG, ≤2MB)

Image preview will appear

Text will be extracted via OCR API and shown below

Click the Copy button to copy the text to clipboard

Sample API Response
[
  {
    "text": "Angular is a platform for building web applications..."
  }
]

## Development Notes

While working on this project, I encountered and resolved several issues that helped deepen my understanding of Angular and Git workflows:

1. Submodule Conflicts
   At some point, I accidentally turned a folder into a Git submodule. This caused problems with pushing and syncing the repository. To fix it, I had to remove the inner `.git` folder, clean up Git submodule references, and re-add the folder as a regular directory.

2. Standalone HTTP Client Configuration in Angular  
   Since I used Angular standalone components, I had to configure HTTP services using `provideHttpClient()` instead of the deprecated `HttpClientModule`. I initially forgot this, which resulted in `NullInjectorError` when injecting `HttpClient`.

3. Context Loss in FileReader Callback
   While processing image uploads, I ran into an issue where `this` became undefined inside a `FileReader.onload` function. Switching to an arrow function fixed the context and gave me access to component properties.

4. Incorrect baseHref for GitHub Pages
   I had to manually set the `baseHref` in `angular.json` to match the repository name (e.g., `/First/`) in order for routing to work correctly on GitHub Pages.

5. Deployment Issues with angular-cli-ghpages 
   Deployment initially failed due to incorrect output folder and missing remote repo config. After correcting the `--dir` parameter and verifying the Git remote, I was able to publish the build to GitHub Pages successfully.

These challenges were frustrating, but they ultimately helped me understand how to better structure Angular projects and manage Git integration.