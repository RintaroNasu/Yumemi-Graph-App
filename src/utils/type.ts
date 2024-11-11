export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationData = {
  year: number;
  [prefCode: string]: number;
};
