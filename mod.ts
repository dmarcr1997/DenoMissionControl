import { Application, send } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import api from './api.ts';

const app = new Application();
const PORT = 8080;

app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.headers.get("X-Response-Time");
    console.log(ctx.request.method, ctx.request.url, time);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${delta.toString()}ms`);
})

app.use(api.routes());
app.use(api.allowedMethods());
app.use( async (ctx) => {
    const filepath = ctx.request.url.pathname;
    
    const fileWhiteList = [
        "/index.html",
        "/javascripts/script.js",
        "/stylesheets/style.css",
        "/images/favicon.png",
    ];
    if(fileWhiteList.includes(filepath)){
        await send(ctx, filepath, {
            root: `${Deno.cwd()}/public`
        });
    } 
})


if (import.meta.main) {
    console.log("Starting server at port 8080...");
    await app.listen({
        port: PORT
    });
}

