import { serve, listenAndServe } from "https://deno.land/std/http/server.ts";
// const s = serve({ port: 1337 });
// console.log("http://localhost:1337/");

// for await (const req of s) {
//   console.log(req);
//   //   req.respond({ body: "Hello World\n" });
//   req.respond({ body: req.url });
// }

// const body = await Deno.open("./dist/index.html");
const body = await Deno.open("./test.txt");
const options = { port: 8000 };

listenAndServe(options, (req) => {
  console.log(req.method);
  req.respond({ body: body });
});
// for await (const req of s) {
//   console.log(req);
//   //   req.respond({ body: "Hello World\n" });
//   req.respond({ body: req.url });
// }

// import { Server, Router } from "https://deno.land/x/http_wrapper/mod.ts";

// const router = new Router();

// router.get("/", async (req) => {
//   const file = await Deno.open("./dist/index.html");
//   req.respond({
//     status: 200,
//     headers: new Headers({
//       "content-type": "text/html",
//     }),
//     body: file,
//   });
// });

// router.get("/about", async (req) => {
//   const file = await Deno.open("./dist/about/index.html");
//   req.respond({
//     status: 200,
//     headers: new Headers({
//       "content-type": "text/html",
//     }),
//     body: file,
//   });
// });

// const app = new Server();
// app.use(router.routes);

// app.start({ port: 3000 }).then((config) =>
//   console.log(`Server running on localhost:${config.port}`)
// );
