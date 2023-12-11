# COSI 116A GRAD 2 webpage link:
https://cosi116a-brandeis-infovis-fall23.github.io/cosi-116a-final-project-code-Lyhq1996/

# COSI 116A Final Project: Graduate Group 2

- Overview:
This repository contains the final project for Project Team Grad Group 2 in the COSI 116A: Information Visualization course at Brandeis University. The project focuses on exploring U.S. housing affordability, with a shift to a more focused study on homeless populations and rent growth correlations. The team aims to offer crucial insights into housing inequality and contribute meaningfully to solutions for challenges faced by the homeless population.

- Visualization:
The visualization includes line charts depicting the trend of Median Monthly Rent and Homeless Count in the New England area for 5 years. Additionally, a map representation illustrates the spatial distribution of Median Monthly Rent, offering a visual gradient to convey rent variations across the region. Interaction (brushing and linking)among different charts was implemented to give audience a clearer idea of the pattern/relationship among different data.

- Interaction:
There are three graphs on the web page—two line charts depicting the median monthly rent and homeless numbers in all New England states from 2017 to 2021, and a map providing a snapshot of monthly rent and homeless statistics in different New England states for the year 2021. Users have the capability to click on any line in either of the two line charts to view the exact data points and corresponding results in another line chart. This feature enhances the user's understanding of the correlation between housing rent and homelessness. Additionally, for the map, a gradient color is employed to indicate the expense of rent. When users hover over a specific state, detailed statistics about rent and the homeless population will appear.

- Conclusion:
The project concludes with insights into the impact of the pandemic on homelessness, the rise in family homelessness, and the role of high housing costs in the New England area. Future directions may involve investing in more affordable housing options to prevent further displacement.

- Acknowledgments:
The project leverages various resources, including D3: Data-Driven Documents by Mike Bostock, a Pure CSS responsive "Fork me on GitHub" ribbon by Chris Heilmann, and code for a US State Map by NPashaP.
## Setup

**Under no circumstances should you be editing files via the GitHub user interface.** Do all your edits locally after cloning the repository.

1. Clone this repository to your local machine. E.g., in your terminal / command prompt `CD` to where you want this the folder for this activity to be. Then run `git clone <YOUR_REPO_URL>`

1. In `README.md` update the URL above to point to your GitHub pages website.

1. `CD` or open a terminal / command prompt window into the cloned folder.

1. Start a simple python webserver. E.g., one of these commands:
    * `python -m http.server 8000`
    * `python3 -m http.server 8000`
    * `py -m http.server 8000`
    If you are using Python 2 you will need to use `python -m SimpleHTTPServer 8000` instead, but please switch to Python 3 as [Python 2 was sunset on 2020.01.01](https://www.python.org/doc/sunset-python-2/).

1. Wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`

1. Now open your web browser (Firefox or Chrome) and navigate to the URL: http://localhost:8000

## Root Files
* `README.md` is this explanatory file for the repo.

* `index.html` contains the main website content. It includes comments surrounded by `<!--` and `-->` to help guide you through making your edits.

* `style.css` contains the CSS.

* `LICENCE` is your source code license.

## Folders
Each folder has an explanatory `README.md` file

* `data` is where you will put your data files.

* `favicons` contains the favicons for the course projects. You shouldn't change anything here.

* `files` will contain the slides (PDF) and video (MP4).

* `images` will contain your screenshots, diagrams, and photos.

* `js` will contain all JavaScript files for different visualizations (two line charts and a map in our case) and all the interaction logic(brush and linking, hover, etc)
  
* `lib` will contain any JavaScript library we use. It currently includes D3.

## Workflow

- Branching Strategy: Each team member creates their feature branch for development based on the main master branch. For example, using a naming convention like feature/your-feature-name.

- Development: Team members work independently on their feature branches, making commits and pushing changes to their respective branches.

- Pull Requests: When a feature is ready, the team member creates a pull request (PR) from their feature branch to the master branch. The PR includes a summary of changes and any relevant details.

- Review and Merge: The project manager or another team member reviews the PR, ensuring code quality and functionality. If everything is satisfactory, the changes are merged into the master branch. If conflicts arise, they are resolved in the feature branch before merging. This process helps maintain a clean and stable master branch while allowing parallel development.

## Grading

Make sure to check these aspects of your work, which are important for every submission:

* Coding was done properly:
    * Your code was regularly committed and not edited via the GitHub user interface online.
    * You have clear, commented, and validated code.
    * Your web page loads properly and looks as expected in the latest Firefox and Chrome browsers.
    * Any code from other sources (modified or copied straight) is acknowledged.

* Your visualization works as required:
    * Styles are consistent across views.
    * None of the visualizations change size or move on the screen as you interact with them.
    
