import { getStaticResource } from "./static-resources/get-statc-resource";

/** This function shows how to access static resources embedded into the WASM binary. */
export function useEmbeddedResources(): void {
    console.log("[WASM] useEmbeddedResources();");

    // TODO: Please modify `getStaticResource()` if you need to use more than 1 embedded resource
    const resource: usize[] = getStaticResource(0);

    // Where the embedded resource starts in memory
    const resourcePointer: u32 = resource[0];
    // The size of the embedded resource in bytes (i.e. how many bytes it takes in memory)
    const resourceSize: u32 = resource[1];
    // Where the embedded resource ends in memory
    const resourceAfterLastByte: u32 = resourcePointer + resourceSize;

    // Iterate over the embedded resource and print each byte
    for (let pointer: u32 = resourcePointer; pointer < resourceAfterLastByte; pointer++) {
        const item: u8 = load<u8>(pointer);
        console.log(`[WASM] [0x${pointer.toString(16)}] -> 0x${item.toString(16)}`);
    }

    //TODO: @Leo there must be a 16-bit and a 32-bit examples of embedded resources


}
