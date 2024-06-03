import { register, meter } from "./handlers";

export function handle(state: State, action: EvmAction | MeterAction) {
  switch (action.input.function) {
    case "register":
      return register(state, action as EvmAction);
    case "meter":
      return meter(state, action as MeterAction);
  }
  throw new ContractError("function not recognized");
}
