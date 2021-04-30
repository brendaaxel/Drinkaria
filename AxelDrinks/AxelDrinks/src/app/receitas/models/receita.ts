// export class Receita {
//   public nome: string;
//   public id: string;
//   public categoria: string;
//   public ingredientes: Array<{nome: string, quantidade: string}> = [];
//   public imagem: string;
//   public instrucao: string;
//   public taca: string;
//   public alcoolico: boolean;

//   constructor(drink) {
//     this.nome = drink.strDrink;
//     this.id = drink.idDrink;
//     this.categoria = drink.strCategory;
//     this.imagem = drink.strDrinkThumb;
//     this.instrucao = drink.strInstructions;
//     this.taca = drink.strGlass;
//     this.alcoolico = (drink.strAlcoholic === 'Alcoolico');
//     for (let i = 1; i < 16; i++) {
//       if (drink['strIngredient' + i] !== '') {
//         this.ingredientes.push({
//           nome: drink['strIngredient' + i],
//           quantidade: drink['strMeasure' + i]
//         });
//       }
//     }
//   }
// }




export class Receita {
  drinks: ListaDeReceita[];
}

export class ListaDeReceita {
  idDrink: number;
  strDrink?: string;
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strCategory?: string;
  strIBA?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  strDrinkThumb?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed: string;
  dateModified: Date;
  strInstructionsZH_HANS?: string;
  strInstructionsZH_HANT?: string;
}
