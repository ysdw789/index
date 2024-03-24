export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
          url.hostname="14.103.55.75"; // 修改成自己的节点IP/域名
        let new_request = new Request(url, request);
        return fetch(new_request);
      }
      return env.ASSETS.fetch(request);
    },
  };
