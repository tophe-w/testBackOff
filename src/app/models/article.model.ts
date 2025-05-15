export type ArticleType = 'à la une' | 'flash news' | 'memo';
export type ArticleState = 'publisen création' | 'publié' | 'a valider' | 'archivé' | 'programmé' | 'programmé avec notification'  ;

export interface Article {
  id: string;
  title: string;
  lastModification: Date;
  description: string;
  type: ArticleType;
  state: ArticleState;
  publisher: string;
  rubrique: string;
  verrouilléPar: string;
}
