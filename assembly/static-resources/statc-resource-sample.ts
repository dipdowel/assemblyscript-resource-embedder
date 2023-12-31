const pointer = memory.data<u8>([
  0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77,
]);

/**
 * A static resource.
 * Generated by running
 * `yarn embed --src=./static/text-sample-file.txt --dest=./assembly/static-resources/ --name=sampleStaticResource --bit=8`
 * or `npm run embed --src=./static/text-sample-file.txt --dest=./assembly/static-resources/ --name=sampleStaticResource --bit=8`
 * @returns {[pointer, length]:Array<u32>} --  [0] -- pointer to the resource, [1] -- size of the resource in bytes
 */
export const sampleStaticResource = [pointer, 8];
