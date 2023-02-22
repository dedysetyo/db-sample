import { Amplify, API, graphqlOperation } from "aws-amplify";

import awsconfig from "./aws-exports";
import { createListSettings } from "./graphql/mutations";
import { listListSettings } from "./graphql/queries";

Amplify.configure(awsconfig);

async function createNewTodo() {
  const todo = {
    list_name: "Your List name",
    description: `Realtime and Offline (${new Date().toLocaleString()})`,
    moderator_email: "asdf@jklm.com"
  };

  return await API.graphql(graphqlOperation(createListSettings, { input: todo }));
}

async function getData() {
    API.graphql(graphqlOperation(listListSettings)).then((evt) => {
        evt.data.listListSettings.items.map((list, i) => {
            QueryResult.innerHTML += `<p>${list.list_name} - ${list.description} - ${list.moderator_email}</p>`;
        });
    });
}

const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");
const QueryResult = document.getElementById("QueryResult");

MutationButton.addEventListener("click", (evt) => {
  createNewTodo().then((evt) => {
    MutationResult.innerHTML += `<p>${evt.data.createListSettings.name} - ${evt.data.createListSettings.description}</p>`;
  });
});

getData();