import { Application } from "https://deno.land/x/oak@v10.0.0/mod.ts";

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

app.use((ctx) => {
    ctx.response.body = 
` 
                                                                                                          
                                                                                                          
NNNNNNNN        NNNNNNNN               AAA                 SSSSSSSSSSSSSSS              AAA               
N:::::::N       N::::::N              A:::A              SS:::::::::::::::S            A:::A              
N::::::::N      N::::::N             A:::::A            S:::::SSSSSS::::::S           A:::::A             
N:::::::::N     N::::::N            A:::::::A           S:::::S     SSSSSSS          A:::::::A            
N::::::::::N    N::::::N           A:::::::::A          S:::::S                     A:::::::::A           
N:::::::::::N   N::::::N          A:::::A:::::A         S:::::S                    A:::::A:::::A          
N:::::::N::::N  N::::::N         A:::::A A:::::A         S::::SSSS                A:::::A A:::::A         
N::::::N N::::N N::::::N        A:::::A   A:::::A         SS::::::SSSSS          A:::::A   A:::::A        
N::::::N  N::::N:::::::N       A:::::A     A:::::A          SSS::::::::SS       A:::::A     A:::::A       
N::::::N   N:::::::::::N      A:::::AAAAAAAAA:::::A            SSSSSS::::S     A:::::AAAAAAAAA:::::A      
N::::::N    N::::::::::N     A:::::::::::::::::::::A                S:::::S   A:::::::::::::::::::::A     
N::::::N     N:::::::::N    A:::::AAAAAAAAAAAAA:::::A               S:::::S  A:::::AAAAAAAAAAAAA:::::A    
N::::::N      N::::::::N   A:::::A             A:::::A  SSSSSSS     S:::::S A:::::A             A:::::A   
N::::::N       N:::::::N  A:::::A               A:::::A S::::::SSSSSS:::::SA:::::A               A:::::A  
N::::::N        N::::::N A:::::A                 A:::::AS:::::::::::::::SSA:::::A                 A:::::A 
NNNNNNNN         NNNNNNNAAAAAAA                   AAAAAAASSSSSSSSSSSSSSS AAAAAAA                   AAAAAAA
                                                                                                          
                                                                                                          
                                                                                                          
                                                                                                          
                                                                                                          
                                                                                                          
                                                                                                          
      
                                        Mission Control API`;
});

if (import.meta.main) {
    console.log("Starting server at port 8080...");
    await app.listen({
        port: PORT
    });
}

