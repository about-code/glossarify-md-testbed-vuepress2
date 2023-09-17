<template><div><h1 id="plug-ins" tabindex="-1"><a class="header-anchor" href="#plug-ins" aria-hidden="true">#</a> Plug-Ins</h1>
<h2 id="json-ld-playground" tabindex="-1"><a class="header-anchor" href="#json-ld-playground" aria-hidden="true">#</a> JSON-LD Playground</h2>
<p><code v-pre>npm i vuepress-plugin-jsonld-playground</code></p>
<p><em>JSON-LD-Playground:</em></p>
<json-ld view="compacted" data="CustomerDB Record" data2="ShopDB Record" framed="CustomerDB and ShopDB Record Integrated">
{
    "@context": {
        "@vocab": "https://data.my.org/vocabulary/",
        "@base": "https://data.my.org/entities/"
    },
    "@id": "1",
    "@type": "Person",
    "name": "Carlsson",
    "firstname": "Magnus",
    "hobbies": "Playing Chess",
    "age": "27",
    "parents": [{
        "@id": "2",
        "@type": "Person",
        "firstname": "Maria",
        "name": "Lindvik"
    }, {
        "@id": "3",
        "@type": "Person",
        "firstname": "Carl",
        "name": "Gustavson"
    }]
}
<template v-slot:data2>
{
    "@context": {
        "@vocab": "https://data.my.org/vocabulary/",
        "@base": "https://data.my.org/entities/"
    },
    "@id": "a",
    "@type": "ShopAccount",
    "customer": [{
        "@id": "1",
        "@type": "Person",
        "shopping_cart": [{
            "@id": "b",
            "@type": "Article",
            "price": "22.95",
            "currency": "EUR"
        }]
    }]
}
</template>
<template v-slot:frame>
{
    "@context": {
        "@vocab": "https://data.my.org/vocabulary/",
        "@base": "https://data.my.org/entities/",
        "shopping_cart": { "@container": "@set" }
    },
    "@type": "ShopAccount",
    "customer": [{
        "@type": "Person",
        "shopping_cart": {
            "@type": "Article"
        }
    }]
}
</template>
</json-ld>
</div></template>


