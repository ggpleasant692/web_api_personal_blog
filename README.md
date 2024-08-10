# web_api_personal_blog

In this challenge, I created a two-page personal blog website where users can input and view blog posts. The application includes a content form, dynamically renders blog posts, and features a light/dark mode toggle. This challenge provided practical experience with JavaScript, DOM manipulation, and web APIs.

## Learning Outcomes

- **Form Handling:** Implemented a form to input blog post data and used localStorage to persist data.
- **Dynamic Rendering:** Developed functionality to display blog posts dynamically on a separate page.
- **Mode Toggle:** Integrated a light/dark mode toggle to enhance user experience.
- **DOM Manipulation:** Gained experience manipulating the DOM to update page content and styles.

## Issues Faced and Resolutions

### Issue 1: Handling Form Validation

**Problem:**
I faced challenges ensuring that all fields in the form (username, title, content) were completed before submission. Initially, the form allowed submission even when fields were empty, leading to incomplete data being stored.

**Resolution:**
To address this, I added JavaScript validation to check if any field was empty before allowing form submission. If any field was empty, a message was displayed prompting the user to complete the form. This was achieved with a simple if statement to validate the inputs.

### Issue 2: Storing and Retrieving Data with localStorage

**Problem:**
I encountered difficulties with storing and retrieving blog post data from localStorage. Data was sometimes not saved correctly or was lost when navigating between pages.

**Resolution:**
I used JSON.stringify() to save data and JSON.parse() to retrieve and parse the data into JavaScript objects. This approach ensured the data was properly formatted and persisted across page loads. Data retrieval was handled on page load to dynamically display the blog posts.

### Issue 3: Implementing Light/Dark Mode Toggle

**Problem:**
Implementing the light/dark mode toggle proved to be challenging. While I was able to get the <body> element to toggle between light and dark modes, I struggled to apply these styles across the entire page consistently. Some elements retained the previous styles.

**Attempted Resolution:**
I resolved part of the issue by toggling CSS classes on the <body> to switch between light and dark mode styles. However, achieving consistent styling across the entire page required more detailed CSS adjustments. I created separate CSS classes for light and dark modes and applied them to the `<body>` and other key elements. Despite this, I faced issues with ensuring that all elements reflected the mode change.

### Issue 4: Navigation Between Pages

**Problem:**
Navigating between the form page and the posts page sometimes led to losing form data or returning to an empty state.

**Resolution:**
To manage smooth navigation, I used window.location to redirect users appropriately upon form submission. I ensured data persistence by correctly handling localStorage operations so that users would not lose their entered data upon returning to the form page.