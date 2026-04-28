import Anthropic from "@anthropic-ai/sdk";
const apiKey = import.meta.env.VITE_AI_KEY;

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

const anthropic = new Anthropic({
    // Make sure you set an environment variable in Scrimba
    // for ANTHROPIC_API_KEY
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
}); 

// Gets the current AI model
// for await (const modelInfo of anthropic.models.list()) {
//     console.log(modelInfo.id);
// }

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    console.log(apiKey);

    const msg = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            {
                role: "user",
                content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            },
        ],
    });
    return msg.content[0].text;
}