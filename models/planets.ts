import { join } from "https://deno.land/std/path/mod.ts";
import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { parse } from "https://deno.land/std@0.148.0/encoding/csv.ts";
import * as _ from "https://deno.land/x/lodash@4.17.15-es/lodash.js";

export type Planet = Record<string, string>;

let planets: Array<Planet>;

export function filterHabitablePlanets(planets: Array<Planet>) {
    return planets.filter(planet =>{
        const planetRadius = Number(planet["koi_prad"]);
        const starsMass = Number(planet["koi_smass"]);
        const starRadius = Number(planet["koi_srad"]);
        return planet["koi_disposition"] === "CONFIRMED" 
            && planetRadius > 0.5 && planetRadius < 1.5 
            && starRadius > 0.99 && starRadius < 1.01
            && starsMass > 0.78 && starsMass < 1.04;
    });
}

async function loadPlanetsData() {
    const path = join("data", "kepler_exoplanets_nasa.csv");

    const file = await Deno.open(path);
    const bufReader = new BufReader(file);
    const options = {
        skipFirstRow: true,
        comment: "#",
    };
    const result = await parse(bufReader, options);
    Deno.close(file.rid);

    //@ts-ignore
    const planets = filterHabitablePlanets(result as Array<Planet>);    
    return planets.map(planet => {
        return _.pick(planet, [
            "koi_prad",
            "koi_smass",
            "koi_srad",
            "kepler_name",
            "koi_count",
            "koi_steff"
        ])
    });    
}

planets = await loadPlanetsData();

console.log(`${planets.length} habitable planets found`)

export function getAllPlanets() {
    return planets;
}
