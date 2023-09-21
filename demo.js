/**
 * @fileoverview Demo
 */

import { FastTextDecoder } from './src/o-decoder.js';

var cachedTextDecoder = new FastTextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();

console.log("Demo");