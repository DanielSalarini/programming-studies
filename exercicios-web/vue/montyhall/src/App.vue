<template>
    <div id="app">
        <h1>Problema de  Monty Hall</h1>
        <div class="form" v-if="!started">
            <div>
                <label for="portsAmount">Quantas portas?</label>
                <input type="text" id="portsAmount" size="3" v-model.number="portsAmount">
            </div>
            <div>
                <label for="selectedPort">Qual a porta é premiada?</label>
                <input type="text" id="selectedPort" size="3" v-model.number="selectedPort">
            </div>
            <button @click="started = true">Iniciar</button>
        </div>
        <button v-if="started" @click="started = false">Reiniciar</button>
        <div class="doors" v-if="started">
            <div v-for="i in portsAmount" :key="i">
                <Door :hasGift="i === selectedPort" :number="i"/>
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door'

export default {
    name: 'App',
    components: { Door },
    data: function() {
        return {
            started: false,
            portsAmount: 3,
            selectedPort: null
        }
    }
}
</script>

<style>
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        color: #FFF;
        background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
    }

    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #app h1 {
        border: 1px solid #000;
        background-color: #0004;

        padding: 20px;
        margin-bottom: 60px;
    }

    #app .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-bottom: 40px;

        border: 1px solid #808080;
        background-color: #80808066;

        padding: 10px;
    }

    #app .form input {
        margin-left: 15px;
    }

    #app button, .form, .form input, .form button {
        margin-bottom: 10px;
        font-size: 2rem;
    }

    #app .doors {
        align-self: stretch;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>