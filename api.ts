import { Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import * as planets from "./models/planets.ts";

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
})

export default router;