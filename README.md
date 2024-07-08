
Dollar CLI
==========

A simple command line tool to check the current dollar value from a specified website.

Description
-----------

This project is a Node.js command line application that fetches the current dollar value from the website [Dólar Hoje](https://dolarhoje.com/). It parses the website's HTML to extract the dollar value and prints it to the console.

Installation
------------

1.  Clone the repository:
    
    ```bash
    git clone https://github.com/yourusername/dollar-cli.git
    ```
    
2.  Navigate to the project directory:
    
    ```bash
    cd dollar-cli
    ````

3.  Install the dependencies:
    
    ```bash    
    npm install
    ```
    

Usage
-----

To run the application, use the following command:


```bash
npm start
```

This command will fetch the current dollar value from the website and print it to the console in the format:



`To get $ 1,00 today we need R$ [value]`

Project Structure
-----------------

*   `index.js`: The main file containing the logic to fetch and parse the dollar value from the website.
*   `package.json`: The configuration file for npm, including project metadata and dependencies.

Functions
---------

*   `accessWebsite()`: Fetches the HTML content of the website and extracts the dollar value.
*   `getDollarValueFromWebsiteContent(websiteContent)`: Parses the HTML content to find the dollar value.
*   `printMessage(value)`: Prints the extracted dollar value to the console.

Dependencies
------------

*   `https`: Node.js module to make HTTPS requests.
*   `@biomejs/biome`: Development dependency for code quality and formatting.
*   `nock`: Development dependency for HTTP server mocking.

Contributing
------------

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/your-feature`).
3.  Commit your changes (`git commit -m 'Add your feature'`).
4.  Push to the branch (`git push origin feature/your-feature`).
5.  Open a pull request.

License
-------

This project is licensed under the MIT License.

Author
------

Pablo Trindade