import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import GeometryLayout from '../geom/GeometryLayout';
import { ReadOptions, WriteOptions } from './Feature';
import TextFeature from './TextFeature';

export interface Options {
    factor?: number;
    geometryLayout?: GeometryLayout;
}
export default class Polyline extends TextFeature {
    constructor(opt_options?: Options);
    protected readFeatureFromText(text: string, opt_options?: ReadOptions): Feature<Geometry>;
    protected readFeaturesFromText(text: string, opt_options?: ReadOptions): Feature<Geometry>[];
    protected readGeometryFromText(text: string, opt_options?: ReadOptions): Geometry;
    protected writeFeaturesText(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    protected writeFeatureText(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    protected writeGeometryText(geometry: Geometry, opt_options?: WriteOptions): string;
}
export function decodeDeltas(encoded: string, stride: number, opt_factor?: number): number[];
export function decodeFloats(encoded: string, opt_factor?: number): number[];
export function decodeSignedIntegers(encoded: string): number[];
export function decodeUnsignedIntegers(encoded: string): number[];
export function encodeDeltas(numbers: number[], stride: number, opt_factor?: number): string;
export function encodeFloats(numbers: number[], opt_factor?: number): string;
export function encodeSignedIntegers(numbers: number[]): string;
export function encodeUnsignedInteger(num: number): string;
export function encodeUnsignedIntegers(numbers: number[]): string;
