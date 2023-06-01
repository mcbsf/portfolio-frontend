# Portfolio Repository

Welcome to my React portfolio repository! This repository contains the code for my portfolio website, built using React. It showcases my professional experience, academic background, projects, scientific research, and volunteering work. Feel free to explore the code and customize it for your own portfolio needs.

## Installation

To install and run the portfolio locally, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone git@github.com:mcbsf/portfolio-frontend.git
   ```

2. Navigate to the app/ directory:

    ```bash
   cd portfolio-frontend/app/
   ```

3. Install the dependencies using npm or yarn:


    ```bash
    npm install
    # or
    yarn install
   ```
4. Start the development server::

    ```bash
    npm start
    # or
    yarn start

    ```

This will start the development server and open the portfolio in your default browser at `http://localhost:3000`.


## Usage Guide

Once you have the portfolio running locally, you can customize it with your own content and styling. Here are a few key files and directories to get started:

- `src/assets/`: Place your own images and other assets in this directory.
- `src/portfolio/`: Customize the components in this directory to showcase your own experiences, projects, research, and volunteering work.
- `src/header/`: Modify the header component files to reflect your own branding and navigation structure.
- `public/index.html`: Update this file to modify the page title and other meta tags.

Feel free to explore the codebase and make any necessary changes to adapt it to your specific needs.

It is not mobile responsive yet. Also not responsive to aspect ratio 4:3.

## Folder Structure

Here is the folder structure of this repository:

```
app/
├── public/
├── src/
│    ├── assets/
│    ├── header/
│    ├── portfolio/
│    │   ├── academic-experiences/
│    │   ├── professional-experiences/
│    │   ├── projects/
│    │   ├── scientific-research/
│    │   └── volunteerings/
│    ├── index.js
│    ├── index.css
│    ├── logo.svg
│    ├── reportWebVitals.js
│    └── setupTests.js
deploy/
└── prod/
    └──sensitive_data/
```
The main folders and files in the repository are as follows:

- **app/:** This is the root directory of the React application.
- **public/:** This directory contains public files such as the favicon, index.html, logo images, and the robots.txt file.
- **src/:** This directory contains the source code for the React components and other related files.
- **assets/:** This directory contains assets used in the portfolio, such as images.
- **header/:** This directory contains the header component files.
- **portfolio/:** This directory contains the main components for the portfolio sections, including academic experiences, professional experiences, projects, scientific research, and volunteerings. These sections showcase different aspects of the portfolio owner's work.
- **deploy/**: This directory contains deployment-related files and configurations specific to the production environment. It includes Terraform files for infrastructure provisioning and sensitive data files.

Please note that the actual files are excluded from this description for brevity.

## Contribution

I welcome contributions to enhance the functionality and features of this portfolio repository. If you have any suggestions, bug fixes, or improvements, feel free to open a pull request. Please ensure that your contributions align with the goals and style of this project.

## License

This portfolio repository is licensed under the [MIT License](LICENSE). You are free to modify and use the code for personal and commercial projects.

## Questions or Feedback?

If you have any questions or feedback regarding this repository or need any assistance, please feel free to reach out to me. I hope you find this portfolio repository helpful and informative!
