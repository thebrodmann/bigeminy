// module Data.Maybe, generated by purescript-tsd-gen 0.3.0.0
import * as Data_Bounded from "../Data.Bounded";
import * as Data_Eq from "../Data.Eq";
import * as Data_Monoid from "../Data.Monoid";
import * as Data_Ord from "../Data.Ord";
import * as Data_Semigroup from "../Data.Semigroup";
import * as Data_Show from "../Data.Show";
import * as Data_Unit from "../Data.Unit";
export type /*data*/ Maybe<a> = Maybe$$Nothing | Maybe$$Just< a >;
interface Maybe$$Nothing {
    "$$pursType": "Data.Maybe.Maybe";
    "$$pursTag": "Nothing";
}
export const /*data ctor*/ Nothing: { value: Maybe< any /* type variable a */ >; new (): Maybe$$Nothing };
interface Maybe$$Just<a> {
    "$$pursType": "Data.Maybe.Maybe";
    "$$pursTag": "Just";
    value0: a;
}
export const /*data ctor*/ Just: { create: <a>(_: a) => Maybe< a >; new <a>(_: a): Maybe$$Just< a > };
export const maybe: <a, b>(_: b) => (_: (_: a) => b) => (_: Maybe< a >) => b;
declare const maybe$prime: <a, b>(_: (_: Data_Unit.Unit) => b) => (_: (_: a) => b) => (_: Maybe< a >) => b;
// The identifier "maybe'" cannot be expressed in JavaScript:
// export { maybe$prime as maybe' };
export const fromMaybe: <a>(_: a) => (_: Maybe< a >) => a;
declare const fromMaybe$prime: <a>(_: (_: Data_Unit.Unit) => a) => (_: Maybe< a >) => a;
// The identifier "fromMaybe'" cannot be expressed in JavaScript:
// export { fromMaybe$prime as fromMaybe' };
export const isJust: <a>(_: Maybe< a >) => boolean;
export const isNothing: <a>(_: Maybe< a >) => boolean;
export const fromJust: <a>(_: any /* Prim.Partial */) => (_: Maybe< a >) => a;
export const optional: <a>(_: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Alternative"}])) (ProperName {runProperName = "Alternative"}))) (TypeVar (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 37}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 38}},[]) "f") */) => (_: any /* TypeApp (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 42}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 45}},[]) (TypeVar (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 42}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 43}},[]) "f") (TypeVar (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 44}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 45}},[]) "a") */) => any /* TypeApp (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 49}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 60}},[]) (TypeVar (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 49}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 50}},[]) "f") (TypeApp (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 52}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 59}},[]) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 52}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 57}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) (TypeVar (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 277, sourcePosColumn = 58}, spanEnd = SourcePos {sourcePosLine = 277, sourcePosColumn = 59}},[]) "a")) */;
export const /*instance*/ functorMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Functor"}])) (ProperName {runProperName = "Functor"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 32, sourcePosColumn = 34}, spanEnd = SourcePos {sourcePosLine = 32, sourcePosColumn = 39}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ applyMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Apply"}])) (ProperName {runProperName = "Apply"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 67, sourcePosColumn = 30}, spanEnd = SourcePos {sourcePosLine = 67, sourcePosColumn = 35}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ applicativeMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Applicative"}])) (ProperName {runProperName = "Applicative"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 90, sourcePosColumn = 42}, spanEnd = SourcePos {sourcePosLine = 90, sourcePosColumn = 47}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ altMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Alt"}])) (ProperName {runProperName = "Alt"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 102, sourcePosColumn = 26}, spanEnd = SourcePos {sourcePosLine = 102, sourcePosColumn = 31}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ plusMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Plus"}])) (ProperName {runProperName = "Plus"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 111, sourcePosColumn = 28}, spanEnd = SourcePos {sourcePosLine = 111, sourcePosColumn = 33}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ alternativeMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Alternative"}])) (ProperName {runProperName = "Alternative"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 116, sourcePosColumn = 42}, spanEnd = SourcePos {sourcePosLine = 116, sourcePosColumn = 47}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ bindMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Bind"}])) (ProperName {runProperName = "Bind"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 125, sourcePosColumn = 28}, spanEnd = SourcePos {sourcePosLine = 125, sourcePosColumn = 33}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ monadMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Monad"}])) (ProperName {runProperName = "Monad"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 144, sourcePosColumn = 30}, spanEnd = SourcePos {sourcePosLine = 144, sourcePosColumn = 35}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ monadZeroMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "MonadZero"}])) (ProperName {runProperName = "MonadZero"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 146, sourcePosColumn = 38}, spanEnd = SourcePos {sourcePosLine = 146, sourcePosColumn = 43}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ extendMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Control"},ProperName {runProperName = "Extend"}])) (ProperName {runProperName = "Extend"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 156, sourcePosColumn = 32}, spanEnd = SourcePos {sourcePosLine = 156, sourcePosColumn = 37}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ invariantMaybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Functor"},ProperName {runProperName = "Invariant"}])) (ProperName {runProperName = "Invariant"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 160, sourcePosColumn = 38}, spanEnd = SourcePos {sourcePosLine = 160, sourcePosColumn = 43}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ semigroupMaybe: <a>(_: Data_Semigroup.Semigroup< a >) => Data_Semigroup.Semigroup< Maybe< a > >;
export const /*instance*/ monoidMaybe: <a>(_: Data_Semigroup.Semigroup< a >) => Data_Monoid.Monoid< Maybe< a > >;
export const /*instance*/ eqMaybe: <a>(_: Data_Eq.Eq< a >) => Data_Eq.Eq< Maybe< a > >;
export const /*instance*/ eq1Maybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Eq"}])) (ProperName {runProperName = "Eq1"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 187, sourcePosColumn = 26}, spanEnd = SourcePos {sourcePosLine = 187, sourcePosColumn = 31}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ ordMaybe: <a>(_: Data_Ord.Ord< a >) => Data_Ord.Ord< Maybe< a > >;
export const /*instance*/ ord1Maybe: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Ord"}])) (ProperName {runProperName = "Ord1"}))) (TypeConstructor (SourceSpan {spanName = ".spago/maybe/v4.0.1/src/Data/Maybe.purs", spanStart = SourcePos {sourcePosLine = 196, sourcePosColumn = 28}, spanEnd = SourcePos {sourcePosLine = 196, sourcePosColumn = 33}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Maybe"}])) (ProperName {runProperName = "Maybe"}))) */;
export const /*instance*/ boundedMaybe: <a>(_: Data_Bounded.Bounded< a >) => Data_Bounded.Bounded< Maybe< a > >;
export const /*instance*/ showMaybe: <a>(_: Data_Show.Show< a >) => Data_Show.Show< Maybe< a > >;
export {};
