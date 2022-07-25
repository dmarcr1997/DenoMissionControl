FROM denoland/deno:alpine-1.23.4

WORKDIR /app

COPY . .

USER deno

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "mod.ts"]

EXPOSE 8080