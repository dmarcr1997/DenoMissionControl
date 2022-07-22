import { Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import * as planets from "./models/planets.ts";
import * as launches from "./models/launches.ts";

const router = new Router();

router.get("/", (ctx) => {
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

router.get("/planets", (ctx) => { 
    ctx.response.body = planets.getAllPlanets();
});

router.get("/launches", (ctx) => {
    ctx.response.body = launches.getAll();
});

router.get("/launches/:id", (ctx) => {
    if(ctx.params?.id){
        const launchesList = launches.getOne(Number(ctx.params.id));
        if(launchesList){
            ctx.response.body = launchesList
        } else {
            ctx.throw(400, `Launch with ${ctx.params?.id}ID doesn't exist`);
        }
    }
});

export default router;