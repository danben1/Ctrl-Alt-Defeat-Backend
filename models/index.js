const SUPABASE_URL = process.env.DB_URL;
const SUPABASE_ANON_KEY = process.env.DB_ANON_KEY;

// Initialize the JS client
import { createClient } from "@supabase/supabase-js";
import e from "express";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Make a request
export async function getGuides(city) {
    const citychosen = { city };
    const { data: guides, error } = await supabase
        .from("guides")
        .select("*")
        .eq("primary_location", citychosen);
    return guides;
}

export async function getGuideByLocation(city) {
    const cityName = city.toLowerCase();
    const { data: guides, error } = await supabase
        .from("guides")
        .select("*")
        .eq("primary_location", cityName);
    console.log(cityName, guides, error);
    return guides;
}
