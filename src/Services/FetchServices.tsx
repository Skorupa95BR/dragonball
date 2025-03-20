export interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: string | null;
  }
  
  export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  }
  
  export interface Links {
    first: string;
    previous: string | null;
    next: string | null;
    last: string;
  }
  
  export interface DragonBallApiResponse {
    items: Character[];
    meta: Meta;
    links: Links;
  }
  
  export const fetchChar = async (): Promise<DragonBallApiResponse | null> => {
    try {
      const response = await fetch("https://dragonball-api.com/api/characters");
      if (!response.ok) {
        throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
      }
      const data: DragonBallApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return null;
    }
  };
  