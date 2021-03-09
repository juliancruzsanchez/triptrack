const axios = require('axios');
export async function TopPosts(name) {
  const res = await axios.get(`https://www.reddit.com/r/${name}.json`);
  if (res.length == 0) {
    return false;
  } else {
    const posts = []

    res.data.data.children.forEach(post => {
      posts.push(post.data)
    })
    return posts
  }
}
export async function RandomPost(name) {
  const res = await axios.get(`https://www.reddit.com/r/${name}.json?limit=100`);
  if (res.length == 0) {
    return false;
  } else {
    let max = [];
    max = res.data.data.children.map(i => i.data.ups);
    const rand = Math.floor(Math.random() * max.length);
    const tosubmit = res.data.data.children.filter(i => i.data.ups == max[rand]);
    return tosubmit;
  }
}

export async function SubReddit() {
  const res = await axios.get(`https://www.reddit.com/reddits.json?limit=100`);
  const subs = res.data.data.children.map(i => i.data.display_name);
  const rand = Math.floor(Math.random() * subs.length);
  const recommend = subs[rand];
  return recommend;
}
export async function SpyRedditor(name) {
  const res = await axios.get(`https://www.reddit.com/user/${name}.json`);
  return res.data.data.children.map(i => i.data);
}
export async function AllSubReddit() {
  const res = await axios.get(`https://www.reddit.com/reddits.json?limit=100`);
  const subs = res.data.data.children.map(i => i.data.display_name);
  return subs;
}

