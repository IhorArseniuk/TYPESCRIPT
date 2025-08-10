// task 11-1 #HmvAfRQM //
let container = document.getElementById('container') as HTMLDivElement;
{
     interface IProducts {
        id: number;
        title: string;
        price: number;
        quantity: number;
        total: number;
        discountPercentage: number;
        discountedTotal: number;
        thumbnail: string;
    }

    interface Icart {
        id: number;
        products: IProducts[];
        total: number;
        discountedTotal: number;
        userId: number;
        totalProducts: number;
        totalQuantity: number;
    }
    interface ICartResponse {
        carts: Icart[];
        total: number;
        skip: number;
        limit: number;
    }


  let cartsBtn = document.getElementById('cartsShow') as HTMLButtonElement;
    cartsBtn.addEventListener('click', (event)=>{
            container.innerHTML=''
            fetch('https://dummyjson.com/carts')
                .then(res => res.json())
                .then((res:ICartResponse) => {
                    for(const cart of res.carts){
                        let divCart:HTMLDivElement=document.createElement('div');
                        divCart.className='div-cart';

                        const id:HTMLHeadingElement=document.createElement('h3');
                        id.innerText='ID'+' ' + cart.id;

                        const productsDiv:HTMLOListElement=document.createElement('ol');
                        productsDiv.className='products-div';

                        const productP:HTMLHeadingElement=document.createElement('h4')
                        productP.innerText='Products:';

                        productsDiv.appendChild(productP);

                        const {products}=cart;

                        for(const product of products){
                            const productInfo:HTMLLIElement=document.createElement('li');
                            productInfo.innerText=product.title;

                            const productImg:HTMLImageElement=document.createElement('img');
                            productImg.className='product-img';
                            productImg.src=product.thumbnail;

                            const productPrice:HTMLParagraphElement=document.createElement('p');
                            productPrice.innerText=product.price+'$';

                            productsDiv.append(productInfo,productImg,productPrice);
                        }

                        const totalPrice:HTMLParagraphElement=document.createElement('p');
                        totalPrice.className='total-price';
                        totalPrice.innerText='Price:'+ ' ' +cart.total+'-USD';

                        const discountedTotalPrice:HTMLParagraphElement=document.createElement('p');
                        discountedTotalPrice.className='discounted-price';
                        discountedTotalPrice.innerText='Discounted price:'+' '+cart.discountedTotal+'-USD';

                        const userId:HTMLHeadingElement=document.createElement('h4');
                        userId.innerText='User id '+' ' + cart.userId;

                        const totalProducts:HTMLParagraphElement=document.createElement('p');
                        totalProducts.innerText='Total products:'+' '+cart.totalProducts;

                        const totalQuantity:HTMLParagraphElement=document.createElement('p');
                        totalQuantity.innerText='Total Quantity:'+' '+cart.totalQuantity;

                        divCart.append(id,productsDiv,totalPrice,discountedTotalPrice,userId,totalProducts,totalQuantity);
                        container.appendChild(divCart);
                    }

                })
        }
    )}
// task 11-2  #whXxOBlYS0H //
{
     interface Irecipe  {
        id: number;
        name: string;
        ingredients: string[];
        instructions: string[];
        prepTimeMinutes: number;
        cookTimeMinutes: number;
        servings: number;
        difficulty: string;
        cuisine: string;
        caloriesPerServing: number;
        tags: string[];
        userId: number;
        image: string;
        rating: number;
        reviewCount: number;
        mealType: string[];
    }
    interface IRecepiesResponse {
        recipes: Irecipe[];
        total: number;
        skip: number;
        limit: number;
    }
    let  recipesBtn = document.getElementById('recipesShow') as HTMLDivElement;


    recipesBtn.addEventListener('click',(event)=>{

        fetch('https://dummyjson.com/recipes')
            .then(res=>res.json())
            .then((res:IRecepiesResponse) => {
                container.innerHTML=''
                for(const recipe of res.recipes){
                    const divRecipe:HTMLDivElement =document.createElement('div');
                    divRecipe.className='div-recipe';

                    const recipeId:HTMLHeadingElement=document.createElement('h2');
                    recipeId.innerText=String(recipe.id);

                    const recipeName:HTMLHeadingElement=document.createElement('h3');
                    recipeName.innerText=recipe.name;

                    const recipeIngredients:HTMLOListElement=document.createElement('ol');

                    const ingredientsH3:HTMLHeadingElement=document.createElement('h3')
                    ingredientsH3.innerText='Ingredients:';
                    recipeIngredients.appendChild(ingredientsH3);

                    for(const ingredient of recipe.ingredients){
                        const ingredien:HTMLLIElement=document.createElement('li');
                        ingredien.innerText=ingredient
                        recipeIngredients.appendChild(ingredien)
                    }

                    const recipeInstruction:HTMLParagraphElement=document.createElement('p');
                    recipeInstruction.innerText='Instruction:'+' '+recipe.instructions;

                    const recipePreperingTime:HTMLParagraphElement=document.createElement('p');
                    recipePreperingTime.innerText='Prepering Time:'+' '+recipe.prepTimeMinutes;

                    const recipeCookingTime:HTMLParagraphElement=document.createElement('p');
                    recipeCookingTime.innerText='Cooking Time:'+' '+recipe.cookTimeMinutes;

                    const recipeServering:HTMLParagraphElement=document.createElement('p');
                    recipeServering.innerText='Servering:'+' '+recipe.servings;

                    const recipeDifficulty:HTMLHeadingElement=document.createElement('h4');
                    recipeDifficulty.innerText='Difficulty:'+' '+recipe.difficulty;

                    const recipeCuisine:HTMLParagraphElement=document.createElement('p');
                    recipeCuisine.innerText='Cuisine:'+' ' +recipe.cuisine;

                    const recipeCalories:HTMLElement=document.createElement('b');
                    recipeCalories.innerText='Calories:'+' '+recipe.caloriesPerServing;

                    const recipeTags:HTMLDivElement=document.createElement('div');
                    recipeTags.innerText='Tags:'+' '

                    for(const tag of recipe.tags){
                        const tg:HTMLSpanElement=document.createElement('span');
                        tg.innerText='#'+tag;
                        recipeTags.appendChild(tg);
                    }
                    const recipeUserId:HTMLHeadingElement=document.createElement('h4');
                    recipeUserId.innerText='User:'+' '+recipe.userId;

                    const recipeImg:HTMLImageElement=document.createElement('img');
                    recipeImg.src=recipe.image;

                    const recipeRating:HTMLParagraphElement=document.createElement('p');
                    recipeRating.innerText=' ✯'+' '+recipe.rating;

                    const recipeReview:HTMLParagraphElement=document.createElement('p');
                    recipeReview.innerText='Review:'+' '+recipe.reviewCount;

                    const recipeType:HTMLParagraphElement=document.createElement('h5');
                    recipeType.innerText='Type:'+' ';
                    for(const type of recipe.mealType){
                        const tp:HTMLSpanElement=document.createElement('span');
                        tp.innerText=type
                        tp.style.margin='0 5px';
                        recipeType.appendChild(tp);
                    }

                    divRecipe.append(recipeId,recipeName,recipeIngredients,recipeInstruction,recipePreperingTime,recipeCookingTime,recipeServering,recipeDifficulty,recipeCuisine,recipeCalories, recipeTags,recipeUserId,recipeImg,recipeRating,recipeReview,recipeType);

                    container.appendChild(divRecipe);
                }
            })
    })
}

