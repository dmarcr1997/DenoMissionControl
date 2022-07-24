import { 
    log,
    join,
    parse,
    BufReader,
    pick,
} from "../deps.ts";

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
        return pick(planet, [
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

log.info(`${planets.length} habitable planets found`)

export function getAllPlanets() {
    return planets;
}
