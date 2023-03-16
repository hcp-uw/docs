---
sidebar_position: 5
---

# Writing Codebase Documentation

---
## Overview
During development, it is important to maintain documentation on the structure of your codebase and the purpose of various things within your code. This documentation should exist in addition to your design specification but can be written over time alongside development. Codebase documentation serves as a point of reference for your team and for everyone that needs to learn about your project codebase and stay up-to-date. So, whenever you contribute code to your codebase, think about whether any of it needs to be documented or explained somewhere.

Codebase documentation includes the following:
- Project README about the project and how to use it
- Programming documentation (each are optional depending on what your project is)
  - Back-end (API docs)
  - Database (structure and usage)
  - Front-end documentation (visual anatomy of website or visual)
- Proper code commenting

Note: before we get started on this README or code documentation, I strongly encourage you to learn how to write Markdown. Markdown is a simple and lightweight way of writing crisp documentation in READMEs and for code documentation (don’t worry, it’s not as complex as LaTeX).

---
## Project README
A README file serves as a guide that gives users a detailed description of the project you have worked on. It can also be described as documentation with guidelines on how to use or deploy your project code. Usually, it will have instructions on how to install and run the project.

Having a project README makes your project stand out from a bunch of others, and also demonstrates what the project is about and how it works at a very high level. Finally, it leaves a strong impression on recruiters and hiring managers looking at your Github contributions

- Read here to see everything you should include in your README: https://tinyurl.com/ycksn75b
- Here’s an example README from an HCP project called HuskyReads: https://tinyurl.com/mr3tz29e

---
## Programming Documentation

### Back-End API Documentation
Now, if you’re working on a full-stack project that has a back-end making APIs for the front-end team to call, this is especially important to do. Your front-end team needs information on how to use the back-end APIs that your back-end team plans to provide, and verbal communication is the worst way to convey that. Treat this like a mini-spec about how your backend should be designed and serve the front end, but there’s no need to go overboard.

Now, when documenting a single API endpoint from your back-end, it’s recommended to include the following:

- Type of API call, see here for more info
- Endpoint URL to call
- What service does the endpoint provide (non-tech description)
- How the API should or should NOT be used.
- Endpoint parameter structure, what are you passing in, and how?
- Endpoint response structure, what is returned?
- Types of error codes and error messages that can be returned

Here’s the back-end API documentation of an HCP project called HuskyReads, a clone of GoodReads: https://tinyurl.com/529d32ux. Feel free to copy this approach!

Take a look at the Java documentation of StringBuilder: https://tinyurl.com/2h3m6ctc
You could definitely model an approach or style from that, but replace the function calls with API endpoint names, parameter requirements, etc.


### Database Documentation
Depending on the database you choose, you may either go with a relational database model or a NoSQL database model. Here’s a resource on the difference between the two models.

Make sure to document the following:
- What’s in your database and how is it structured? Is there a schema?
- What purpose does each component of your database serve and how do they relate to each other?
- Why was this design approach the best for your project?

For the relational model, we recommend using [DrawSQL](https://drawsql.app/) to help map your structure and use the visuals from it for your documentation! For NoSQL, any diagramming tool should work fine like https://app.diagrams.net/.

Examples of database schema: https://tinyurl.com/369fhjrr

### Front-end Documentation
Your front-end documentation should aim to describe the various front-end components and services that you provide to the users and where that happens. Aim to answer the following questions in a README file that you can add in your front-end directory:

- How are you organizing your front-end code in different folders/modules?
- Regarding a specific high-use front-end visual component:
  - How should it be used?
  - How does it behave?
- Similar to the design spec, explain:
  - How are your pages or components organized in your code?
  - What gets used where, and which pages have which features?
  - What other helpful information can you provide to guide a new developer into your codebase?

How-To Links: https://aviyel.com/post/1178/the-do-s-and-don-ts-of-front-end-documentation

### Code Commenting
Every programmer forgets how their old code worked after not working on it for a while. The reason they’re able to go back to their code and continue working on it at a strong pace is that they left comments in their code about how it workeyeaper, you must also aspire to be a great commenter, not just a great coder.

Some general tips include:
- Keep comments brief but informative
- Don’t comment on obvious code
- Write comments above high-use or high-complexity functions to assist programmers as they code about the function’s behavior
- Avoid pushing TODOs in your code unless absolutely necessary.

Best Practices for Writing Code Comments:
- https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/
- https://www.elegantthemes.com/blog/wordpress/how-to-comment-your-code-like-a-pro-best-practices-and-good-habits
