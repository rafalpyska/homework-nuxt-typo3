<template>
    <span
			class="toggle"
			role="checkbox"
      tabindex="0"
			:aria-checked="value.toString()"
			@click="toggle"
			@keydown.space.prevent="toggle"
    />
</template>
<script>
	export default {
		name: 'UiToggle',
		props: {
			value: {
				type: Boolean,
				required: true,
			},
		},
		methods: {
			toggle() {
				const { value } = this;
				this.$emit('input', !value);
			},
		}
	}
</script>
<style scoped lang="scss">
	.toggle {
		position: relative;
		display: inline-block;
		flex-shrink: 0;
		border-radius: 9999px;
		cursor: pointer;
		height: 1.5rem;
		width: 3rem;
		&:focus {
			outline: 0;
		box-shadow: 0 0 0 4px rgba(52, 144, 220, 0.5);
		}
		&::before {
			display: inline-block;
			border-radius: 9999px;
			height: 100%;
			width: 100%;
			background-color: #dae1e7;
			content: "";
			box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
			transition: background-color 0.2s ease;
		}
		&::after {
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 9999px;
			height: 1.5rem;
			width: 1.5rem;
			background-color: #fff;
			border-width: 1px;
			border-color: #dae1e7;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
			content: "";
			transition: transform 0.2s ease;
			transform: translateX(0);
		}
	}
	.toggle[aria-checked="true"]::before {
		background-color: #3490dc;
	}
	.toggle[aria-checked="true"]::after {
		transform: translateX(1.5rem);
	}
</style>