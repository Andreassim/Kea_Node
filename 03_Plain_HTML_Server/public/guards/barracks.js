export const guards = ["Thomas the tank engine", "Hank the tank", "CEPOS"];

export function addGuard(guard) {
  guards.push(guard);
  return guards;  
};