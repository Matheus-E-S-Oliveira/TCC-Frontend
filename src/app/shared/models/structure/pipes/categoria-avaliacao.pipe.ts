import { CategoriaAvalicaoConstant } from './../constants/categorias-avalicao.constants';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaAvalicao',
  standalone: false
})
export class CategoriaAvalicaoPipe implements PipeTransform {

  transform(situacao: number): string {
    return CategoriaAvalicaoConstant[situacao];
  }

}
