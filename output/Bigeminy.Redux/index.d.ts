// module Bigeminy.Redux, generated by purescript-tsd-gen 0.3.0.0
export type /*newtype*/ Action<action> = { type: string; purs: action };
export const /*newtype data ctor*/ Action: <action>(_: { type: string; purs: action }) => Action< action >;
export type /*newtype*/ Reducer<action, state> = (_0: state | null, _1: Action< action >) => state;
export const /*newtype data ctor*/ Reducer: <action, state>(_: (_0: state | null, _1: Action< action >) => state) => Reducer< action, state >;
export const mkAction: <action, r>(_: action) => Action< action >;
export const mkReducer: <action, state>(_: (_: action) => (_: state) => state) => (_: state) => Reducer< action, state >;
export {};