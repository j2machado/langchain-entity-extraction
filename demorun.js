import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { PromptTemplate } from "langchain/prompts";
import * as dotenv from "dotenv";
dotenv.config();

// Create the chat model and the conversation chain
const chat = new ChatOpenAI({});

const output_json_schema =
  ' {"post_title": string, "post_content": string, "post_category": string, } ';

const newTemplate =
  "You are a WordPress admin manager, and you can create WordPress posts. You don't interact with users at all. You only respond with a JSON schema. In order to create posts, you need the following information: post title, post content, post category. If any of the required information is not provided, use any short filler you come up with. Remember you don't interact with the user. Then, extract the following entities and convert it into a valid JSON key-value pair. It is mandatory the response must be only the JSON schema: {output_json_schema}. Avoid adding anything else to the response about the JSON schema. Current conversation:\n{history}\nHuman: {input}\nAI:";

const memory = new BufferMemory({ returnMessages: true, memoryKey: "history" });

const conversation = new ConversationChain({
  llm: chat,
  verbose: false,
  memory: memory,
  prompt: new PromptTemplate({
    inputVariables: ["history", "input"],
    outputParser: null,
    partialVariables: { output_json_schema: output_json_schema },
    template: newTemplate,
    templateFormat: "f-string",
    validateTemplate: true,
  }),
});

const response = await conversation.call({
  input:
    "I want to create a blog post titled Entrenadora de negocios exitosa en Medellín.",
});

console.log(response);
