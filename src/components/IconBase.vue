<template>
    <svg
        xmlns="http://www.w3.org/2000/svg" 
        :width="width" 
        :height="height" 
        viewBox="0 0 150 75" 
        :aria-labelledby="iconName" 
        role="presentation"
    >
        <title
        :id="iconName"
        lang="en"
        >{{ iconName }} icon</title>
        <g>
            <slot />
        </g>
    </svg>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            default: 'logoholding'
        },
        width: {
            type: [Number, String],
            default: 150
        },
        height: {
            type: [Number, String],
            default: 75
        }
    }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>