import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { filterHabitablePlanets, Planet } from "./planets.ts";

const HABITABLE_PLANET: Planet = {
    "koi_disposition": "CONFIRMED",
    "koi_prad": "1",
    "koi_srad": "1",
    "koi_smass": "1"
};

const NOT_CONFIRMED: Planet = {
    "koi_disposition": "FALSE POSITIVE",
    "koi_prad": "1",
    "koi_srad": "1",
    "koi_smass": "1"
};

const TOO_LARGE_PLANETARY_RADIUS: Planet = {
    "koi_disposition": "CONFIRMED",
    "koi_prad": "1.5",
    "koi_srad": "1",
    "koi_smass": "1"
};

const TOO_LARGE_SOLAR_MASS: Planet = {
    "koi_disposition": "CONFIRMED",
    "koi_prad": "1",
    "koi_srad": "1.04",
    "koi_smass": "1"
};

const STAR_RADIUS_TOO_LARGE: Planet = {
    "koi_disposition": "CONFIRMED",
    "koi_prad": "1",
    "koi_srad": "1.02",
    "koi_smass": "1"
};

const STAR_RADIUS_TOO_SMALL: Planet = {
    "koi_disposition": "CONFIRMED",
    "koi_prad": "1",
    "koi_srad": "1",
    "koi_smass": "0.78"
};


Deno.test("filter only habitable planets",() => {
    const filtered = filterHabitablePlanets([
        HABITABLE_PLANET,
        NOT_CONFIRMED,
        TOO_LARGE_PLANETARY_RADIUS,
        STAR_RADIUS_TOO_LARGE,
        TOO_LARGE_SOLAR_MASS
    ]);

    assertEquals(filtered, [
        HABITABLE_PLANET
    ]);
});
