export const RuleEmail = (_, value) => new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(value)
