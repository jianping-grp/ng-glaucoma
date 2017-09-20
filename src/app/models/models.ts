export class PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export class allCompounds {
  pageInfo: PageInfo;
  edges: CompoundNodeEdge[];
}

export class CompoundNodeEdge {
  cursor: string;
  node: CompoundNode;
}

export class CompoundNode {
  id: any;
  genericName: string;
  IUPACName: string;
  smiles: string;
  image: string;
  molWeight: number;
  cas: string;
  drugbankId: string;
  uniprotinfoSet: allUniprots;
}

export class allUniprots {
  pageInfo: PageInfo;
  edges: UniprotinfoNodeEdge[];
}

export class UniprotinfoNodeEdge {
  cursor: string;
  node: UniprotinfoNode;
}

export class UniprotinfoNode {
  id: any;
  entry: string;
  entryname: string;
  compounds: allCompounds;
}
