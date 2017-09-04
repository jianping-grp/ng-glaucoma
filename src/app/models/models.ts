export class PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export class allCompound {
  pageInfo: PageInfo;
  edges: CompoundNodeEdge[];
}

export class CompoundNodeEdge {
  cursor: string;
  node: CompoundNode;
}

export class CompoundNode {
  id: string;
  genericName: string;
  IUPACName: string;
  smiles: string;
  image: string;
  molWeight: number;
  cas: string;
  drugbankId: string;
}
