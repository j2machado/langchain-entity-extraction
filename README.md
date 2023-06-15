# LangChain Entity Extraction

The goal is to create a **chatbot** capable of parsing all the entities from the user input required to fulfill the user's request.

Below is the example of a simple chatbot that interfaces between the user and the WordPress admin, capable of parsing all the user requirements and fulfill the user's request.

**Example Scenario:**
```text
USER: I want to create a blog post titled My amazing adventure learning LangChain.
AI AGENT: { response: { "post_title": "My amazing adventure learning LangChain", "post_content": "Lorem Ipsum", "post_category": "Uncategorized" } }
```

Based on [Conversational Bot with Entity Extraction](https://github.com/swapnil3597/conversational-bot-with-entity-extraction), and ported to NodeJS.