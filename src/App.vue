<template>
    <div class="container">
        <Brands />
    </div>
</template>

<script>
import Brands from './components/Brands.vue'

export default {
    name: 'App',
    components: {
        Brands
    },
    computed: {
            
        _GET: function () {
            let pairs = window.location.search.substring(1).split("&"),
                pair, i, res = {};
            for ( i in pairs ) {
                if ( pairs[i] === "" ) continue;
                pair = pairs[i].split("=");
                res[ decodeURIComponent(pair[0]) ] = decodeURIComponent(pair[1]);
            }
            return res;
        }

    },
    mounted: function () {
    },
    watch: {},
    methods: {}
}
</script>

<style scoped>
@import './assets/css/bootstrap.min.css';
@import './assets/fonts/font.css';

/* Colors */
:root {
	--yalightgray: #f5f5f5;
	--yagray: #c0c0c0;
	--yadarkgray: #696969;
	
	--yablack: #000000;
	--yawhite: #ffffff;
	
	--yalightblue: #87cefa;
	--yablue: #1e90ff;
	--yadarkblue: #003375;
	--yablackblue: #00214c;
	
	--yalightyellow: #ffe687;
	--yayellow: #fdba4d;
	--yadarkyellow: #ff9e00;
}

body {
	overflow: auto;
}
h1, h2, h3 {
	font-weight: 700;
}
.container {
    max-width: 1700px;
    font-family: 'PT Sans';
    font-weight: normal;
    font-style: normal;
}
.card-header {
    padding: 0.25rem 1.25rem;
}
.badge{padding-right: .6em; padding-left: .6em; font-size: 85%;}
.h-fix450 {
    height: 450px;
    max-height: 450px;
    overflow: auto;
}
.h-fix280 {
    height: 280px;
    max-height: 280px;
    overflow: auto;
}

.bg-yawhite, .bg-yawhite:active, .bg-yawhite:focus {background-color: var(--yawhite); transition: .2s;}
.bg-yalightgray, .bg-yalightgray:active, .bg-yalightgray:focus {background-color: var(--yalightgray); transition: .2s;}
.bg-yagray, .bg-yagray:active, .bg-yagray:focus {background-color: var(--yagray); transition: .2s;}
.bg-yadarkgray, .bg-yadarkgray:active, .bg-yadarkgray:focus {background-color: var(--yadarkgray); transition: .2s;}
.bg-yablack, .bg-yablack:active, .bg-yablack:focus {background-color: var(--yablack); transition: .2s;}
.bg-yawhite, .bg-yawhite:active, .bg-yawhite:focus {background-color: var(--yawhite); transition: .2s;}
.bg-yalightblue, .bg-yalightblue:active, .bg-yalightblue:focus {background-color: var(--yalightblue); transition: .2s;}
.bg-yablue, .bg-yablue:active, .bg-yablue:focus {background-color: var(--yablue); transition: .2s;}
.bg-yadarkblue, .bg-yadarkblue:active, .bg-yadarkblue:focus {background-color: var(--yadarkblue); transition: .2s;}
.bg-yablackblue, .bg-yablackblue:active, .bg-yablackblue:focus {background-color: var(--yablackblue); transition: .2s;}
.bg-yalightyellow, .bg-yalightyellow:active, .bg-yalightyellow:focus {background-color: var(--yalightyellow); transition: .2s;}
.bg-yayellow, .bg-yayellow:active, .bg-yayellow:focus {background-color: var(--yayellow); transition: .2s;}
.bg-yadarkyellow, .bg-yadarkyellow:active, .bg-yadarkyellow:focus {background-color: var(--yadarkyellow); transition: .2s;}
.bg-yagreen, .bg-yagreen:active, .bg-yagreen:focus {background-color: var(--green) !important; transition: .2s;}
.bg-yared, .bg-yared:active, .bg-yared:focus {background-color: var(--red) !important; transition: .2s;}

.bg-h-yawhite:hover {background-color: var(--yawhite); transition: .2s;}
.bg-h-yalightgray:hover {background-color: var(--yalightgray); transition: .2s;}
.bg-h-yagray:hover {background-color: var(--yagray); transition: .2s;}
.bg-h-yadarkgray:hover {background-color: var(--yadarkgray); transition: .2s;}
.bg-h-yablack:hover {background-color: var(--yablack); transition: .2s;}
.bg-h-yawhite:hover {background-color: var(--yawhite); transition: .2s;}
.bg-h-yalightblue:hover {background-color: var(--yalightblue); transition: .2s;}
.bg-h-yablue:hover {background-color: var(--yablue); transition: .2s;}
.bg-h-yadarkblue:hover {background-color: var(--yadarkblue); transition: .2s;}
.bg-h-yablackblue:hover {background-color: var(--yablackblue); transition: .2s;}
.bg-h-yalightyellow:hover {background-color: var(--yalightyellow); transition: .2s;}
.bg-h-yayellow:hover {background-color: var(--yayellow); transition: .2s;}
.bg-h-yadarkyellow:hover {background-color: var(--yadarkyellow); transition: .2s;}

.c-yalightgray {color: var(--yalightgray);}
.c-yagray {color: var(--yagray);}
.c-yadarkgray {color: var(--yadarkgray);}
.c-yablack {color: var(--yablack);}
.c-yawhite {color: var(--yawhite);}
.c-yalightblue {color: var(--yalightblue);}
.c-yablue {color: var(--yayablue);}
.c-yadarkblue {color: var(--yadarkblue);}
.c-yalightyellow {color: var(--yalightyellow);}
.c-yayellow {color: var(--yayellow);}
.c-yadarkyellow {color: var(--yadarkyellow);}

.b-invalid {border: #F04124 1px solid;}

a:hover {
	color: var(--yablackblue);
	text-decoration: none;
	transition: .3s;
}


.worker-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--yagray);
    background-size: 100%;
    border: 2px var(--yagray) solid;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(192,192,192,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(192,192,192,1);
    box-shadow: 0px 0px 5px 0px rgba(192,192,192,1);
}
.worker-img img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}
.online .worker-img {
    border-color: var(--green);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(67,172,106,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(67,172,106,1);
    box-shadow: 0px 0px 5px 0px rgba(67,172,106,1);
}
.offline .worker-img {
    border-color: var(--red);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(240,65,36,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(240,65,36,1);
    box-shadow: 0px 0px 5px 0px rgba(240,65,36,1);
}

.submenu {
    position: absolute;
    z-index: 5;
    left: 0;
    display: none;
    transition: .3s;
}
.submenu.active {
    display: block;
    transition: .3s
}

.brand svg {
    width: 44px;
    height: 22px;
}

.search-result {
    z-index: 5;
    top: 40px;
}

.modal-cover {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.7);
}

.opac {
    opacity: 1;
}

.departs {
    font-size: 1rem;
}
</style>
