import React, { useCallback } from "react";
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID as string

const Register = () => {
  const addItem = useCallback(async (text) => {
    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          title: {
            title: [
              {
                text: {
                  content: text,
                },
              },
            ],
          },
        },
      });
      console.log(response);
      console.log("Success! Entry added.");
    } catch (error) {
      console.error(error.body);
    }
  }, []);
  return (
    <div>
      register
      <button onClick={() => addItem("Yurts in Big Sur, California")}>asdasd</button>
    </div>
  );
};

export default Register
