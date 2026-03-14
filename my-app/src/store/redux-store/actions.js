export const ACTIONS_TYPES = {
  NUM_PLUS: "plus",
  NUM_MINE: "mine",
};

export const numAdd = (step) => ({
  type: ACTIONS_TYPES.NUM_PLUS,
  payload: step,
});

export const numDelete = (step) => ({
  type: ACTIONS_TYPES.NUM_MINE,
  payload: step,
});
