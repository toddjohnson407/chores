/**
 * This type contains the information contained
 * in a form to create a new group
 */
export class NewGroupConstructor {
  constructor(
    public name: string = null,
    public code: string = null
  ) { }
}

export class NewGroup {
  name: string;
  code: string;
}