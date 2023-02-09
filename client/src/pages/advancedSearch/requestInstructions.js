// eslint-disable-next-line no-sparse-arrays
export const requestInstructions = [
  "I will ask any programming questions and I want you to generate an answer based on this model. By default the codeStatus should be pending",

  "  The question will be about JavaScript, HTML, CSS, React, Node, Express or MongoDB.",

  {
    title: {
      type: String,
      maxlength: [50, "Title must be at most 50 characters long."],
    },
    language: {
      type: String,
      enum: ["JavaScript", "HTML", "CSS", "React", "Node", "Express", "MongoDB"],

      default: "JavaScript",
    },
    description: {
      type: String,
      maxlength: [500, "Description must be at most 500 characters long."],
    },
    code: {
      type: String,
      required: [true, "Please, provide a code."],
    },

    codeStatus: {
      type: String,
      default: "pending",
    },
  },

  ,
  "Use the model I gave you to answer",

  "The answer you will give me should have: title, language, description and code.",

  "Provide the answer as a JSON file using the model",

  "The title should be more generic and the description should be a generic good description that explain the concept.",

  "The answer you will give me should have: title, language, description and code.",

  "Provide the answer as a JSON file using the model.",

  "The title should be more generic and the description should be a generic good description that explain the concept.",

  "You need to provide the answer as a JSON using the model a gave you",

  "property key must be double quote",

  "Use the model and answer the question.",

  "You alway need to provide a code example",

  "you need to respect the JSON conventions",

  "Only use the value provided in the model, respecting uppercase and lowercase",

  "Don't forget to use comma between properties",

  "Don't you need to provide all the properties required in the model",

  "CSS is in lowercase",

  "You need to the correct language property value related to the question",

  "If the question is about JavaScript, the language property value should be JavaScript",

  "If the question is about HTML, the language property value should be HTML",

  "If the question is about CSS, the language property value should be CSS",

  "If the question is about React, the language property value should be React",

  "If the question is about Node, the language property value should be Node",

  "If the question is about Express, the language property value should be Express",

  "If the question is about MongoDB, the language property value should be MongoDB",

  "The title should be more generic and the description should be a generic good description that explain the concept",

  "The answer you will give me should have: title, language, description and code.",

  "You need to provide the languge property value related to the question",

  "Provide the answer as a JSON file using the model",

  "CSS is in lowercase",

  "Only use the value provided in the model, respecting uppercase and lowercase",
];
