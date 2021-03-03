let baseURLs = {
  ws: 'http://ws.spotify.com/lookup/1/.json?uri=%s',
  playlist: 'https://embed.spotify.com/?uri=spotify:user:%s:playlist:%s',
  cover: 'https://embed.spotify.com/oembed/?url=https://open.spotify.com/%type/%uri'
}

export async function getCover(url) {
  return await requestAsync('https://embed.spotify.com/oembed/?url=' + url)
}