import * as reddit from "./redditApi"

async function getCustomFeedItems() {
  var feedContent = [];
  await db.collection("feedContent")
    // .where("state", "==", "CA")
    .onSnapshot(async (querySnapshot) => {
      await querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        console.log(data)
        feedContent.push(data);
      });
    });
  return feedContent

}

function parsePreferences(preferences, isTripping) {
  const content = {
    subReddits: []
  }

  if (preferences.sources.reddit.subscribed) {
    for (let substance of preferences.substances) {
      content.subReddits.push(substance)
    }
  }

  return
}
export async function getFeed() {
  const feed = []
  const preferences = {
    substances: ["lsd", "shrooms"],
    sources: {
      reddit: {
        subscribed: false,
        hiddenSubreddits: []
      }
    }
  }
  //const parsedPrefrences = await parsePreferences(preferences)
  // parsedPrefrences.subReddits.forEach(subreddit => {
  if (preferences.sources.reddit.subscribed) {
    let posts = await reddit.TopPosts('lsd');
    posts.forEach(post => {
      post.contentType = "reddit"
      feed.push(post)
    })
  }
  let customContent =
    await getCustomFeedItems().forEach(post => feed.push(post))
  return feed
  // })
}
