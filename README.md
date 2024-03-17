# CS433-TermProject
This file contains relevant information about how to properly install this software and how run the applications

# User's Manual

## Introduction
Authenticity Master is a web application that allows users to verify the authenticity of text, URLs, and emails using advanced AI algorithms and plagiarism detection technology.

## Requirements
- Node.js
- Python

## Installing React Application 
1. Download the code or clone the repository (i.e. `git clone`)
2. Using your terminal move into the code base
3. Installs dependencies
   - `npm install`

## Installing Python Application
1. From within the `py-app/` directory, Install the dependencies first,
    - `pip install -r dependencies.txt` or `pip3 install -r dependencies.txt`
    - If the dependencies are installed already you will see a message like `Requirement already satisfied: matplotlib in /usr/lib/python3/dist-packages (from -r dependencies.txt (line 2)) (3.3.4)`
2. Run the application
    - `python3 controller.py`

## Usage
### Running the React Web App
1. Navigate into the react web app directory
   - `cd ai-detection-webapp`
2. Start the react application
   - `npm start`
3. Open your web browser and go to `http://localhost:3000` to access the application.
4. You should see the application

### Running the Python GUI Application
1. Navigate into the python GUI directory
   - `cd py-app`
2. Start the application
   - `python3 controller.py`
3. A python GUI should appear in your screen

## Features
- AI Scan: Verify the authenticity of text using AI algorithms.
- URL Scan: Check the authenticity of a URL.
  - Example URL: `https://www.medicaloutline.com/`
- Email Scan: Verify the authenticity of an email.
  - Note that we disabled Email Reputation scans from the React application, if you want to perform this operation please do so in the python GUI





