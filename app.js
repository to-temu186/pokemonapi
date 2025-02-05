$("#aa").on("click", function () {
  // 動作チェックしましょう🤗
  // alert(1);
  fetchPokemons();
});

const pokemonNum = 151;

// 1つめのおまじない→何回実行するかを決めている箇所🤗
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonNum; i++) {
    await getPokemon(i);
  }
};

// 2つめのおまじない→ポケモンのデータを取得している場所🤗
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  // console.log(res, "中身をチェック！resとはレスポンスの意味です🤗");
  const pokemon = await res.json();
  console.log(pokemon, "中身をチェック");

  // この次はこの後書きますが、まずは動かすにはどうするのか？？を学習していただきます🤗注意！この状態ではまだ動いていません🤗
  // 3つめのおまじないに、jsの形に変換した塊を渡してあげる(pokemonと言う箱が)🤗
  createPokemon(pokemon);
};

// 3つ目のおまじない→データの塊とhtmlを組み合わせる、jQueryを使って画面に埋め込む処理の場所🤗

function createPokemon(pokemon) {
  // htmlと塊を組み合わせるテンプレートリテラルというものを使ってがっちゃんこします🤗
  const html = `
    <div>
      <p>No. ${pokemon.id}</p>
      <p>名前: ${pokemon.name}</p>
      <p>高さ: ${pokemon.height}</p>
      <img src="${pokemon.sprites.front_default}"
      <img src="${pokemon.sprites.back_shiny}"
    </div>
  `;

  // jQueryで画面に埋め込む処理🤗
  $(".list").append(html);
}