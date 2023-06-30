// The entry point of your WebAssembly module.

import { addTwoNumbers } from "./helpers/add-two-numbers";
import { getStaticResource } from "./static-resources/get-statc-resource";
import {useEmbeddedResources} from "./use-embedded-resources";

/**
 * This is a simple addition of two i32 values.
 * Under the hood the addition will be
 */
export function run(): void {
  console.log("[WASM] Hi from the WASM world!");

  // The implementation of `useEmbeddedResources()` explains how to use static resources
  useEmbeddedResources();


}
