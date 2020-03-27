@extends('layout.base', ["current"=>"categorias"])

@section('body')
    <form action = "/{{route('categorias.store')}}" method = "POST">
        @csrf
        <div class = "form-group">
            <h1>Cadastro de Produtos</h1>
            <label for="nome">Nome: </label>
            <input type = "text" class = "form-control" id="nome" name="nome">
            <label for="descricao">Descricao: </label>
            <input type = "text" class = "form-control" id="descricao" name="descricao">
            <label for="preco">Preço: </label>
            <input type = "text" class = "form-control" id="preco" name="preco">
            <label for="foto">Foto: </label>
            <input type = "text" class = "form-control" id="foto" name="foto">
            <select class="form-control" name="categoria" id="categoria">
            @foreach($categorias as $cat)
                <option>{{$cat->nome}}</option>
            @endforeach    
            </select>
            <br>
            <button class = "btn btn-primary" type = "submit">Cadastrar!</button>
        </div>
    </form>
@endsection