async function apitest() {
    try {
        let apilist = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data = await apilist.json();
        let recipes = data.recipes;
        console.log(recipes);

        let htmlContent = recipes.map(function(item) {
            return `<div>
                <img src="${item.image_url}">
                <h3>${item.title}</h3>
                <p>${item.publisher}</p>
                <p><a href="${item.source_url}">Recipe Source</a></p>
                <p>Recipe ID: ${item.recipe_id}</p>
            </div>`;
        }).join('');

        let tesst=document.querySelector('#recipe-container');
        tesst.innerHTML=htmlContent;

        // document.getElementById('recipe-container').innerHTML = htmlContent;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}
apitest();
