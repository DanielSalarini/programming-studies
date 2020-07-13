<template>
    <div id="app">
        <h1>Calculator</h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from './main/Calculator'

export default {
    components: { Calculator }
}
</script>

<style>
    @font-face {
        font-family: "RobotoMono";
        src: url("./fonts/RobotoMono-Thin.ttf");
    }

    * {
        font-family: "RobotoMono", monospace;
    }

    body {
        margin: 0;
    }

    #app {
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
        color: #fff;

        background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
    }
</style>